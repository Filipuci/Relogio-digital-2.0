function padding(number) {
  return number.toString().padStart('2', 0)
}

const timer = () => {
  const time = new Date()

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  document.querySelector('#hours').innerHTML = padding(hours)
  document.querySelector('#minutes').innerHTML = padding(minutes)
  document.querySelector('#seconds').innerHTML = padding(seconds)
}

setInterval(timer, 1000)