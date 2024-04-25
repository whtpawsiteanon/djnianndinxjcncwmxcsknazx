let click = document.querySelector('#clicks')

function incrementClick() {
    click.innerHTML = parseFloat(click.innerHTML) + 1
}

document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('myText').style.display = 'block';
    setTimeout(function() {
      document.getElementById('myText').style.display = 'none';
    }, 300);
});