import { useEffect, useState } from 'react';
import service from '../../services/pokemon.service';
import { PageContainer } from '@/components/page-container';

interface IProps {
  id: number;
  isOpen: boolean;
}

const PokemonDetails = ({ id, isOpen }: IProps) => {
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    if (id !== 0) {
      service.getPokemonById(id).then(setPokemon);
    }
  }, [id]);

  return (
    <PageContainer isOpen={isOpen}>
      <div role="button" aria-label="Back">
        Back
      </div>
      <div style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
        {pokemon?.name}
      </div>
    </PageContainer>
  );
};

export default PokemonDetails;
