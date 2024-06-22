const names = document.querySelectorAll(".name");
const univToShow = document.querySelector(".univs");


function univWhileHovering(e) {
    univToShow.style.display = "block";
    univToShow.innerHTML = e.target.dataset.univ;
    console.log(e)
    univToShow.style.top = e.layerY+10+"px";
    univToShow.style.left = e.layerX +10+ "px";
}

function hideUniv(e) {
    univToShow.style.display = "none";
}

for (var i = 0; i < names.length; i++){
    names[i].addEventListener('mousemove', univWhileHovering);
    names[i].addEventListener('mouseleave', hideUniv)
}