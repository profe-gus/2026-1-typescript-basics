import { ApiServiceAxios, ApiServiceFetch, type HttpAdapter } from '../api/api.service';
import type { PokeAPI } from "../interfaces/pokeapi";


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
        private readonly httpAdapter: HttpAdapter
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
        return await this.httpAdapter.getPokemon<PokeAPI>(name);
    }

}

const serviceAxios = new ApiServiceAxios();
const serviceFetch = new ApiServiceFetch();

export const gus = new Student(1, "Gustavo", 34, true, serviceFetch)
const pokemon = await gus.getPokemon("bulbasaur");
console.log(pokemon);