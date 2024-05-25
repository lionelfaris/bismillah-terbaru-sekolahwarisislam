// script.js
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('colorChangeButton');
    
    button.addEventListener('click', function() {
        this.classList.add('clicked');
    });
});
