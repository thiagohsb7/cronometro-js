let seconds = 0
let minutes = 0
let hours = 0
let interval = 0
let rodandoCronometro = false

function botaoStart() {
  if (rodandoCronometro === false) {
    contador()
    interval = setInterval(contador, 1000)
  }
  rodandoCronometro = true
}

function botaoPause() {
  clearInterval(interval)
  rodandoCronometro = false
}

function botaoStop() {
  clearInterval(interval)
  seconds = 0
  minutes = 0
  rodandoCronometro = false
  document.getElementById('cronometro').innerText = '00:00:00'
}

function contador() {
  seconds++
  if (seconds == 60) {
    seconds = 0
    minutes++

    if (minutes == 60) {
      minutes = 0
      hours++
    }
  }
  document.getElementById('cronometro').innerText =
    hours + ':' + minutes + ':' + seconds
}
