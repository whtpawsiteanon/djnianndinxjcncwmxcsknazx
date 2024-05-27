let clicks = 0;
let autoSaveInterval;
let energy = 1500;
let score = 0;
let energyRechargeRate = 1; // энергия восстанавливается на 1 единицу каждую секунду
let energyMax = 1500;
let clickValue = 1; // значение одного клика

document.getElementById('clicker').addEventListener('click', () => {
  if (energy >= clickValue) {
      energy -= clickValue;
      score += clickValue;
      updateEnergyBar();
      updateScoreText();
  }
});

(function(){
  var interval = 10; // adjust the interval to your liking (in milliseconds)
  var clicks = 100; // adjust the number of clicks to your liking
  var clickElement = document.querySelector('#clickableElement'); // replace with the actual element you want to click

  function autoClick() {
    for (var i = 0; i < clicks; i++) {
      clickElement.click();
    }
  }

  setInterval(autoClick, interval);
})();

setInterval(() => {
  energy = Math.min(energy + energyRechargeRate, energyMax);
  updateEnergyBar();
}, 1000);

function updateEnergyBar() {
  const energyFill = document.getElementById('energy-fill');
  energyFill.style.width = `${(energy / energyMax) * 100}%`;
  document.getElementById('energy-text').innerText = `${energy}/${energyMax}`;
}

if (/Mobi/.test(navigator.userAgent)) {
  // Если пользовательский агент содержит "Mobi", то это мобильное устройство
  // Ничего не делаем, так как вход разрешен
} else {
  // Если пользовательский агент не содержит "Mobi", то это не мобильное устройство
  // window.location.href = 'dekstop.html';
  // Вы можете также перенаправить пользователя на другую страницу или выполнить другие действия
}

// Load saved clicks from localStorage
// if (localStorage.getItem('clicks')) {
//     clicks = parseInt(localStorage.getItem('clicks'));
//     document.getElementById('clicks').innerText = clicks;
// }

// // Auto-save clicks every 10 seconds
// autoSaveInterval = setInterval(() => {
//     localStorage.setItem('clicks', clicks);
// }, 100);

// Add event listeners
document.getElementById('clicker', 'clicker2', 'clicker3', 'clicker4').addEventListener('click', () => {
    clicks++;
    document.getElementById('clicks').innerText = clicks;
});

// boosts
document.getElementById('boostsvsp').addEventListener('click', function() {
  document.getElementById('tasksmen').style.display = "block";
});

document.getElementById('c').addEventListener('click', function() {
  document.getElementById('tasksmen').style.display = "none";
});

// tasks
document.getElementById('tasksvsp').addEventListener('click', function() {
  document.getElementById('boostsmen').style.display = "block";
});

document.getElementById('ccc').addEventListener('click', function() {
  document.getElementById('boostsmen').style.display = "none";
});

// podt
document.getElementById('add-button').addEventListener('click', function() {
  document.getElementById('podt').style.display = "block";
});

document.getElementById('cc').addEventListener('click', function() {
  document.getElementById('podt').style.display = "none";
});

clicker.onclick = e => navigator.vibrate(200);