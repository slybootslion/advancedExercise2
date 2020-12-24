import * as actionType from './constants'
import { getBanner } from "@/api/discover-recommend";

const changeBannerAction = banner => ({
  type: actionType.CHANGE_BANNER,
  banner
})

export const getBannerAction = () => {
  return async dispatch => {
    const res = await getBanner()
    dispatch(changeBannerAction(res.banners))
  }
}
