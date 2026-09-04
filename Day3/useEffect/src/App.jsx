//import { useEffect, useState } from "react";

//function App() {
//let [users , setUsers]=useState([])
//let  [count , setcount ] = useState(10);


//useEffect(() => {
//  async function GithubUsers() {

//  const response = await fetch(`https://api.github.com/users?per_page=${count}`);
//  const data = await response.json();
//  // Bas ye check add kiya hai taaki crash na ho
//      if (Array.isArray(data)) {
//        setUsers(data);
//      }
  
//  console.log("hello");
  
//}
//GithubUsers();
//} , [count])// [] ka matlab: sirf ek baar component load hone par chalega





//  return (
//    <>
//    <h1>GitHub Users </h1>
//      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap" , gap:"10px"}}>
//        <input type="number"  value={count} onChange={(e) => setcount(e.target.value)}/>
//        {
         
//        Array.isArray(users) &&
//          users.map((user) => (
//            <div key={user.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//              <img src={user.avatar_url} height={"100px"} width={"100px"} alt={user.login} />
//              <span>{user.id}</span>
//            </div>
//          ))
//}
//      </div>
//    </>
//  );
//}

//export default App;
import { useEffect, useState } from "react";

function App() {
  let [users, setUsers] = useState([]);
  let [count, setcount] = useState(10);

  useEffect(() => {
    async function GetUsers() {
      // Free testing API jo kabhi 403 error nahi deti
      const response = await fetch(`https://dummyjson.com/users?limit=${count || 1}`);
      const data = await response.json();

      if (Array.isArray(data.users)) { // agar data array me tabhi data ko setUsers me set karo 
        setUsers(data.users);
      }
    }
    GetUsers();
  }, [count]);

  return (
    <>
      <h1>Users List</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <input type="number" value={count} onChange={(e) => setcount(e.target.value)} />

        {
        
        Array.isArray(users) &&// Agar users array hai, tabhi loop chalao
          users.map((user) => (
            <div key={user.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={user.image} height={"100px"} width={"100px"} alt={user.firstName} />
              <span>{user.firstName}</span>
            </div>
          ))
          
          }
      </div>
    </>
  );
}

export default App;