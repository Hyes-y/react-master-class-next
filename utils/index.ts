export function delay(ms = 1000) {
  return new Promise((resolve, reject) => {
    if (ms >= 10000) {
      return reject(new Error('10초 이상 대기 X'))
    }
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

export function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img')
    imgEl.addEventListener('load', () => {
      resolve(true)
    })
    imgEl.addEventListener('error', () => {
      reject(new Error('이미지를 불러오지 못했어요'))
    })
    imgEl.src = src
  })
}
