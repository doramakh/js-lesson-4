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

