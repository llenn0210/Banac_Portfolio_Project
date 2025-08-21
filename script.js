function hideAllSections() {
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('name-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    
    document.getElementById('skills-section').style.display = 'none';
    
}
hideAllSections();
document.getElementById('name-section').style.display = 'block';

document.querySelector('.education-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('education-section').style.display = 'block';
});

document.querySelector('.skills-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('skills-section').style.display = 'block';

});

document.querySelector('.about-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('about-section').style.display = 'block';
});

document.querySelector('.contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('contact-section').style.display = 'block';
});

document.querySelector('.name-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('name-section').style.display = 'block';
    
});