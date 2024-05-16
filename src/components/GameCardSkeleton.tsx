import { CardBody,Card,Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width={"300px"} borderRadius={15} overflow={'hidden'}>
        <Skeleton height={"200px"}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton;