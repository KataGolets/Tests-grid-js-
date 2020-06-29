var btn = document.getElementById ('hideBtn');

btn.addEventListener('click', function() {
    document.getElementById ('text').classList.toggle('hide-and-show'); 
    if (btn.innerHTML === 'Показать текст') {
        btn.innerText = 'Скрыть текст';
    } else {
        btn.innerHTML = 'Показать текст';
    }
}); 