const container=document.querySelector('.container')
const search=document.querySelector('.search-box button ')
const weatherBox=document.querySelector('.weather-box')
const weatherDeatails=document.querySelector('.weather-deatails')
const notfound=document.querySelector('.not-found')

search.addEventListener("click",()=>{
        const APIKey='94fdf6b8407ed026850fba17db6b0c87';
    const city=document.querySelector('.search-box input').value;
    

    if(city=='')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response=>response.json()).then(json=>{

        if(json.cod =="404"){
            container.style.height="500px"
            weatherBox.classList.remove('active')
            weatherDeatails.classList.remove('active')
            notfound.classList.add('active')
            return

        }

        container.style.height="500px"
        weatherBox.classList.add('active')
        weatherDeatails.classList.add('active')
        notfound.classList.remove('active')



        const image =document.querySelector('.weather-box img')
        const tempareture=document.querySelector('.weather-box .tempareture')
        const description =document.querySelector('.weather-box .description')
        const humidity=document.querySelector('.weather-deatails .humidity span')
        const wind =document.querySelector('.weather-deatails .wind span')

        switch(json.weather[0].main){
            case 'Clear':
                image.src ='OIP (2).jpg';
                break;
            case 'Rain':
                image.src ='OIP (3).jpg';
                break;
            case 'Snow':
                image.src ='3705341.png';
                break;
            case 'Clouds':
                image.src ='R (1).jpg';
                break;
            case 'Mist':
                image.src ='3982155.png';
                break;
            case 'Haze':
                image.src ='1779807.png';
                break;
            default:
                image.src='weather-icon-element-isolated_23-2150364215.avif';
        }


        tempareture.innerHTML=`${parseInt(json.main.temp)}<span>ºC</span>`;
        description.innerHTML=`${json.weather[0].description}`;
        humidity.innerHTML=`${json.main.humidity}%`;
        wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
    })
});