import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GnereList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector"
const App = () => {

  const [selectedGenre , setSelectedGenre] = useState<Genres | null>(null);


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
          <GnereList selectedGenre={selectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector></PlatformSelector>
        <GameGrid selectedGenre = {selectedGenre}/>
      </GridItem>
      
      
    </Grid>
    </>
  );
};

export default App;
