// console.log('hi');

// image change

// select the lamp off img from html and save it in a variable

const mainImg = document.getElementById('lamp_off')
console.log(mainImg); // log to check if it selected it

// select the lamp on img from html and save it in a variable

const switchedImg = document.getElementById('lamp_on')
console.log(switchedImg);

// select the button from html and save it in a variable

const switchBtn = document.getElementById('lamp_switch');
console.log(switchBtn);

// call the add event listener method to change the img

switchBtn.addEventListener('click', function() {
    mainImg.classList.add('d-none');
    switchedImg.classList.remove('d-none');
});

