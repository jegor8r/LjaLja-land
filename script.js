const btnNo = document.getElementById('buttonNo');
const btnYes = document.getElementById('buttonYes');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

window.addEventListener('load', function() {
    const rect = btnYes.getBoundingClientRect();
    const centerX = window.innerWidth / 2;

    btnNo.style.top  = rect.top + 'px';
    btnNo.style.left = (centerX + 10) + 'px';

    btnYes.style.position = 'fixed';
    btnYes.style.top  = rect.top + 'px';
    btnYes.style.left = (centerX - 80) + 'px';
});

btnNo.addEventListener('mouseenter', function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btnNo.style.left = x + 'px';
    btnNo.style.top  = y + 'px';
});

btnYes.addEventListener('click', function() {
    question.style.display = 'none';
    answer.style.display = 'block';
});