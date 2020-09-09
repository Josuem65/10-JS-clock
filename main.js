let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

function makeShitWork() {
  document.querySelector(".hours").innerHTML = hours
  setInterval(() => {
    document.querySelector(".hours").innerHTML = hours++
  }, 1000 * 60 * 60)
  document.querySelector(".minutes").innerHTML = minutes
  setInterval(() => {
    document.querySelector(".minutes").innerHTML = minutes++
    if (minutes > 59) {
      minutes = 00
    }
  }, 1000 * 60)

  setInterval(() => {
    document.querySelector(".seconds").innerHTML = seconds
    segundos(seconds)
    document.querySelector(".seconds").innerHTML = seconds++
    if (seconds > 59) {
      seconds = 00
    }
  }, 1000)
}
makeShitWork()

function segundos(a) {
  if (a < 10) {
    return "0" + a
  }
}
