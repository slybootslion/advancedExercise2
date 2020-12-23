import * as actionType from './constants'
import { getBanner } from "@/api/discover-recommend";


export const getBannerAction = () => {
  return async dispatch => {
    const res = await getBanner()
    console.log(res)
  }
}
