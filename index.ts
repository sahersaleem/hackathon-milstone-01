var button = document.getElementById("btn") as HTMLButtonElement
var skills = document.getElementById("skills") as HTMLUListElement


button.addEventListener('click',()=>{
    console.log('click me')
if(skills.style.display=='none'){
    skills.style.display='block'
    button.innerHTML='Hide skills'
}
else{
    skills.style.display='none'
}

})