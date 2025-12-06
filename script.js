// let boxex=document.getElementsByClassName("box");
// console.log(document.getElementsByClassName("box"));

// document.querySelector(".container").children;
// console.log(document.querySelector(".container").children);



function randomcolor() {

    let c1= Math.ceil(0+ Math.random()*255);
    let c2= Math.ceil(0+ Math.random()*255);
    let c3= Math.ceil(0+ Math.random()*255);
    return `rgb(${c1},${c2},${c3})`
    
}
const act1 =document.querySelector(".btn1");

act1.addEventListener("click", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act1.style.backgroundColor=randomcolor();
    act1.style.color=randomcolor();
});
})

const act2 =document.querySelector(".btn2");

act2.addEventListener("dblclick", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act2.style.backgroundColor=randomcolor();
    act2.style.color=randomcolor();
});
})


const act3 =document.querySelector(".btn3");

act3.addEventListener("mousedown", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act3.style.backgroundColor=randomcolor();
    act3.style.color=randomcolor();
});
})


const act4 =document.querySelector(".btn4");

act4.addEventListener("mouseup", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act4.style.backgroundColor=randomcolor();
    act4.style.color=randomcolor();
});
})


const act5 =document.querySelector(".btn5");

act5.addEventListener("mousemove", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act5.style.backgroundColor=randomcolor();
    act5.style.color=randomcolor();
});
})


const act6 =document.querySelector(".btn6");

act6.addEventListener("mouseout", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act6.style.backgroundColor=randomcolor();
    act6.style.color=randomcolor();
});
})


const act7 =document.querySelector(".btn7");

act7.addEventListener("contextmenu", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act7.style.backgroundColor=randomcolor();
    act7.style.color=randomcolor();
});
})
const act8 =document.querySelector(".btn8");

act8.addEventListener("mouseover", ()=>{
    document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=randomcolor();
    act8.style.backgroundColor=randomcolor();
    act8.style.color=randomcolor();
});
})
