//slide
const content_arr = [
    {
        img: "url(content/img1.jpg)",
        location: ["Toronto,","Canada"],
        headline: "hurry! get the best villa for you",
    },
    {
        img: "url(content/img2.jpg)",
        location: ["Melbourne,","Australia"],
        headline: "Be quick! get the best villa in town",
    },
    {
        img: "url(content/img3.jpg)",
        location: ["Miami,","Soth Floroda"], 
        headline: "Act now! get the highest level penthouse",
    }
]


const content = document.querySelector(".content_main")
let activeIndex = null;

function activate(){
    const pult = document.querySelector(".pult").children
    let index = content.getAttribute("index")

    if(activeIndex !== null){
        pult[activeIndex].style.background = ""
    }
    pult[index].style.background = "var(--orange)"
    activeIndex = index;
}
activate()
function slide(item){
    let index = item.getAttribute("index")
    let index2 = content.getAttribute("index")

    let length = index - index2;
    if(index > index2){
        for(let i = 0;i < length;i++){
            next(content)
        }
    }
    else{
        length = length * -1;
        for(let i = 0;i < length;i++){
            prev(content)
        }
    }
}
setInterval(()=>{
    next();
},3000)


function next(){
    content.classList.remove("contentUnAppend")
    setTimeout(() =>{
        if(!content.classList.contains("contentAppend")){
            content.classList.add("contentAppend")
        }
        else{
            content.classList.remove("contentAppend")
            setTimeout(() =>{
                content.classList.add("contentAppend")
            },100)
        }
    },200)
    
    setTimeout(() =>{
        let index = content.getAttribute("index")
        index = (index + 1) % content_arr.length
        
        content.style.backgroundImage = content_arr[index].img
        let loc = content.querySelector(".location").children
        for(let i = 0;i < loc.length;i++){
            loc[i].innerHTML = content_arr[index].location[i];
        }
        
        let head = content.querySelector(".headline")
        head.innerHTML = content_arr[index].headline
        
        content.setAttribute("index",index)
        activate()
    },400)
}
function prev(){
    content.classList.remove("contentAppend")
    setTimeout(() =>{
        if(!content.classList.contains("contentUnAppend")){
            content.classList.add("contentUnAppend")
        }
        else{
            content.classList.remove("contentUnAppend")
            setTimeout(() =>{
                content.classList.add("contentUnAppend")
            },100)
        }
    },200)
    setTimeout(() =>{
        let index = content.getAttribute("index")
        index = (index - 1 + content_arr.length) % content_arr.length
    
        content.style.backgroundImage = content_arr[index].img
        let loc = content.querySelector(".location").children
        for(let i = 0;i < loc.length;i++){
            loc[i].innerHTML = content_arr[index].location[i];
        }
        let head = content.querySelector(".headline")
        head.innerHTML = content_arr[index].headline
        
        content.setAttribute("index",index)
        activate()
    },400)
}