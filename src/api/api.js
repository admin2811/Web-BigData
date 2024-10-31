import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getMessage = async () => {
    try{
        const response = await axios.get(`${API_URL}/hello`);
        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}