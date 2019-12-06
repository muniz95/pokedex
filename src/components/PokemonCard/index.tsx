import React from "react";
import S from './styled';

interface IProps {
  name: string;
  id: number;
  sprites: {
    front_default: string
  };
  types: any[];
}

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
const getTypeColor = (pokemonType: string) => ({
  'normal': '#A8A77A',
  'fire': '#EE8130',
  'water': '#6390F0',
  'electric': '#F7D02C',
  'grass': '#7AC74C',
  'ice': '#96D9D6',
  'fighting': '#C22E28',
  'poison': '#A33EA1',
  'ground': '#E2BF65',
  'flying': '#A98FF3',
  'psychic': '#F95587',
  'bug': '#A6B91A',
  'rock': '#B6A136',
  'ghost': '#735797',
  'dragon': '#6F35FC',
  'dark': '#705746',
  'steel': '#B7B7CE',
  'fairy': '#D685AD',
} as any)[pokemonType];

export default (props: IProps) =>
  <S.PokemonCardContainer>
    <S.PokemonCardBody>
      <S.PokemonCardColumn style={{width: '30%'}}>
        <img src={props.sprites.front_default} alt="" width={96} height={96} />
      </S.PokemonCardColumn>
      <S.PokemonCardRow style={{width: '70%'}}>
        <S.PokemonCardRow>
          <h4>#{props.id}</h4>
          <h2>{capitalize(props.name)}</h2>
        </S.PokemonCardRow>
        <S.PokemonCardColumn style={{width: '100%', justifyContent: 'space-evenly'}}>
          {props.types.map((type: any) =>
            <S.PokemonCardRow style={{backgroundColor: getTypeColor(type.type.name)}}>
              {capitalize(type.type.name)}
            </S.PokemonCardRow>)
          }
        </S.PokemonCardColumn>
      </S.PokemonCardRow>
    </S.PokemonCardBody>
  </S.PokemonCardContainer>;
