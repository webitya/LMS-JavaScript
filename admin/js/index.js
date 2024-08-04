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
const routes={
    "/":`<h1>HomePage Content</h1>`,
    "/courses":`<h1>HomePage Content Courses</h1>`,
    "/students":`<h1>HomePage Content Students</h1>`,
    "/settings":`<h1>HomePage Content Settings</h1>`,
}
const notFound=`<div class="not-found">
                    <h1>404</h1>
                    <h2>Oops! the page you are looking doesn't exist</h2>
                    <img src="../assests/images/webityaweb.svg">
                    <button class="btn">Go to Homepage</button>
                 </div>`;
// Handle Route Changes
const handleRouteChange=()=>{
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
handleRouteChange();