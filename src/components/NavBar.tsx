import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModSwitch from "./ColorModSwitch"
import SearchInput from "./SearchInput"

interface Props{
  onSearch : (searchText : string )=>void;
}


const Navbar = ({onSearch}:Props) => {
  return (
    <HStack>
        <Image src={logo} boxSize={"60px"} marginX={3}/>
        <SearchInput onSearch={onSearch}/>
        <ColorModSwitch/>
    </HStack>
  )
}

export default Navbar