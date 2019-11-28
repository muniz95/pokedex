import axios from 'axios';

const BASEURL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
  const response = await axios.get(`${BASEURL}/pokemon`);
  return response.data.results;
}

export default {
  getPokemonList,
};
