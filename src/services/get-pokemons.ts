import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { PokemonListResponse } from '@/types/api';

export const getPokemonList = ({
  offset = 0,
}: {
  offset?: number;
}): Promise<PokemonListResponse> => {
  return api
    .get(`/pokemon`, {
      params: {
        offset,
      },
    })
    .then(async (response) => {
      console.log('getPokemonList');
      const results = await Promise.all(
        response.results.map(async (pokemon: any) => {
          const response = await fetch(pokemon.url);
          return await response.json();
        })
      );

      return {
        results,
        count: response.count,
        previous: response.previous,
        next: response.next,
      };
    });
};

export const getPokemonListQueryOptions = (offset: number) => {
  return queryOptions({
    queryKey: ['pokemons'],
    queryFn: () => {
      return getPokemonList({ offset });
    },
  });
};

type PokemonListQueryOptions = {
  config?: QueryConfig<typeof getPokemonListQueryOptions>;
  offset?: number;
};

export const usePokemonList = ({ offset, config }: PokemonListQueryOptions) => {
  return useQuery({
    ...getPokemonListQueryOptions(offset || 0),
    ...config,
  });
};
