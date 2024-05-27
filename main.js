let clicks = 0;
let autoSaveInterval;


if (/Mobi/.test(navigator.userAgent)) {
  // Если пользовательский агент содержит "Mobi", то это мобильное устройство
  // Ничего не делаем, так как вход разрешен
} else {
  // Если пользовательский агент не содержит "Mobi", то это не мобильное устройство
  // window.location.href = 'dekstop.html';
  alert("Вход возможен только с телефона");
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

const backButton = Telegram.WebApp.BackButton;

    // Показывать кнопку только если есть GET параметры 
// Показывать кнопку только если есть параметры 
// и страница не главная
if (window.location.search && window.location.pathname !== '/') {

  backButton.show();

} else {

  backButton.hide(); 

}
backButton.onClick(() => {
      history.back();
    });

// Add event listeners
document.getElementById('clicker').addEventListener('click', () => {
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