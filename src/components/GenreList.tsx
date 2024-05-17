import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GnereList = () => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner/>;
  
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}  paddingY="5px">
          <HStack>
            <Image 
            src={getCroppedImageUrl(genre.image_background)}
            boxSize={"32px"}
            borderRadius={8}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
            
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GnereList;
