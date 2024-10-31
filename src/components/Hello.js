import React, {useState, useEffect} from "react";
import { getMessage } from "../api/api";
const Hello = () => {
    const [message, setMessage] = useState("");

    useEffect(()=>{
        const fecthData = async () => {
            try{
                const response = await getMessage();
                setMessage(response);
            }catch(error){
                console.error(error);
            }
        };
        fecthData();
    },[])

    return (
        <div className='text-3xl font-bold underline text-slate-600'>
            {message}
        </div>
    );
}

export default Hello;