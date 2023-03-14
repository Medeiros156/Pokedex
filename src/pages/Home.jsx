import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Skeletons } from "../components/Skeletons";
import PokemonPopUp from "../components/PokemonPopUp";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState('charmander');
  





  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonsFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };
  const handlePokemonClick = (pokemon) => {
    console.log('pokemon');
    console.log(pokemon);
    setSelectedPokemon(pokemon);
  };
  return (
    <div>
      <Navbar pokemonFilter={pokemonsFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={6} sm={6} md={4} lg={2} key={key}>
                <PokemonCard  onClick={() => handlePokemonClick(pokemon)} name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                <PokemonPopUp selectedPokemon={pokemon}/>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
