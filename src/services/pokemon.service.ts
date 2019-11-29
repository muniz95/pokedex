import axios from 'axios';

const BASEURL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
  const response = await axios.get(`${BASEURL}/pokemon`);
  const completePokemonInfo = await Promise.all(
    response.data.results.map(
      async (result: any) => (await axios.get(result.url)).data
    )
  )
  return completePokemonInfo;
}

export const getPokemonByUrl = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
}

export default {
  getPokemonList,
};
