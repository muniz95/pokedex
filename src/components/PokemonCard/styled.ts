import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  @media (max-width: 767px) {
    width: 80%
  }
`;

export const PokemonCardBody = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: grey;
  margin: 5px;
`;

export default {
  PokemonCardContainer,
  PokemonCardBody,
};
