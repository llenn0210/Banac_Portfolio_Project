document.querySelector('.education-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-section').style.display = 'none';
     document.getElementById('name-section').style.display = 'none';
});

document.querySelector('.skills-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('name-section').style.display = 'none';
});

document.querySelector('.about-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-section').style.display = 'block';
     document.getElementById('name-section').style.display = 'none';
});

document.querySelector('.contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('name-section').style.display = 'none';
});

document.querySelector('.name-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('name-section').style.display = 'block';
    
});