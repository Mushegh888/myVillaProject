import paint from "./paint.js"


if(localStorage.getItem("index") == null){
    localStorage.setItem("index",1)
}

const grid = document.querySelector(".offers_table")

function reader(data){
    return fetch(data)
            .then(res=>{
                if(res.ok){
                    return res.json();
                }
            })
}
function forClick(data,value) {
    if(value.toLocaleLowerCase() == "show all"){
        reader(data).then(data =>{
            grid.innerHTML = ""
            data.forEach(item => {
                grid.innerHTML += paint(item);
            });
        })
    }
    else{
        reader(data).then(data =>{
            grid.innerHTML = ""
            data.forEach(item => {
                let cat = item.category
                if(cat == value){
                    grid.innerHTML += paint(item);
                }
            });
        })
    }
    setTimeout(() =>{
        const links = document.querySelectorAll(".link")
        links.forEach(item =>{
            item.addEventListener("click", () =>{
                const index = parseInt(item.getAttribute("index"))
                localStorage.setItem("index",index)
                setTimeout(()=>{
                    window.location.href = ("propDet.html");
                },50)
            })
        })
    },200)
}
document.onload =  forClick("properties.json","show all")

const offerBtns = document.querySelectorAll(".offer_but");
offerBtns.forEach(item =>{
    let value = ""
    switch(item.innerHTML){
        case "Villa House":
            value = "Luxury Villa"
            break;
        default:
            value = item.innerHTML
    }
    item.addEventListener("click", () =>{
        for(let item2 of offerBtns){
            item2.classList.remove("active-btn")
        }
        if(!item.classList.contains("active-btn")){
            item.classList.add("active-btn")
        }
        else{
            item.classList.remove("active.btn")
        }
        forClick("properties.json",value)
    })
})
