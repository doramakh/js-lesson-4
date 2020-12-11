// Exercise 1
var celcy = '';
var farengey = '';

var elTempForm = document.querySelector('.temp-form');
var elCelcyInput = elTempForm.querySelector('.celcy-input');
var elFarengeyInput = elTempForm.querySelector('.farengey-input');
var elResult = document.querySelector('.reslut');

elTempForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  
  celcy = parseFloat(elCelcyInput.value.trim(), 10);
  celcy = parseFloat(celcy.toFixed(1), 10);
  farengey = parseFloat((celcy * 9 / 5) + 32, 10);
  farengey = parseFloat(farengey.toFixed(1), 10);
  
  elFarengeyInput.value = `${farengey}`;
});


//Exercise2
var elDistanceForm = document.querySelector('.distance-form');
var elDistanceInput = elDistanceForm.querySelector('.distance-input');

var elWalkTime = document.querySelector('.walk-time');
var elBikeTime = document.querySelector('.bike-time');
var elCarTime = document.querySelector('.car-time');
var elPlaneTime = document.querySelector('.plane-time');

var elErrorMessage = document.querySelector('.error-message');

// Piyoda - 3.6 km/soat
// Velosiped - 20.1 km/soat
// Mashina - 70 km/soat
// Samolyot - 800 km/soat

var walkSpeed = 3.60;
var bikeSpeed = 20.10;
var carSpeed = 70.00;
var planeSpeed = 800.00;

var distance = '';
var message = 'Incorrect input. You input must be greater than 0';



elDistanceForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  distance = parseFloat(elDistanceInput.value.trim(), 10);
  
  
  if (distance > 0){
    var walkTime = distance / walkSpeed;
    walkHour = parseInt(walkTime, 10);
    walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);
    var bikeTime = distance / bikeSpeed;
    bikeHour = parseInt(bikeTime, 10);
    bikeMinute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60);
    var carTime = distance / carSpeed;
    carHour = parseInt(carTime, 10);
    carMinute = Math.round((parseFloat(carTime.toFixed(2), 10) - carHour) * 60);
    var planeTime = distance / planeSpeed;
    planeHour = parseInt(planeTime, 10);
    planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);
    
    elErrorMessage.classList.add('d-none');
    
    elWalkTime.textContent = `${walkHour} hours, ${walkMinute} min`;
    elBikeTime.textContent = `${bikeHour} hours, ${bikeMinute} min`;
    elCarTime.textContent = `${carHour} hours, ${carMinute} min`;
    elPlaneTime.textContent = `${planeHour} hours, ${planeMinute} min`;
  } else{
    elErrorMessage.textContent = message;
    elErrorMessage.classList.add('alert-danger');
  }
});


//Exercise3
var elJogForm = document.querySelector('.jog-form');
var elTempInput = elJogForm.querySelector('.temp-input');
var elRainCheckbox = elJogForm.querySelector('.rain-checkbox');
var elOpenCheckbox = elJogForm.querySelector('.open-checkbox');

var elAnswerBox = document.querySelector('.answer-box');
var elYes = elAnswerBox.querySelector('.yes');
var elNo = elAnswerBox.querySelector('.no');

var temperature = '';

elJogForm.addEventListener('change', function (){
  temperature = Number(elTempInput.value);

  elYes.classList.remove('text-green');
  elNo.classList.remove('text-red');

  if (temperature >= 5 && temperature <= 30){
    elYes.classList.add('text-green');
    elNo.classList.remove('text-red');
  }else{
    elNo.classList.add('text-red');
  }
  
  if (elRainCheckbox.checked){
    elNo.classList.add('text-red');
    elYes.classList.remove('text-green');
  }
  
  if (elRainCheckbox.checked && elOpenCheckbox.checked){
    elYes.classList.add('text-green');
    elNo.classList.remove('text-red');
  }
  
  if (temperature < 5 && elOpenCheckbox.checked){
    elNo.classList.add('text-red');
    elYes.classList.remove('text-green');
  }
  
});
