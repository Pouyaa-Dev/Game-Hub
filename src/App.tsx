import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GnereList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery{
  genre : Genres | null;
  platform : Platform | null;
}


const App = () => {

  const [gameQuery , setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base : "1fr",
        lg : "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GnereList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery,genre})}/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack paddingLeft={6} spacing={3}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          <SortSelector/>
        </HStack>
        <GameGrid  gameQuery={gameQuery}/>
      </GridItem>
      
      
    </Grid>
    </>
  );
};

export default App;
