import http from './request'

export function getRequest () {
  return http({
    url: '/get',
    method: 'get',
    params: {
      name: 'google',
      age: 10
    }
  })
}

export function postRequest (data) {
  return http({
    url: '/post',
    method: 'post',
    data
  })
}
