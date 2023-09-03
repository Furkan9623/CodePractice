function search() {
  var city = document.getElementById("query").value;
  const url = `https://masai-api.herokuapp.com/hotels/search?city=${city}`;
  getdata(url);
}

async function getdata(url) {
  console.log(url);
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showToUi(data.hotels);
  } catch {}
}

function showToUi(data) {
  const hotel = document.getElementById("hotels_list");
  //   document.getElementById("hotels_list").innerHTML = "";
  data.forEach((e) => {
    console.log(e);
    hotel.innerHTML += `
    <div id ="hotels"><img src="${e.Images.one}" alt="" id = "imgTag"">
    <button>Book</button>
    </div>
    `;
    // hotels.addEventListener("click", function () {
    //   alert("heoo");
    //   rotate(e);
    // });
  });
}
function add(e) {
  alert("data receive");
  console.log("hello");
}
