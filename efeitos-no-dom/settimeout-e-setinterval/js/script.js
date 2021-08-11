let btnReset = document.querySelector('[data-btnReset]');
let btnStart = document.querySelector('[data-btn]');

function initCronometro() {
  let msecElement = document.querySelector('[data-msec]');
  let msec = +msecElement.innerText;
  let secondsElement = document.querySelector('[data-sec]');
  let seconds = +secondsElement.innerText;
  let minutesElement = document.querySelector('[data-min]');
  let minutes = +minutesElement.innerText;
  let hoursElement = document.querySelector('[data-hours]');
  let hours = +hoursElement.innerText;
  
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
    
    if (Array.from(btnStart.classList).indexOf('active') == -1){
      clearInterval(startCronometro)
    }
  }, 10);
  
  function handleReset() {
    setBtnReset();
    setBtnToActive();
    clearInterval(startCronometro);
    
    msecElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    minutesElement.innerHTML = '00';
    hoursElement.innerHTML = '00';
    
  }
  
  btnReset.addEventListener('click', handleReset);
}


function setBtnToPause() {
  btnStart.classList.add('active');
  btnStart.innerText = 'Pausar';
  btnReset.style.display = 'inline-block';
}

function setBtnToActive() {
  btnStart.classList.remove('active');
  btnStart.innerText = 'Iniciar';
}

function setBtnReset() {
  btnReset.style.display = 'none';
}

function handleStart () {
    setBtnToPause();
    initCronometro();

    btnStart.removeEventListener('click', handleStart);

    btnStart.addEventListener('click', handlePause);
}

function handlePause(){
    setBtnToActive();

    btnStart.removeEventListener('click', handlePause);

    btnStart.addEventListener('click', handleStart);
}

btnStart.addEventListener('click', handleStart);