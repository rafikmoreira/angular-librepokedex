import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  public pokemonList: string[] = [];
  constructor() {}
}
