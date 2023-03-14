import moment from "moment";

let time = document.querySelector("div")
let KoreaTime = document.createElement('p')
KoreaTime.innerHTML = `${moment().format('YYYY-MM-DD HH:mm:ss')}`
setInterval(() => {
  KoreaTime.innerHTML = `${moment().format('YYYY-MM-DD HH:mm:ss')}`

}, 1000)
time.append(KoreaTime)