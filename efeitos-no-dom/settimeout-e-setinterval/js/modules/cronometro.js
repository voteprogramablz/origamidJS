import { iniciarCronometro, pausarCronometro} from "./initCronometro.js"

export default function cronometro(){
  let msecElement = document.querySelector('[data-msec]')
  let msec = +msecElement.innerText
  let secondsElement = document.querySelector('[data-sec]')
  let seconds = +secondsElement.innerText
  let minutesElement = document.querySelector('[data-min]')
  let minutes = +minutesElement.innerText
  let hoursElement = document.querySelector('[data-hours]')
  let hours = +hoursElement.innerText

  let btnReset = document.querySelector('[data-btnReset]')
  let btnStart = document.querySelector('[data-btn]')
  btnReset.addEventListener('click', clearCronometro)

  function clearCronometro() {
    msecElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    hoursElement.innerHTML = '00';
    btnReset.style.display = 'none'
    pausarCronometro()
    clearInterval(startCronometro)
  }

  const startCronometro = setInterval(() => {
    msec += 1
    msecElement.innerText = msec

    if(msec === 100) {
      seconds += 1

      if(seconds === 60){
        minutes += 1;

        if(minutes === 60) {
          hours += 1;
          if(hours < 10){
            hoursElement.innerText = '0'+hours
          } else {
            hoursElement.innerText = hours
          }
          minutes = 0;
        }

        if (minutes < 10) {
          minutesElement.innerText = '0'+minutes
        } else {
          minutesElement.innerText = minutes
        }
        seconds = 0;
      }

      if (seconds < 10){
        secondsElement.innerText = '0'+seconds
      } else {
        secondsElement.innerText = seconds
      }
      msec = 0
    }

    if (!document.querySelector('[data-btn].active')){
      clearInterval(startCronometro)
    }

  }, 10)
  startCronometro
}