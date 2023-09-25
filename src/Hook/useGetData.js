import { useEffect } from "react";
import { useState } from "react";


const useGetData = () => {
  const [donationData, setdonationData] = useState();

  useEffect(()=>{
     fetch('/data.json')
     .then(res=>res.json())
     .then(data=>setdonationData(data))
  },[])
  return [donationData] ;
};

export default useGetData;