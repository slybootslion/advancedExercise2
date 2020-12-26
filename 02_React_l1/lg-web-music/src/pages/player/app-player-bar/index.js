import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Slider } from "antd";

import { AppPlayerBarWrapper } from "./style";
import { changeCurrentSongAction, changeSequenceAction, getPlayingSongAction } from "../store/action";
import { formatMinuteSecond, formatSongUrlById, getSizeImage } from "../../../utils/format-utils";

function AppPlayerBar (props) {
  // state
  const [songUrl, setSongUrl] = useState('')
  const [playStatus, setPlayStatus] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [tipTime, setTipTime] = useState(0)
  const [sliderNum, setSliderNum] = useState(0)
  const [sliderLock, setSliderLock] = useState(false)

  // redux hooks
  const { song, sequence, playList } = useSelector(state => ({
    song: state.getIn(['player', 'playingSong']),
    playList: state.getIn(['player', 'playList']),
    sequence: state.getIn(['player', 'sequence'])
  }), shallowEqual)
  //
  const dispatch = useDispatch()

  // router hooks
  const history = useHistory()

  // hooks
  const { al = {}, ar = [], name, dt, id } = song
  const audioRef = useRef()

  // useEffect(() => dispatch(getPlayingSongAction(436514312)), [dispatch])
  useEffect(() => dispatch(getPlayingSongAction(playList[0].id)), [dispatch, playList])

  useEffect(() => {
    changeSong()
  })

  const changeValue = useCallback(async e => {
    setSliderLock(true)
    setSliderNum(e)
    setTipTime(e / 100 * dt)
  }, [dt])

  const valueChanged = useCallback(e => {
    audioRef.current.currentTime = e / 100 * dt / 1000
    setSliderLock(false)
  }, [dt])

  // methods
  function asyncFn (fun) {
    return new Promise(resolve => {
      fun()
      resolve()
    })
  }

  function changeSong () {
    asyncFn(() => setSongUrl(formatSongUrlById(id)))
      .then(res => {
        if (playStatus) {
          audioRef.current.play()
            .then(res => setPlayStatus(true))
            .catch(err => {
              dispatch(changeCurrentSongAction(1))
              setPlayStatus(true)
            })
        }
      })
  }

  async function playMusic () {
    playStatus ? audioRef.current.pause() : audioRef.current.play()
    setPlayStatus(!playStatus)
  }

  function changeMusic (tag) {
    dispatch(changeCurrentSongAction(tag))
  }

  function handleEnded () {
    if (sequence !== 3) {
      dispatch(changeCurrentSongAction(1))
      return
    }
    changeSong()
  }

  function tipTimeChange () {
    return sliderLock ? formatMinuteSecond(tipTime) : formatMinuteSecond(currentTime)
  }

  function timeUpdate (e) {
    const { currentTime } = e.target
    setCurrentTime(parseInt(currentTime * 1000))
    if (!sliderLock) setSliderNum(parseInt(currentTime * 1000 / dt * 100))
  }

  function goPlayPage () {
    history.push({
      pathname: '/song/' + id,
    })
  }

  function changeSequence () {
    const seq = sequence >= 3 ? 1 : sequence + 1
    dispatch(changeSequenceAction(seq))
  }

  return (
    <AppPlayerBarWrapper className="sprite_player"
                         isPlaying={playStatus}
                         sequence={sequence}>
      <div className="content wrap-v2">
        <div className="control">
          <button className="sprite_player prev"
                  onClick={() => changeMusic(-1)}/>
          <button className="sprite_player play"
                  onClick={playMusic}/>
          <button className="sprite_player next"
                  onClick={() => changeMusic(1)}/>
        </div>
        <div className="playinfo">
          <div className="image" onClick={goPlayPage}>
            <img src={getSizeImage(al?.picUrl, 34, 35)} alt=""/>
          </div>
          <div className="info">
            <div className="song">
              <div className="song-name">{name}</div>
              <div className="singer-name">{ar.map(a => a.name).join('/')}</div>
            </div>
            <div className="progress">
              <Slider defautValue={0}
                      tipFormatter={tipTimeChange}
                      onChange={changeValue}
                      onAfterChange={valueChanged}
                      value={sliderNum}/>
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(dt)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="operator">
          <div className="left">
            <button className="sprite_player btn favor"/>
            <button className="sprite_player btn share"/>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"/>
            <button className="sprite_player btn loop"
                    onClick={changeSequence}/>
            <button className="sprite_player btn playlist"/>
            <span className="list-count">{playList.length}</span>
          </div>
        </div>
      </div>
      <audio src={songUrl}
             ref={audioRef}
             onEnded={handleEnded}
             onTimeUpdate={timeUpdate}/>
    </AppPlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
