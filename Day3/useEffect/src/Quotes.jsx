import { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const[loading , setloading] = useState(false)
 

      
      async function getQuotes() {
          try{
            setloading(true)
          const response = await fetch("https://dummyjson.com/quotes/random");
            const data = await response.json();
            setQuotes(data);
            console.log(data);
            
        }
        catch(error){
          console.error("error fetching" ,error)
        }
        finally{
              setloading(false)// jab saab data aajaye toh loading ko false kardo
        }

        
    }
useEffect(() => {
    getQuotes();

}, [])

  return (
    <>
      {
       loading ? (<p>Loading...</p>)
       :( 
        <blockquote>
            <h1>Auto Quotes Genreated Components</h1>
          <p>Quotes : {quotes.quote}</p>
          <cite>Author : {quotes.author}</cite>

          <button onClick={getQuotes} disabled={loading}>{loading ? "fetching" : "NEW Quotes"}</button>
        </blockquote>)
       
      }
    </>
  );
}
export default Quotes;