export type Pokemon = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: { name: string; url: string }[];
  game_indices: {
    game_index: number;
    version: { name: string; url: string };
  }[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: { name: string; url: string };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: { name: string; url: string };
      order: number | null;
      version_group: { name: string; url: string };
    }[];
  }[];
  name: string;
  order: number;
  past_abilities: {
    abilities: { ability: null; is_hidden: boolean; slot: number }[];
    generation: { name: string; url: string };
  }[];
  past_types: any[];
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: {
      dream_world: { front_default: string; front_female: null };
      home: {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      'official-artwork': { front_default: string; front_shiny: string };
      showdown: {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
    };
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      'generation-ii': {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      'generation-iii': {
        emerald: { front_default: string; front_shiny: string };
        'firered-leafgreen': {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        'ruby-sapphire': {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      'generation-iv': {
        'diamond-pearl': {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        'heartgold-soulsilver': {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        platinum: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      'generation-v': {
        'black-white': {
          animated: {
            back_default: string;
            back_female: null;
            back_shiny: string;
            back_shiny_female: null;
            front_default: string;
            front_female: null;
            front_shiny: string;
            front_shiny_female: null;
          };
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        'x-y': {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      'generation-vii': {
        icons: { front_default: string; front_female: null };
        'ultra-sun-ultra-moon': {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      'generation-viii': {
        icons: { front_default: string; front_female: null };
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
  url: string;
};

export type PokemonListResponse = {
  results: Pokemon[];
  count: number;
  previous: string | null;
  next: string | null;
}
