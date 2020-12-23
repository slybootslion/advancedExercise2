const devBaseURL = 'http://123.207.32.32:9001'
const provBaseURL = 'http://123.207.32.32:9001'

const isDev = process.env.NODE_ENV === 'development'

export const baseURL = isDev ? devBaseURL : provBaseURL
export const timeout = 15000
