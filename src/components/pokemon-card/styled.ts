import styled from 'styled-components';

export const PokemonCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const PokemonCardBody = styled(Link)`
export const PokemonCardContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-style: solid;
  border-width: 1px;
  border-radius: 25px;
  border-color: #dc0a2d;
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
  padding: 8px;
  border-radius: 5px;
`;

const components = {
  PokemonCardHeader,
  PokemonCardContainer,
  PokemonCardColumn,
  PokemonCardRow,
};

export default components;
