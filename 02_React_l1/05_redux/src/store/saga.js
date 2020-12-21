import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_PAGE_DATA } from "./constants";
import axios from "axios";
import { bannerAction, recommendAction } from "./actions";

function* fetchPageData (action) {
  const result = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const { banner, recommend } = result.data.data
  yield put(bannerAction(banner.list))
  yield put(recommendAction(recommend.list))
}

function* generateSaga () {
  yield takeLatest(FETCH_PAGE_DATA, fetchPageData)
}

export default generateSaga
