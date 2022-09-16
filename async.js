const test = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > .5) {
      resolve('Yay')
    } else {
      reject('Fack')
    }
  })
}

let prom1 = test()

prom1
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })


const promise = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > .5) {
      resolve('Eeaaaa')
    } else {
      reject('Fak')
    }      
  })
}

let prom2 = promise()

prom2
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })