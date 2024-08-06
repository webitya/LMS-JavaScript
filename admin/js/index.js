// --------All Global variable start Here---------------
const togglerBtn=document.querySelector(".togglerBtn");
const togglerBtnNav=document.querySelector(".togglerBtnNav");
const sideNav=document.querySelector(".side-nav");
const pageContent=document.querySelector(".page-content");
const page=document.querySelector(".page");
let menuItems=document.querySelectorAll(".menu-items");
// --------All Global variable Ende here----------------

// =====TogglerBtn Coding Start Here
togglerBtn.onclick=()=>{
   sideNav.classList.toggle("active"); 
   pageContent.classList.toggle("active");
}
togglerBtnNav.onclick=()=>{
    sideNav.classList.toggle("active"); 
    pageContent.classList.toggle("active");
 }
// =====TogglerBtn Coding End Here

// Define Routes
import dashboard from "../page/dashboard.js";
import settings from "../page/settings.js";
import courses from "../page/courses.js";
import students from "../page/students.js";
const routes ={
      "/":dashboard,
      "/settings":settings,
      "/courses":courses,
      "students":students
}
import notFound from "../page/notFound.js";
// Handle Route Changes
const handleRouteChange=()=>{
      if(window.innerWidth > 700){
      sideNav.classList.add("active"); 
      pageContent.classList.add("active");
      }
      let path=window.location.hash.replace("#","") || "/";
      page.innerHTML=routes[path] || notFound
}
// Menu Items Set Event Listener For Navigation
console.log(menuItems)
menuItems.forEach(item=>{
      item.onclick=()=>{
        menuItems.forEach(remove=>{
             remove.classList.remove("active")
        }) 
        const to=item.getAttribute("to");
         window.location.hash=to;
         item.classList.add("active")
         if(window.innerWidth < 700){
            sideNav.classList.toggle("active"); 
            pageContent.classList.toggle("active");
         }
      }
})
// On Hash Change
window.onhashchange=()=>{
    handleRouteChange()
}
// Load the initial Route
// handleRouteChange();