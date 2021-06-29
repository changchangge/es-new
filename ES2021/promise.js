// Promise.any

const sleepPromise = (delay) => {
  return new Promise(resolve => setTimeout(() => { resolve() }, delay))
}

const a = sleepPromise(1000);
const b = sleepPromise(2000);
const c = sleepPromise(3000);

Promise.any([a.then(() => 1), b.then(() => 2), c.then(() => 3)]).then(first => console.log(first)).then(err => console.log(err))