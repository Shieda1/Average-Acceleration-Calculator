// https://calculator.swiftutors.com/average-acceleration-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averageAccelerationRadio = document.getElementById('averageAccelerationRadio');
const velocityRadio = document.getElementById('velocityRadio');
const finalVelocityRadio = document.getElementById('finalVelocityRadio');
const timeRadio = document.getElementById('timeRadio');

let averageAcceleration;
let initialVelocity = v1;
let finalVelocity = v2;
let time = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

averageAccelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial Velocity (km/s)';
  variable2.textContent = 'Final Velocity (km/s)';
  variable3.textContent = 'Time (s)';
  initialVelocity = v1;
  finalVelocity = v2;
  time = v3;
  result.textContent = '';
  variable3.style.display = 'inline';
  v3.style.display = 'inline';
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Acceleration (km/s²)';
  variable2.textContent = 'Time (s)';
  averageAcceleration = v1;
  time = v2;
  result.textContent = '';
  variable3.style.display = 'none';
  v3.style.display = 'none';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Acceleration (km/s²)';
  variable2.textContent = 'Initial Velocity (km/s)';
  variable3.textContent = 'Final Velocity (km/s)';
  averageAcceleration = v1;
  initialVelocity = v2;
  finalVelocity = v3;
  result.textContent = '';
  variable3.style.display = 'inline';
  v3.style.display = 'inline';
});

btn.addEventListener('click', function() {
  
  if(averageAccelerationRadio.checked)
    result.textContent = `Average Acceleration = ${computeAverageAcceleration().toFixed(2)} km/s²`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocityOutput().toFixed(2)} km/s`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)} s`;
})

// calculation

function computeAverageAcceleration() {
  return computeVelocityInput() / Number(time.value);
}

function computeVelocityOutput() {
  return Number(averageAcceleration.value) * Number(time.value);
}

function computeTime() {
  return computeVelocityInput() / Number(averageAcceleration.value);
}

function computeVelocityInput() {
  return Number(finalVelocity.value) - Number(initialVelocity.value);
}