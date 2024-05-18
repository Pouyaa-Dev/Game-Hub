import useData from "./useData";

interface platforms{
    id : number ;
    name : string ;
    slug : string;
}

const usePlatforms = ()=> useData<platforms>("/platforms/lists/parents");

export default usePlatforms;