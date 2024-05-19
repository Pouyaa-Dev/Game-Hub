import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {  BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
  return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by : Relevance</MenuButton>
            <MenuList>
                <MenuItem>item 1</MenuItem>
                <MenuItem>item 2</MenuItem>
                <MenuItem>item 3</MenuItem>
                <MenuItem>item 4</MenuItem>
                <MenuItem>item 5</MenuItem>
                <MenuItem>item 6</MenuItem>
            </MenuList>
        </Menu>   
  )
}

export default SortSelector