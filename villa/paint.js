function money(num){
    return num.toLocaleString('de-DE') + "$";
}

function paint(obj) {
    let htmlx = ""
    let img = `<a class="link" index="${obj.id}"><img src="${obj.img}" alt="${obj.category}"></a>`
    let info = obj.info
    let htmlInfo = ""
    for(let key in info){
        switch(key){
            case "area":
                htmlInfo += `<span>${key} <b>${info[key]}m<sup>2</sup></b></span>`
                break;
            case "parking":
                htmlInfo += `<span>${key} <b>${info[key]} spots</b></span>`
                break;
            default:
                htmlInfo += `<span>${key} <b>${info[key]}</b></span>`
        }
        if(key == "area"){}
    }
    htmlx = `
    <div class="table_item d-grid justify-items-center gap-3 py-4 px-5">
        ${img}
        <div class="item_info d-grid gap-3 justify-items-center">
            <div class="item_info_head d-md-flex d-grid justify-content-md-between">
                <span class="category">${obj.category}</span>
                <strong class="price">${money(obj.price)}</strong>
            </div>
            <a class="link" index="${obj.id}"><strong>${obj.address}</strong></a>
            <div class="more d-flex flex-wrap gap-3">
                ${htmlInfo}
            </div>
            <hr>
            <button class="link"  index="${obj.id}">Schedule a visit</button>
        </div>
    </div>`
    return htmlx;
}

export default paint;