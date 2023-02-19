import { useEffect,useState } from "react";

const useFetch = (url) => {

  // const abortCont = new AbortController();

    const [data, setData] =useState(null)
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
          fetch(url )
          .then(res=>{
            if(!res.ok){
              throw Error('Could not get the data');
            }
          return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          }).catch((err)=>{
            // if(err.name === 'AbortError'){
            //   console.log('Fetch aborted');
            // }
            // else{
              setIsPending(false);
              setError(err.message);
            // }
          })
        },1000);
        
        return () => console.log('Cleanup');
      },[url]);

    return {data, isPending , error}
}

export default useFetch;