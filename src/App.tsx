import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GnereList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genre : Genres | null;
  platform : Platform | null;
  sortOrder : string;
  searchText : string;
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
        <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GnereList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery,genre})}/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={3}>
          <GameHeading  gameQuery={gameQuery}/>
          <HStack marginY={2} spacing={3} >
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})}/>
          </HStack>
        </Box>
        <GameGrid  gameQuery={gameQuery}/>
      </GridItem>
      
      
    </Grid>
    </>
  );
};

export default App;
