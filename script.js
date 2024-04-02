let home=document.querySelector("#home-btn");
let about=document.querySelector("#about-btn");
let education=document.querySelector("#Education-btn");
let skills=document.querySelector("#course-btn");
let s_media=document.querySelector("#social-media-btn");
let h_des=document.querySelector(".home-des");
let a_des=document.querySelector(".about-des");
let e_des=document.querySelector(".education-des");
let skill_des=document.querySelector(".course-des");
let s_des=document.querySelector(".media-des");

home.addEventListener("click",()=>{
    h_des.classList.remove("hide");
    a_des.classList.add("hide");
    e_des.classList.add("hide");
    skill_des.classList.add("hide");
    s_des.classList.add("hide");
})

about.addEventListener("click",()=>{
    h_des.classList.add("hide");
    a_des.classList.remove("hide");
    e_des.classList.add("hide");
    skill_des.classList.add("hide");
    s_des.classList.add("hide");
})

education.addEventListener("click",()=>{
    h_des.classList.add("hide");
    a_des.classList.add("hide");
    e_des.classList.remove("hide");
    skill_des.classList.add("hide");
    s_des.classList.add("hide");
})

skills.addEventListener("click",()=>{
    h_des.classList.add("hide");
    a_des.classList.add("hide");
    e_des.classList.add("hide");
    skill_des.classList.remove("hide");
    s_des.classList.add("hide");
})

s_media.addEventListener("click",()=>{
    h_des.classList.add("hide");
    a_des.classList.add("hide");
    e_des.classList.add("hide");
    skill_des.classList.add("hide");
    s_des.classList.remove("hide");
})