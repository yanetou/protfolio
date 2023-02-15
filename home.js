const homeBtn = document.querySelector(".btn") ;
const root = document.getElementById("root") ;
const header = document.getElementById("header") ;
const page = document.querySelector(".page")
// page.style.display  = "block" ;
homeBtn.addEventListener("click" , () => {
    if(body.clientWidth < 700){
        page.style.display = "none" ;
    }
    root.innerHTML  = `<ul>
    <div class="Cleft"><p>hi and "welcome" </p></div>
    </ul>`
})


let about  = document.getElementById("about") ;
about.addEventListener("click" , () => {
    block()
    root.innerHTML = `<div class="about-me"><ul>
    <div class="charcter-img"></div>
    <div class="charcter-info">
    <section>
    <span> sofyane toufiq_ </span>
        <br>  a <h3>"front-end developer"</h3><h2> <br>  i master :<br>---HTML<br>---CSS<br>---Javascript<br>
        react in the way</h2>
        </section>
    </div></ul>
</div>`
})



const contact = document.getElementById("contact") ;
contact.addEventListener("click" , () => {
    block()
    root.innerHTML = `<div class="cont">
    <span class="verifyAlertInput">please enter a valid email</span>
    <input type="email" id="input" name="email" placeholder="your email" required>
    <span class="verifyAlertTextarea">write something</span>
    <textarea  id="one" placeholder="anything?" name="message" required></textarea>
    <button id="submit">SuBmit</button>
</div>`
    const textarea = document.getElementById("one") ;
    const input  =   document.getElementById("input") ;
    let buttonsu = document.getElementById("submit") ;
    let checkInput = document.querySelector(".verifyAlertInput");
    let checkTextarea = document.querySelector(".verifyAlertTextarea")
    let varify = {
        hy : false , hn : false 
    }
input.addEventListener("keyup", (e) => {
       if(input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        varify.hy = true ;
        checkInput.style.display = "none"
       } 
       else { 
        checkInput.style.display = "block"
        varify.hy = false ;
       }
    })
textarea.addEventListener("keyup", (e) => {
        if(textarea.value != '') {
         varify.hn = true ;
         checkTextarea.style.display = "none"
        } 
        else { 
            checkTextarea.style.display = "block"
         varify.hn = false ;
        }
     })
buttonsu.addEventListener("click" , () => {
    if(varify.hn && varify.hy) {
        console.log("hello world ")
        // var formation = {
        //     email : input.value ,
        //     message : textarea.value 
        // }
        // const servid = () => {
        //     return "service_qnwu19q"
        // }
        // const templeid = () => {
        //     return "template_5tejakh"
        // }
        // emailjs.send(servid(),templeid(),formation)
        // .then(
        //     res => {
        //         textarea.value =  " " ,
        //         input.value  = " ",
        //         console.log("every thing went wright")
        //     }
        // ).catch(err => {
        //     console.log(err) ;
        // })
    }
    })
    
    
 
})

const slide = document.getElementById("slid") 
slide.addEventListener("click" , () => {
    if(page.style.display != "none") {
        page.style.display = "none"
    }
    else {
        page.style.display = "block" ;
    }
})