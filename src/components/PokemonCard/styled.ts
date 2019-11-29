import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  @media (max-width: 767px) {
    width: 80%
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40%
  }
  @media (min-width: 1024px) {
    width: 22%
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
