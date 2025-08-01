import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { Pokemon, PokemonListResponse } from '@/types/api';

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
    .then(async (response: any) => {
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

export const useInfinitePokemonList = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons-infinite'],
    queryFn: ({ pageParam = 0 }) => getPokemonList({ offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const currentCount = allPages.reduce(
        (total, page) => total + page.results.length,
        0
      );
      return currentCount < lastPage.count ? currentCount : undefined;
    },
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageParams,
      results: data.pages.reduce<Pokemon[]>((acc, page) => [...acc, ...page.results], []),
      count: data.pages[0]?.count ?? 0,
    }),
  });
};
