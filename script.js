
const logo = document.getElementById('logo');
const imageModal = document.getElementById('imageModal');
const fullImage = document.getElementById('fullImage');
const closeButton = document.getElementsByClassName('close')[0];
logo.addEventListener('click', function() {
    fullImage.src = logo.src;
    imageModal.style.display = "flex"; 
});
closeButton.addEventListener('click', function() {
    imageModal.style.display = "none"; 
});

window.addEventListener('click', function(event) {
    if (event.target === imageModal) {
        imageModal.style.display = "none";  
    }
});
