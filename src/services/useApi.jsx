import {useState, useEffect} from "react"

const useApi = (url) =>{
    const [data, setData] = useState(null)

    useEffect(()=>{
        const getData = async() =>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error (`Error! status: ${response.status}`);
                }
                const json_data = await response.json();
                setData(json_data);
    
            }catch(error){
                console.error(`Error fectching data: ${error}`);
            }
        }
        getData();
    }, [url]);
    return{data}

}
export default useApi;