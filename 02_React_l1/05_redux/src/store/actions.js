import { ADD_NUMBER, CHANGE_BANNER, SUB_NUMBER, CHANGE_RECOMMEND } from "./constants.js";

export const addAction = num => ({ type: ADD_NUMBER, num })
export const subAction = num => ({ type: SUB_NUMBER, num })

export const bannerAction = banner => ({ type: CHANGE_BANNER, banner })
export const recommendAction = recommend => ({ type: CHANGE_RECOMMEND, recommend })

// 1.34.55
