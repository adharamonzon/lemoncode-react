//import { Character } from "./rick-morty.api.model"

export const getCharactersFromApi = (character:string) : Promise<any> => {
  return (fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then(resp => resp.json())
    .then(resp => resp.results)
  ) 
}

