//menu
const body = document.querySelector("body")
const menu = document.querySelector('.menu');
function fix(){
    if (window.scrollY > 200) {
        menu.style.position = "fixed"
        menu.classList.add('fixed-menu');
    } else {
        menu.style.position = "relative"
        menu.classList.remove('fixed-menu');
    }
}

const list2 = document.querySelector(".list2")
function menuShow(item) {
    if(item.classList.contains("active")){
        item.classList.remove("active")
        list2.classList.remove("show")
        list2.classList.add("hide")
    }
    else{
        item.classList.add("active")
        list2.classList.add("show")
        list2.classList.remove("hide")
    }
}



//infoBox
setTimeout(() =>{
    if(window.location.pathname != "/prop.html" && window.location.pathname != "/contact.html"){
        const infoBox = document.querySelector("#info_box").children
        for(let item of infoBox){
            let first = item.children[0];
            let second = item.children[1];
            let height = first.offsetHeight;
            item.style.height = `${height + 5}px`;
            item.addEventListener("click", function (){
                const isActive = second.classList.contains("anim")

                for (let otherItem of infoBox) {
                    let otherFirst = otherItem.children[0]
                    let otherSecond = otherItem.children[1]
                    otherFirst.classList.remove("active-box");
                    otherSecond.classList.remove("anim")
                    
                    let otherHeight = otherFirst.offsetHeight
                    otherItem.style.height = `${otherHeight + 5}px`;
                }
                if (!isActive) {
                    first.classList.add("active-box");
                    second.classList.add("anim")
                    item.style.height = "fit-content"
                }
            })
        }
    }
},500)
