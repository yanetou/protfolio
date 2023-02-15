const projectBtn = document.getElementById("project") ;
const body = document.body
// page.style.display  = "block" ;

// page.children.style.display = "none"
let make = [
    {
        name : "drawing project" ,
        text : "well , it is lite simple drawing project , i Actually drew something with it ",
        urlf : "https://github.com/yanetou/drawing-lite.git" ,
        img : `img/drawing.jpg`
    },
    {
        name : "notes project" ,
        text : "This project helped me a lot to discover something deep in javascript, I mean it's not as simple as it looks " ,
        urlf : "https://github.com/yanetou/notes.git" ,
        img : `img/notesapp.jpg`
    },
    {
        name : "password" ,
        text : "get a random password" ,
        urlf : "https://github.com/yanetou/lite-randome-password.git"  ,
        img : `img/password.jpg`
    },
    {
        name : "empty" ,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit blanditiis officiis corrupti porro " ,
        urlf : "///////////////////////////"  ,
        img : `img/empty.jpg`
    },
    {
        name : "empty" ,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit blanditiis officiis corrupti porro " ,
        urlf : "///////////////////////////" ,
        img : `img/empty.jpg`
    },
    {
        name : "empty" ,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit blanditiis officiis corrupti porro " ,
        urlf : "///////////////////////////" ,
        img : `img/empty.jpg`
    },
    {
        name : "empty" ,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit blanditiis officiis corrupti porro " ,
        urlf : "///////////////////////////" ,
        img : `img/empty.jpg`
    },
    {
        name : "empty" ,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit blanditiis officiis corrupti porro " ,
        urlf : "///////////////////////////" ,
        img : `img/empty.jpg`
    },
    {
        name : "empty" ,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit blanditiis officiis corrupti porro " ,
        urlf : "///////////////////////////" ,
        img : `img/empty.jpg`
    },
]
function block() {
    if(body.clientWidth < 700) {
        if(page.style.display != "none") {
            page.style.display = "none"
        }
        else {
            page.style.display = "block" ;
        }
    }
}
projectBtn.addEventListener("click" , () => {
    block() ;
    root.innerHTML = '' ;
    // root.style.background = "white"
function newprject( widd , heii , x , y , backg,name,tid) {  
        let box = document.createElement("div") ;
        box.innerHTML = `<h5 class ="h-font">${name}</h5>` ;
        box.id = tid ;
        if(body.clientWidth < 700) {
           
            root.style.cssText = `flex-direction: column;flex-wrap : wrap ;height : 100% `
box.style.cssText = `transform : none ; width : 100% ; height : 14vh ; position: relative ;border-radius : 0px ; margin : 0.2rem 0 ;`
                        }
                        else{
        box.style.cssText = `width : ${widd}rem ; height : ${heii}rem; transform : translate(${x}rem,${y}rem) ;background-image:url(${backg})`;}
        root.append(box) ;
        box.classList.add("helo") ;
            

        }
newprject(15,20,0,10,make[0].img,make[0].name,0)
newprject(10,14,14,0,make[1].img,make[1].name,1)
newprject(10,12,16,20,make[2].img,make[2].name,2)
newprject(10,10,-8,32,make[3].img,make[3].name,3)
newprject(10,18,-15,2,make[4].img,make[4].name,4)
newprject(18,24,-30,20,make[5].img,make[5].name,5)
newprject(20,10,-34,5,make[6].img,make[6].name,6)
newprject(19,25,35,0.5,make[7].img,make[7].name,7)
newprject(10,10,30,30,make[8].img,make[8].name,8) ;



let rootchild = root.querySelectorAll("div") ;
root.classList.remove("newroot") ;
rootchild.forEach(e => {
    e.addEventListener("click" , () => { 
        root.classList.add("newroot") ;
        e.innerHTML = "" ;
         root.innerHTML = `<ul class="overscreen">
        <div class="photo"></div>
         <ul class="info">
             <h3>${make[e.id].name}</h3>
             <p>${make[e.id].text}</p>
             <p class="ptex"> <span id="copy">${make[e.id].urlf}</span><button id="return">c</button></p>
         </ul>
     </ul>`
        let eBack = root.querySelector(".photo")  ;
        eBack.style.backgroundImage = e.style.backgroundImage ;
        let Cbtn = document.getElementById("return") ;
        let Ccontent = document.getElementById("copy") ;
        Cbtn.addEventListener("click" , () => {
            navigator.clipboard.writeText(Ccontent.innerText)
        })
    })
});

})






 

