import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModSwitch from "./ColorModSwitch"

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={"60px"}/>
        <ColorModSwitch/>
    </HStack>
  )
}

export default Navbar