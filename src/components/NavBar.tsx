import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModSwitch from "./ColorModSwitch"
import SearchInput from "./SearchInput"

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={"60px"} marginX={3}/>
        <SearchInput/>
        <ColorModSwitch/>
    </HStack>
  )
}

export default Navbar