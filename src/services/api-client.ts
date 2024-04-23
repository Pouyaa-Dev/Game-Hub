import axios from "axios";

export default axios.create({           
    baseURL:"https://api.rawg.io/api",                   
    params:{
        key:"f959a95921fb451c8c22e40f84809642" 
    }
})