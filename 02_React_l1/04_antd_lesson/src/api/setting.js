const devBaseURL = 'https://httpbin.org'
const provBaseURL = 'https://httpbin.org'

const isDev = process.env.NODE_ENV === 'development'

export const baseURL = isDev ? devBaseURL : provBaseURL
export const timeout = 15000
