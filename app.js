/* // Fibonacci Sequence
const fibo = (n) => {
  let i = 0
  let arr = []
  while (i < n) {
    if (i == 0) {
      arr.push(0)
    } else if (i == 1) {
      arr.push(1)
    } else if (i == 2) {
      arr.push(1)
    } else if (i > 2) {
      let n1 = arr[i - 2]
      let n2 = arr[i - 1]
      let result = n1 + n2
      arr.push(result)
    }
    i++
  }
  return arr
}

//console.log(fibo(20))

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
//0, 1, 2, 3, 4, 5, 6, 7,  8,  9, 10,  11, 12, ...


// Shuffle Array
const winterPlaylist = ['bzrrp', 'ojala', 'universo', 'provenza', 'sea dragon', 'arrancamelo']

const shuffle = arr => {
  const newArr = []
  
  while (newArr.length < arr.length) {
    let r = Math.floor(Math.random() * arr.length)    
    if (newArr.includes(arr[r])) {
      continue
    } else {
      newArr.push(arr[r])
    }
  }
  return newArr
}

//console.log(shuffle(winterPlaylist))


//Clock
const checkZero = n => {
  if (n <= 9) {
    n = '0' + n
  }
  return n
}

const clock = () => {
  let d = new Date()
  let h = checkZero(d.getHours())
  let m = checkZero(d.getMinutes())
  let s = checkZero(d.getSeconds())
  //return `${h}:${m}:${s}`
  console.log(`${h}:${m}:${s}`)
}

console.log(setInterval(clock, 1000))

// Export
export { fibo, shuffle, clock } */