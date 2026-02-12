import axios from "axios";
import type { PokeAPI } from "../interfaces/pokeapi";

export class ApiService {
    async getPokemon(name:string){
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const pokemon = await axios.get<PokeAPI>(url);
        return pokemon;
    }
}