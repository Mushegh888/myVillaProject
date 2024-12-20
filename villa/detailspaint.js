function paint2(obj){
    let htmlx = 0;
    let infoBox = `
    <div id="info_box" class="info_box d-grid">
        <div class="option d-grid" index=0>
            <span>Best useful links ?</span>
			<span>Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</span>
		</div>
	    <div class="option d-grid" index=1>
            <span>How does this work ?</span>
            <span>Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</span>
		</div>
        <div class="option d-grid" index=2>
            <span>Why is Villa Agency the best ?</span>
            <span>Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</span>
        </div>
	</div>`
    let img = `<img class="detImg col-12" src="${obj.img}">`
    let leftSide = `
    <div class="left-side-head d-grid gap-2">
        ${img}
        <span class="category" style="width: fit-content;">Appartment</span>
        <h1>24 New Street Miami, OR 24560</h1>
        <hr>
        <div class="left-side-text">${obj.text}</div>
        ${infoBox}
    </div>`
    let rightSide = `
    <div class="apartment_box2 col-lg-3 d-grid px-4" style="height: 600px;">
        <div class="item d-flex gap-3 align-items-center">
            <img src="ap_1/icon1.png">
            <div class="text d-grid">
                <h4>${obj.info.area}m<sup>2</sup></h4>
                <span>Total Flat Space</span>
            </div>
        </div>
        <div class="item d-flex gap-3 align-items-center">
            <img src="ap_1/icon1.png">
            <div class="text d-grid">
				<h4>Contract</h4>
				<span>Contract Ready</span>
			</div>
		</div>
		<div class="item d-flex gap-3 align-items-center">
			<img src="ap_1/icon1.png">
			<div class="text d-grid">
				<h4>Payment</h4>
				<span>Payment Process</span>
			</div>
		</div>
		<div class="item d-flex gap-3 align-items-center">
			<img src="ap_1/icon1.png">
			<div class="text d-grid">
				<h4>Safety</h4>
				<span>24/7 Under Control</span>
			</div>
		</div>			
	</div>`

    htmlx = `${leftSide} ${rightSide}`

    return htmlx;
}
export default paint2