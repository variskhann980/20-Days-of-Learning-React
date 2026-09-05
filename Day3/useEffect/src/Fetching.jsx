import {  useState } from "react";
import { useEffect } from "react";

function Fetching() {
  const [post, setpost] = useState([]);
  const [loading , setloading] = useState(true)
  // data fetch

//  const fetching = () => {
//    setloading(true)
//    fetch("https://jsonplaceholder.typicode.com/posts")
//      .then((res) => res.json())
//      .then((data) => {
//        if (Array.isArray(data)) {
//            setpost(data.slice(0, 10));
//            setloading(false)
//        }
//        })
//            .catch((err) => {
//              console.error("Fetch error:", err);
//            })
//            .finally(() => {
//              // Data mile ya error aaye, loading band hona chahiye
//              setloading(false);
//        });
//        }
     //fetching();
async function fetchingData()  {
try{

    setloading(true)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    
    if(Array.isArray(data)){
        
        setpost(data)
        console.log(data);
    }
}
    catch (error) {
      console.error("Fetch error:", error);
    } finally {
      // 2. Data aane ya error aane ke baad loading false karna zaroori hai
      setloading(false);
    }
    
}
  // useEffect
  useEffect(() => {

fetchingData();
  }, []);

  return (
    <>
      <button onClick={fetchingData} style={{ marginBottom: "15px" }}>
        Reset / Refresh
      </button>

      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {Array.isArray(post) &&
            post.map((item) => (
              <li key={item.id} style={{ marginBottom: "15px" }}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}


export default Fetching;
