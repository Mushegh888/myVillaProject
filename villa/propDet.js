import paint from "./detailspaint.js"

const grid = document.querySelector(".details")
const index = localStorage.getItem("index") 



function reader(data){
    return fetch(data)
            .then(res=>{
                if(res.ok){
                    return res.json();
                }
            })
}

function load(data,itemIndex){
    reader(data)
        .then(data =>{
            data.forEach(item => {
                if(item.id == itemIndex){
                    grid.innerHTML = paint(item)
                }
            });
        })
}
load("properties.json",index)

export default load
