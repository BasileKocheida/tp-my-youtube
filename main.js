const divP = document.querySelectorAll('p');
const hr = document.querySelectorAll('hr');
const divContent = document.querySelector('.content');
const nav = document.querySelector('nav');
const brand = document.querySelector('.brand');
let btn = document.querySelector('#btn');

let isClicked = false

btn.addEventListener('click', ()=>{
    if(isClicked == false){
        isClicked = true
        divContent.classList.replace("content", "content-darkmode");
        nav.classList.add("content-darkmode");
        btn.classList.replace("btn-dark", "btn-light");
        divP.forEach(p=>{
            p.classList.add("p-darkmode");
        })
        hr.forEach(h=>{
            h.classList.add("p-darkmode");
        })
    }else{
        isClicked = false
        divContent.classList.replace("content-darkmode", "content");
        nav.classList.remove("content-darkmode");
        btn.classList.replace("btn-light", "btn-dark");
        divP.forEach(p=>{
            p.classList.remove("p-darkmode");
        })
        hr.forEach(h=>{
            h.classList.remove("p-darkmode");
        })

    }
})

