class Storage{
  constructor(){
    this.city;
    this.country;
    this.defaultCity = 'Miami';
    this.defaultCountry = 'CA';

  }
  //Method to get location Data
  getLocationData(){

    if(localStorage.getItem('city')===null){
       this.city = this.defaultCity;
       
    }else{
      this.city = localStorage.getItem('city');
    }
    if(localStorage.getItem('country') === null){
      this.country = this.defaultCountry;
      
   }else{
     this.city = localStorage.getItem('city');
   }
   return {
     city : this.city,
     country: this.country
   }


  }

  //Method to set location Data
  setLocationData(city, country){
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }


}