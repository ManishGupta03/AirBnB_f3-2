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
    // Create a button to open the booking cost breakdown modal
    const bookingButton = document.createElement("button");
    bookingButton.innerText = "View Cost Breakdown";
    bookingButton.addEventListener("click", () => {
        showBookingCostBreakdown(listing);
    });

    // Append the button to the listing card
    listingCard.appendChild(bookingButton);

    return listingCard;
};


function showBookingCostBreakdown(listing) {
    // Create a modal dialog
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Add the content for the modal (booking cost breakdown)
    const content = document.createElement("div");
    content.classList.add("modal-content");
    content.innerHTML = `
        <h2>Booking Cost Breakdown</h2>
        <p>Base Rate: $${listing.baseRate}</p>
        <p>Additional Fees: $${listing.additionalFees}</p>
        <p>Total Cost: $${listing.baseRate + listing.additionalFees}</p>
    `;

    // Create a close button
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => {
        // Close the modal when the close button is clicked
        modal.style.display = "none";
    });

    // Append the close button to the modal content
    content.appendChild(closeButton);

    // Append the content to the modal
    modal.appendChild(content);

    // Append the modal to the document's body
    document.body.appendChild(modal);

    // Display the modal
    modal.style.display = "block";
}



function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // Example coordinates (San Francisco)
        zoom: 10, // Example zoom level
    });

    // Now, you have a map ready to display markers.
}



function createListingCard(listing) {
    // ... Your existing code to create the listing card ...

    // Create a marker for the listing on the map
    const marker = new google.maps.Marker({
        position: { lat: listing.latitude, lng: listing.longitude },
        map: map, // Assuming 'map' is the variable holding your Google Map instance
        title: listing.title, // Display the title when the marker is clicked
    });

    // Add an event listener to open an info window when the marker is clicked
    marker.addListener("click", function() {
        const infowindow = new google.maps.InfoWindow({
            content: listing.title,
        });
        infowindow.open(map, marker);
    });

    // ... Continue creating your listing card ...

    return listingCard;
}


function createListingCard(listing) {
    // ... Your existing code to create the listing card ...

    // Create a "Get Directions" button
    const directionsButton = document.createElement("button");
    directionsButton.innerText = "Get Directions";
    directionsButton.addEventListener("click", function() {
        openDirections(listing.location);
    });

    // Append the button to the listing card
    listingCard.appendChild(directionsButton);

    // ... Continue creating your listing card ...

    return listingCard;
}

// Function to open Google Maps directions in a new tab
function openDirections(location) {
    // Construct the Google Maps directions URL using the latitude and longitude of the property
    const url = `https://www.google.com/maps/dir//${location.latitude},${location.longitude}`;

    // Open the URL in a new tab
    window.open(url, "_blank");
}

// Example usage
const sampleListing = {
    // ... Your listing data, including the 'location' property with latitude and longitude ...
};

const listingCard = createListingCard(sampleListing);

// Append the listing card to your webpage or container
// document.getElementById('your-listings-container').appendChild(listingCard);

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