import  { ApiService } from "../api/api.service";


class Student {
    id:number;
    name:string;
    age:number;
    isActive:boolean;

    constructor(
        id:number, 
        name:string, 
        age:number, 
        isActive:boolean,
        private readonly apiService:ApiService
        ){
        this.id = id;
        this.name = name;
        this.age = age;
        this.isActive = isActive
    }

    //Metodo con retorno
    suma(primerSumando:number, segundoSumando:number):number{
        return primerSumando + segundoSumando;
    }

    //Metodo sin retorno
    mensaje(){
        console.log("Soy un simple metodo que no retorna nada");
    }

    async getPokemon(name:string){
        return await this.apiService.getPokemon(name);
    }

}

const service = new ApiService();
export const gus = new Student(1, "Gustavo", 34, true, service)
const pokemon = await gus.getPokemon("bulbasaur");
console.log(pokemon.data.name);