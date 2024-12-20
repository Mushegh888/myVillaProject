const offerArr = {
    appartment:{
        info:{
            totalflat: "185 m2",
            floorNum: "26th",
            roomsNum: 6,
            parkAvble: "yes",
            payProc: "Cash"
        },
        img: "offersFirst/img1.jpg",
        text:{
            headline: "Extra Info About Penthouse",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
        }
    },
    villa:{
        info:{
            totalflat: "250 m2",
            floorNum: "26th",
            roomsNum: 5,
            parkAvble: "no",
            payProc: "Bank"
        },
        img: "offersFirst/img2.jpg",
        text:{
            headline: "Extra Info About Penthouse",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
        }
    },
    penthouse:{
        info:{
            totalflat: "320 m2",
            floorNum: "34th",
            roomsNum: 6,
            parkAvble: "yes",
            payProc: "Bank"
        },
        img: "offersFirst/img3.jpg",
        text:{
            headline: "Extra Info About Penthouse",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
        }
    }
}
const offerDiv = document.querySelector(".offer_main")
const offerBtns = document.querySelectorAll(".offer_but");


for(let item of offerBtns){
    if(item.classList.contains("active-btn")){

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
        let value = item.name
        let obj;
        switch(value){
            case "appartment":
                obj = offerArr.appartment
                break;
            case "villa":
                obj = offerArr.villa
                break;
            case "penthouse":
                obj = offerArr.penthouse
                break;
        }
        offerDiv.innerHTML = paintOffer(obj)
    })
}
window.onload = function(){
    offerDiv.innerHTML = paintOffer(offerArr["appartment"])
}
function paintOffer(obj){
    let htmlInfo = "";
    let htmlImg = "";
    let htmlInfo2 = "";
    let htmlx = "";
    let infoObj = obj.info;
    let objText = obj.text;
    for(let key in infoObj){
        let text = ""
        switch(String(key)){
            case "totalflat":
                text = "Total Flat Space"
                break;
            case "floorNum":
                text = "Floor number"
                break;
            case "roomsNum":
                text = "Number of rooms"
                break;
            case "parkAvble":
                text = "Parking Available"
                break;
            case "payProc":
                text = "Payment Process"
                break;
        }
        htmlInfo += `
        <div class="row flex-wrap align-items-center">
            <span class="col">${text}</span>
			<span class="col">${infoObj[key]}</span>
		</div>`
    }
    htmlImg = `<div clas="col-lg-4"><img src="${obj.img}" class="offer_main_img"></img></div>`
    htmlInfo2 = `<h1>${objText.headline}</h1> <p>${objText.mainText}</p>`
    htmlx = `
    <div class="offer_main d-lg-flex d-grid gap-5 justify-content-lg-between align-items-start">
        <div class="offer_main_info1 d-grid gap-3 justify-items-center col-lg-3">
            ${htmlInfo}
		</div>
        ${htmlImg}
        <div class="offer_main_info2 d-grid gap-4 col-lg-3">
			${htmlInfo2}
			<div class="schedule d-flex align-items-center">
                <div class="circle d-flex justify-content-center align-items-center"><i class="fa-solid fa-calendar"></i></div>
					<a href="#">Schedule a visit</a>
				</div>
			</div>
		</div>`
        return htmlx
}