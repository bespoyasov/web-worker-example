const getEl = selector =>
  document.querySelector(selector)

const worker = new Worker('./js/worker.js')


const btn1Node = getEl('#button-1')
const btn2Node = getEl('#button-2')
const res1Node = getEl('#result-1')
const res2Node = getEl('#result-2')
const loaderNode = getEl('#loader')


btn1Node.addEventListener('click', e => {
  const result = doCalc()
  res1Node.innerText = `Выполнено за ${result} с.`
})

btn2Node.addEventListener('click', e => {
  worker.postMessage({ action: 'doCalc' })
  loaderNode.classList.remove('is-hidden')
  res2Node.innerText = ''
})


worker.onmessage = e => {
  if (e.data.action === 'doCalc') {
    loaderNode.classList.add('is-hidden')
    res2Node.innerText = `Выполнено за ${e.data.result} с.`
  }
}