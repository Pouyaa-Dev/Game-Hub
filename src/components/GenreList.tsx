import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props{
  onSelectGenre : (genre : Genres)=>void,  
  selectedGenre : Genres | null;
}


const GnereList = ({selectedGenre,onSelectGenre} : Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
    <Heading fontSize={"3xl"} marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
              objectFit={"cover"}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold": "normal" }
              onClick={() => onSelectGenre(genre)}
              variant="link"
              whiteSpace={"normal"}
              textAlign={"left"}
              fontSize={"xl"}
              marginY={2}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GnereList;
