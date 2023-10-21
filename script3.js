document.addEventListener("DOMContentLoaded", () => {
    const result = JSON.parse(localStorage.getItem("hotelDetails"));
    if (result) {
        console.log(result);
        render(result);
    } else {
        window.location.href = 'listing.html';
    };
});

const houseTitle = document.getElementById("detail1");
const images = document.getElementById("detail2");
const smallDetail = document.getElementById("detail3");
const iframe = document.getElementById("iframe");
const locationName = document.getElementById("location");
const host = document.getElementById("host");
const anchor = document.getElementById("anchor");


function render(data) {
    // console.log(data.images);
    houseTitle.innerHTML = `
            <h1>${data.name}</h1>
            <div class="row">
                <div>
                    ${ratings(data.rating)}
                    <span>${data.reviewsCount} Reviews</span>
                </div>
                <div>
                    <p>Location: ${data.address}</p>
                </div>
            </div>`;
    images.innerHTML = `
            <div class="gallery-img-1">
                <img src="${data.images[0]}">
            </div>
            <div>
                <img src="${data.images[1]}">
                </div>
            <div>
                <img src="${data.images[2]}">
            </div>
            <div>
                <img src="${data.images[3]}">
            </div>
            <div>
                <img src="${data.images[4]}">
            </div>`;
    smallDetail.innerHTML = `
            <h2>${data.type}</h2>
            <p>${data.persons} guest &nbsp; &nbsp; ${data.beds} beds &nbsp; &nbsp; ${data.bathrooms} bathroom</p>
            <h4>$ ${data.price.rate} / day</h4>`;
    iframe.src = `https://maps.google.com/maps?q=${data.lat}, ${data.lng}&z=16&output=embed`;
    locationName.innerText = `${data.address}`;
    host.innerHTML = `
            <img src="${data.hostThumbnail}">
            <div>
                <h2>Hosted by Brandon</h2>
                <p><span>
                    ${ratings(data.rating)}   
                    </span>&nbsp; &nbsp; ${data.reviewsCount} reviews &nbsp; &nbsp; Response rate 100% &nbsp; &nbsp; Response time: 60
                    min</p>
            </div>`;
    anchor.href = data.url;
};



function ratings(data) {
    if (data === undefined) {
        return ``;
    } else if (data <= 1) {
        return `<i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                ${data}
                `
    } else if (data > 1 && data <= 2) {
        return `<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                ${data}
                `
    } else if (data > 2 && data <= 3) {
        return `<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                ${data}
                `
    } else if (data > 3 && data <= 4) {
        return `<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                ${data}
                `
    } else if (data > 4 && data <= 5) {
        return `<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                ${data}
                `
    };
};