let temp=document.getElementById('tempval');
let humadity=document.getElementById('humaval');
let windvel=document.getElementById('windval');
let desc=document.getElementById('weatherDesc');
let cityname= document.getElementById('city');

let btndom= document.getElementById('searchBtn');
btndom.addEventListener('click' , (evevt)=>{
      fetch('https://api.weatherapi.com/v1/current.json?key=da73fffc4d7c0769f3694ae28ca7cfd1&q='+cityname.value +' &aqi=yes')
      .then(Response =>Response.json())
      .then(data =>{
          //console.log(data);
          let temp_far=data['current']['temp_c'];
          let huma=data['current']['humidity'];
          let wind=data['current']['wind_kph'];
          let condn=data['current']['condition']['text']
          temp.innerHTML=temp_far;
          humadity.innerHTML=huma;
          windvel.innerHTML=wind;
          desc.innerHTML=condn;
      })

      .catch(err =>{
          alert("wrong city name");
      })

});

