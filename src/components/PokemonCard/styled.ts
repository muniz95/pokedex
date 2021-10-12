import styled from "styled-components";
// import { Link } from "react-router-dom";

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
  height: auto;
`;

export const PokemonCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const PokemonCardBody = styled(Link)`
export const PokemonCardBody = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-style: solid;
  border-width: 1px;
  border-radius: 25px;
  border-color: #DC0A2D;
  /* text-decoration: none; */
  color: black;
`;

export const PokemonCardColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonCardRow = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
`;

const components = {
  PokemonCardContainer,
  PokemonCardHeader,
  PokemonCardBody,
  PokemonCardColumn,
  PokemonCardRow,
};

export default components;
