var button = document.getElementById("btn");
var skills = document.getElementById("skills");
button.addEventListener('click', function () {
    console.log('click me');
    if (skills.style.display == 'none') {
        skills.style.display = 'block';
        button.innerHTML = 'Hide skills';
    }
    else {
        skills.style.display = 'none';
    }
});
