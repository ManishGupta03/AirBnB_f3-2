const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("hii")
    const place = document.getElementById("place").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guestNo = document.getElementById("guest").value;

    if (place && checkIn && checkOut && guestNo) {
        api(place, checkIn, checkOut, guestNo);
        setTimeout(() => {
            window.location.href = 'listing.html';
        }, 5000);
    } else {
        alert("Give all Value");
    }
});
//0340ae5463msh9a5c4eee89effc5p1ea384jsne7d5f76279dc
async function api(place, checkIn,checkOut, guestNo) { 
    const options = { 
      method: 'GET', 
      url: 'https://airbnb13.p.rapidapi.com/search-location', 
      params: { 
        location: place, 
        checkin: checkIn, 
        checkout: checkOut, 
        adults: guestNo, 
        children: '0', 
        infants: '0', 
        pets: '0', 
        page: '1', 
        currency: 'USD' 
      }, 
      headers: { 
        'X-RapidAPI-Key': '0340ae5463msh9a5c4eee89effc5p1ea384jsne7d5f76279dc', 
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com' 
      } 
    }; 
 
    try { 
      const response = await axios.request(options); 
      const data = await response.data; // Use response.data to access the JSON response 
      console.log(data); 
      alert("dog")
      console.log(typeof(data)); 
      if (data.error == false) { 
                localStorage.setItem("result", JSON.stringify(data)); 
            } else { 
                alert(data.message); 
            } 
    } catch (error) { 
      console.error(error); 
     }
}