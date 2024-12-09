var settingsmenu = document.querySelector(".settings-menu")
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }


}


if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}


// icons
const likeButton = document.querySelector('.like-button');
const likeCount = document.getElementById('likeCount');
let isLiked = false;
let initialCount = 130; 

likeButton.addEventListener('click', () => {
  isLiked = !isLiked;
  likeButton.classList.toggle('active');

  if (isLiked) {
    likeCount.textContent = initialCount + 1; 
  } else {
    likeCount.textContent = initialCount; 
  }
});