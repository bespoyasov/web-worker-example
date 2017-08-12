const doCalc = () => {
  const start = Date.now()
  for (let i = 0; i < 200; i++) helper()
  const finish = Date.now()
  return (finish - start) / 1000
}

const helper = () => {
  let above = 0, 
      below = 0
  
  for (let i = 0; i < 200000; i++) {
    if (Math.random() * 2 > 1) above++
    else below++
  }
}