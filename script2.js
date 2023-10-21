const listingsContainer = document.getElementById("listings-container");

document.addEventListener("DOMContentLoaded", () => {
    const result = JSON.parse(localStorage.getItem("result"));
    console.log(result);
    if (result) {
        createListingCard(result);
    } else {
        window.location.href = 'index.html';
    };
});

function createListingCard(data) {
    const result = data.results;
    result.forEach((listing) => {
        const listingCard = document.createElement("div");
        listingCard.classList.add("house");

        listingCard.addEventListener("click", () => {
            hotelDetail(listing);
        });

        listingCard.innerHTML = `
                <div class="house-img">     
                    <img src="${listing.images[0]}" alt="${listing.name}">
                </div>
                <div class="house-info">
                    <p>${listing.type}</p>
                    <h3>${listing.name}</h3>
                    <p>${listing.beds} Bedroom / ${listing.bathrooms} Bathroom </p>
                    <p>${listing.previewAmenities} </p>
                    <p>${listing.address}</p>
                    <div>
                        ${ratings(listing.rating)}
                    </div>
                    <div class="house-price">
                        <p>${listing.persons} Guest </p>
                        <h4>$ ${listing.price.rate} <span>/ day</span></h4>
                    </div>
                </div>
                `;
        listingsContainer.append(listingCard);
    });
};

function hotelDetail(data) {
    console.log(data);
    localStorage.setItem("hotelDetails", JSON.stringify(data));
    setTimeout(() => {
        window.location.href = 'house.html';
    }, 1000);
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