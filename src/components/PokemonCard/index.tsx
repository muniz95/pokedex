import React from "react";
import S from './styled';

interface IProps {
  name: string;
  sprites: {
    front_default: string
  };
  types: any[];
}

export default (props: IProps) =>
  <S.PokemonCardContainer>
    <S.PokemonCardBody>
      <div>
        <img src={props.sprites.front_default} alt="" width={96} height={96} />
      </div>
      <div>
        {props.name}
      </div>
      {props.types.map((type: any) => <span>{type.type.name}</span>)}
    </S.PokemonCardBody>
  </S.PokemonCardContainer>;
