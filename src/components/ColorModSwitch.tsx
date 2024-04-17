import { HStack, Switch, Text ,useColorMode} from "@chakra-ui/react"


const ColorModSwitch = () => {
    const {toggleColorMode , colorMode} = useColorMode();

  return (
    <HStack>
        <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}></Switch>
        <Text>Dark mode</Text>
    </HStack>    
  )
}

export default ColorModSwitch