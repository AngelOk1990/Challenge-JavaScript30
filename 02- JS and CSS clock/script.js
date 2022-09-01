const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector(".hours")

setInterval(() => {
let date = new Date()
let hoursAngle = date.getHours() * 30
let minutesAngle = date.getMinutes() * 6
let secondsAngle = date.getSeconds() * 6

hours.style.transform = `rotateZ(${(hoursAngle) + (minutesAngle / 12)}deg)`
minutes.style.transform = `rotateZ(${minutesAngle}deg)`
seconds.style.transform = `rotateZ(${secondsAngle}deg)`
})