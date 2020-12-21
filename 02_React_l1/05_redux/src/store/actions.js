import axios from "axios";
import { ADD_NUMBER, CHANGE_BANNER, SUB_NUMBER, CHANGE_RECOMMEND } from "./constants.js";

export const addAction = num => ({ type: ADD_NUMBER, num })
export const subAction = num => ({ type: SUB_NUMBER, num })

export const bannerAction = banner => ({ type: CHANGE_BANNER, banner })
export const recommendAction = recommend => ({ type: CHANGE_RECOMMEND, recommend })

export const getPageDataAction = dispatch => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data
    const { banner, recommend } = data
    dispatch(bannerAction(banner.list))
    dispatch(recommendAction(recommend.list))
  })
}
