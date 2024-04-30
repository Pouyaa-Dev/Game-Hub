import axios from "axios";

export default axios.create({           
    baseURL:"https://api.rawg.io/api",
    params:{
        key : "2e86e36598104250b7b7bd05f919a084"
    }
})