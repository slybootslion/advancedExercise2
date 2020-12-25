export function getCount (count) {
  if (count < 0) return
  if (count < 10000) return count
  if (Math.floor(count / 10000) < 10000) return Math.floor(count / 1000) / 10 + '万'
  return Math.floor(count / 10000000) / 10 + '亿'
}


export function getSizeImage (url, size, secSize = size) {
  return `${url}?param=${size}x${secSize}`
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}

export function formatDate (time, fmt) {
  let date = new Date(time)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

export function formatMonthDay (time) {
  return formatDate(time, "MM月dd日")
}

export function formatMinuteSecond (time) {
  return formatDate(time, "mm:ss")
}

export function formatSongUrlById (id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
