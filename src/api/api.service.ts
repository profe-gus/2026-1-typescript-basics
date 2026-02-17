import axios from "axios";


export interface HttpAdapter {
    getPokemon<T>(name:string): Promise<T>
}
export class ApiServiceAxios implements HttpAdapter{
    async getPokemon<T>(name:string): Promise<T>{
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const { data } = await axios.get<T>(url);
        return data;
    }
}

export class ApiServiceFetch implements HttpAdapter{
    async getPokemon<T>(name:string):Promise<T>{
         const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
         const response = await fetch(url);
         const data: T = await response.json();
         return data;

    }
}