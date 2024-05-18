import useGames, { Platform } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface Props{
  selectedGenre : Genres | null;
  selectedPlatform : Platform | null;
}


const GameGrid = ({selectedGenre , selectedPlatform }:Props ) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={6}
        spacing={3}
      >
        {isLoading && Skeletons.map(skeleton => 
        <GameCardContainer  key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>)}

        {data.map((game) => (
          <GameCardContainer  key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
