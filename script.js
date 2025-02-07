document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = this;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'congratulations.html';
});