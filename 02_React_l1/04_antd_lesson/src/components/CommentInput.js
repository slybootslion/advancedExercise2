import React, { PureComponent, Fragment } from 'react';

import { Input, Button } from 'antd'
import dayjs from 'dayjs'

const { TextArea } = Input

class CommentInput extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      txt: ''
    }
    this.id = 0
  }

  render () {
    const { txt } = this.state
    return (
      <Fragment>
        <TextArea className={'textarea'}
                  rows={5}
                  value={txt}
                  onChange={e => this.txtChange(e)}/>
        <div className={'btn-input'}>
          <Button className={'add-btn'} type={'primary'} onClick={() => this.onSubmit()}>
            add comment
          </Button>
        </div>
      </Fragment>
    );
  }

  txtChange (e) {
    const txt = e.target.value
    this.setState({
      txt
    })
  }

  onSubmit () {
    const comments = [
      '某天，你也许无端想起一个人，她曾让你对明天有所期许，但是却完全没有出现在你的明天里。 有些心里话说出来好受多了，不然憋出病的，反正你们也不认识我。',
      '我们都曾认真爱过一个人 我们都曾彻底失去一个人 我们曾经和现在都舍不得 可是沧海桑田 我们最终还是会继续往前 我们都有属于自己的人生',
      '我终于熬过那段，看谁都像你，干什么都能想起你，听的歌都是关于你的日子，很庆幸，我终于可以，不问归期，不用联系，不再想你，不再等你',
      '那些翻着评论，自己却从来不评论的人，或许才是真正孤独寂寞的人，有一种人，天天都笑嘻嘻的，好似和谁都合得来，但是从来不主动联系朋友，脾气也好得出奇，好像世上没有什么事情能让他们愤怒和悲伤，这一种人，懒得咒骂，懒得分享心情，也无心去写矫情的文字，你问他怎么了，他只是一笑，只有在翻着书，亦是戴着耳机，翻着评论，看到共鸣之处，忍不住心中一阵颤栗，听歌还看评论？你应该很孤独吧，滑着滑着，看到触动内心的句子，眼泪就控制不住的涌上来。 可能现在的你也是这样吧'
    ]

    const users = [{
      name: '简单的生活',
      avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=n9lnaGksYBgU9ZMtjPL0LQ&s=140&t=1592399457'
    }, {
      name: 'Chihiro',
      avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=BRFCT5psAPLdtGzsqNl2LQ&s=140&t=1608137551'
    }, {
      name: 'Buried',
      avatar: 'https://pic.y.qq.com/qqmusic/avatar/6f4b366b6f7745416f4b347a376563416f77456c6f69766b377a2a2a-1596797928',
    }, {
      name: '虎妞',
      avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=RKyB1k50Djf3EUagIRyuPw&s=140&t=1556687071'
    }]

    const roundNum = Math.round(Math.random() * 3)
    const user = users[roundNum]

    const { handleSubmit } = this.props
    this.id++
    const { txt } = this.state

    const data = {
      id: this.id,
      txt: txt || comments[roundNum],
      avatar: user.avatar,
      username: user.name,
      time: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }

    handleSubmit(data)
    this.setState({ txt: '' })
  }
}

export default CommentInput;
