import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery : GameQuery 
}
const GameHeading = ({gameQuery}:Props) => {
    // games
    // adventure games
    // xbox adventure Games

    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
    return (
    <Heading marginY={6} fontSize={"5xl"} as={"h1"}> 
      {heading}
    </Heading>
  )
}

export default GameHeading  