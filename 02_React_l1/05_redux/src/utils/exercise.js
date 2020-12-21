// 练习：定义一个生成器函数，依次可以生成1-10的数字
function* generateNum () {
  for (let i = 0; i < 10; i++) {
    yield i + 1
  }
}

const numIt = generateNum()
for (let i = 0; i < 10; i++) {
  console.log(numIt.next().value)
}

// 练习2：generator和Promise一起使用
function* foo () {
  console.log('in')
  const result = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('generator')
    }, 2000)
  })
  console.log(result)
}

const it = foo()
it.next().value.then(res => it.next(res))
