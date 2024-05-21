import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder : string;
}

const SortSelector = ({ onSelectSortOrder , sortOrder}: Props) => {
  const SortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = SortOrders.find((order)=>order.value === sortOrder)

  return (
    <Menu>
      <MenuButton fontSize={"xl"} marginRight={2} as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList fontSize={"xl"}>
        {SortOrders.map((sort) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(sort.value)
            }}
            key={sort.label}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
