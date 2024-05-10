let clicks = 0;
let autoSaveInterval;

// Load saved clicks from localStorage
if (localStorage.getItem('clicks')) {
    clicks = parseInt(localStorage.getItem('clicks'));
    document.getElementById('clicks').innerText = clicks;
}

// Auto-save clicks every 10 seconds
autoSaveInterval = setInterval(() => {
    localStorage.setItem('clicks', clicks);
}, 100);

// Add event listeners
document.getElementById('clicker').addEventListener('click', () => {
    clicks++;
    document.getElementById('clicks').innerText = clicks;
});

document.getElementById('add-button').addEventListener('click', () => {
    clicks += 50000;
    document.getElementById('clicks').innerText = clicks;
});

// boosts
document.getElementById('boostsvsp').addEventListener('click', function() {
  document.getElementById('boostsmen').style.display = "block";
});

document.querySelector('.c').addEventListener('click', function() {
  document.getElementById('boostsmen').style.display = "none";
});

// tasks
document.getElementById('tasksvsp').addEventListener('click', function() {
  document.getElementById('tasksmen').style.display = "block";
});

document.querySelector('.c').addEventListener('click', function() {
  document.getElementById('tasksmen').style.display = "none";
});

// info
document.getElementById('infovsp').addEventListener('click', function() {
  document.getElementById('infomen').style.display = "block";
});

document.querySelector('.c').addEventListener('click', function() {
  document.getElementById('infomen').style.display = "none";
});