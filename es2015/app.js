//******************************************************* */
//let
let favoriteCityId =  "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

//******************************************************* */
//const
const citiesId = ['paris','nyc','rome','rio-de-janeiro'];
//citiesId = [];
citiesId.push('tokyo');
console.log(citiesId);

//******************************************************* */
//Création d'objet
function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature};
}

const weather = getWeather(favoriteCityId);
console.log(weather);

//******************************************************* */
//Affectation destructurée
const { city, temperature } = weather;
console.log(city);
console.log(temperature);

//******************************************************* */
//Rest operator
const [parisId, nycId,...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//******************************************************* */
//Classe
class Trip {
    constructor(id,name,imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price = newPrice;
    }
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg');
    }
    toString(){
        return "Trip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this._price+"]";
    }
}

let parisTrip = new Trip('paris','Paris','img/paris.jpg');
parisTrip._price=100;
console.log(parisTrip.toString());
console.log(Trip.getDefaultTrip().toString());

//******************************************************* */
//Héritage
class FreeTrip extends Trip {
    constructor(id,name,imageUrl){
        super(id, name, imageUrl);
        this.price = 0;
    }
    toString(){
        return "Free"+super.toString();
    }
}

const freeTrip = new FreeTrip('nantes','Nantes','img/nantes.jpg');
console.log(freeTrip.toString());

//******************************************************* */
//Promise, Set, Map, Arrow Function
class TripService {

    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                var test;
                var err = 0;
                 // ici l'exécution du code est asynchrone
                this.trips.forEach(function(element){
                    if(element.name===tripName){
                        test = element;
                        err++;
                    }
                });
                if(err===0) {
                    reject('No trip with name '+tripName); // en cas d'erreur
                } else {
                    resolve(test); // en cas de succès
                }
             }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        this.trips = new Map();
        this.trips.set('paris',100);
        this.trips.set('rio-de-janeiro',800);
        this.trips.set('nantes',null);
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }, 2000)
               });
    }
}
const services = new TripService();
console.log(services.findByName('Paris'));