// class Weather {
//   constructor(city, state){
    
//     this.apiKey = '95b963c507905927fda9766e3c950b96';
//     this.city = city;
//     this.state = state;

//   }
//   //Fetch Weather from API
  
//   async getWeather(){
    
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

   

//     const responseDate = await response.json();

//     console.log(responseData)

//     return responseData;
    
//   }

//      //change location
//     changeLocation(city, country) {
//         this.city = city
//         this.country = country
//     }






//   //Change weather location
//   changeLocation(city, state){

//     this.city = city;

//     this.state = state;

//   }

// }


class Weather {
  constructor(city, country) {
      
      // this.apiKey = '3ad9369f5dd481e8bc0a070cb5745947'
      this.apiKey = '95b963c507905927fda9766e3c950b96';
      this.city = city; 
      this.country = country;
  }

  //fetch weather from api
  async getWeather() {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
      )

      const responseData = await response.json()
      //console.log(responseData)

      return responseData
  }

  //change location
  changeLocation(city, country) {
      this.city = city;
      this.country = country;
  }
}