// function getWeather(){
//     const city=document.getElementById("city").value;
//     // const state=document.getElementById("state").value;
//     // const country=document.getElementById("country").value;
//     const api_key="1db02d26e0eb23ea2f034cc5066956bc";
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>{
//         const Weather_Info=document.getElementById("Weather_Info");
//         const temp=data.main.temp;
//         const temp1=Math.floor(temp-273.15);
//         Weather_Info.innerHTML=`Temperature: ${temp1}°C`;
//         if(temp1>25){
//             document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1464660439080-b79116909ce7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2hpbmV8ZW58MHx8MHx8fDA%3D')";
//             document.body.style.backgroundImage="no-repeat";
//         }
//         else{
//             document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1525510579144-4844ac3d3a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3VkeXxlbnwwfHwwfHx8MA%3D%3D')";
//         }
//         console.table(data);
//     })
//     .catch((error)=>{
//         console.error("error fetching Weather..!",error);
//         const Weather_Info=document.getElementById("Weather_Info");
//         Weather_Info.innerHTML="Error Fetching Weather...!!";
//     });
// }

// let result = document.getElementById("result");
// let searchBtn = document.getElementById("search-btn");
// let cityRef = document.getElementById("city");
// let key = "1db02d26e0eb23ea2f034cc5066956bc";
// //Function to fetch weather details from api and display them
// let getWeather = () => {
//   let cityValue = cityRef.value;
//   //If input field is empty
//   if (cityValue.length == 0) {
//     result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
//   }
//   //If input field is NOT empty
//   else {
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
//     //Clear the input field
//     cityRef.value = "";
//     fetch(url)
//       .then((resp) => resp.json())
//       //If city name is valid
//       .then((data) => {
//         console.log(data);
//         console.log(data.weather[0].icon);
//         console.log(data.weather[0].main);
//         console.log(data.weather[0].description);
//         console.log(data.name);
//         console.log(data.main.temp_min);
//         console.log(data.main.temp_max);
        // result.innerHTML = `
        // <h2>${data.name}</h2>
        // <h4 class="weather">${data.weather[0].main}</h4>
        // <h4 class="desc">${data.weather[0].description}</h4>
        // <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        // <h1>${data.main.temp} &#176;</h1>
        // <div class="temp-container">
        //     <div>
        //         <h4 class="title">min</h4>
        //         <h4 class="temp">${data.main.temp_min}&#176;</h4>
        //     </div>
        //     <div>
        //         <h4 class="title">max</h4>
        //         <h4 class="temp">${data.main.temp_max}&#176;</h4>
        //     </div>
        // </div>
        // `;
//       })
//       //If city name is NOT valid
//       .catch(() => {
//         result.innerHTML = `<h3 class="msg">City not found</h3>`;
//       });
//   }
// };
// searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");
let key = "1db02d26e0eb23ea2f034cc5066956bc";

// Function to fetch weather details from the API and display them
let getWeather = () => {
  let cityValue = cityRef.value;

  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.table(data);
        console.log(data.weather[0].main);
        let temp = Math.floor(data.main.temp - 273.15);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176C</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176C</h4>
            </div>
        </div>
        `;

        // Determine background based on temperature
        if (data.main.temp < 25) {
          document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1611928482473-7b27d24eab80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D')";
          document.body.style.backgroundRepeat = "no-repeat"; 
        } else {
          document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1464660439080-b79116909ce7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2hpbmV8ZW58MHx8MHx8fDA%3D')"; // Replace with your sunshine image path
          document.body.style.backgroundRepeat = "no-repeat";
        }
        document.body.style.backgroundRepeat = "no-repeat"; // Ensure the image doesn't repeat
        document.body.style.backgroundSize = "cover"; // Ensure the image covers the entire background without distortion
        document.body.style.backgroundPosition = "center"; // Center the image in the background
        // document.body.style.color="black";
        console.table(data);
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
//event listeners
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
