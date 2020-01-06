// init 
const startBtn = document.querySelector("#start")
const player= document.querySelector("#player")
const computer = document.querySelector("#computer")
const types = ["rock", "scissors", "paper"]
let animationTimer = null

startBtn.addEventListener("click", () => {
  startAction()
  fetch("/game/start")
    .then(res => res.json())
    .then(data => {
      handler(data)
    })
})

/**
 * 数据处理
 */
function handler(data = {}) {
  clearTimeout(animationTimer)
  player.src = `/images/game/${data.player}.png`
  computer.src = `/images/game/${data.computer}.png`
  if (data.player === data.computer) {
    console.log("平手")
    return 0
  }
  let res = 0
  if (data.player === 'rock') {
    res =  data.computer === 'scissors' ? 1 : -1
  }
  if (data.player === 'scissors') {
    res = data.computer === 'paper' ? 1 : -1
  }
  if (data.player === 'paper') {
    res = data.computer === 'rock' ? 1 : -1
  }
  console.log(`电脑：${data.computer}, ${res > 0 ? '你赢了' : '你输了'}`)
  return res
}

/**
 * 启动动画
 */
function startAction() {
  let random1 = types[Math.floor(Math.random() * 3)]
  let random2 = types[Math.floor(Math.random() * 3)]
  player.src = `/images/game/${random1}.png`
  computer.src = `/images/game/${random2}.png`
  animationTimer = setTimeout(startAction, 100)
}