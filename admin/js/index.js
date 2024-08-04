// --------All Global variable start Here---------------
const togglerBtn=document.querySelector(".togglerBtn");
const sideNav=document.querySelector(".side-nav");
const pageContent=document.querySelector(".page-content");
// --------All Global variable Ende here----------------

// =====TogglerBtn Coding Start Here
togglerBtn.onclick=()=>{
   sideNav.classList.toggle("active"); 
   pageContent.classList.toggle("active");
}
// =====TogglerBtn Coding End Here