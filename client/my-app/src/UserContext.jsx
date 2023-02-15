// import {createContext, useState} from "react";

// export const UserContext = createContext({});

// export function UserContextProvider({childern}) {
//     const [user, setUser] = useState(null);
//     return (
//         <UserContextProvider value={{user, setUser}}>
//             {childern}
//         </UserContextProvider>
            
       
//     );
// }
// import {createContext, useEffect, useState} from "react";
// import axios from "axios";
// import {data} from "autoprefixer";

// export const UserContext = createContext({});

// export function UserContextProvider({children}) {
//   const [user,setUser] = useState(null);
//   useEffect( async () => {
//     // if(!user) {
//     // axios.get('/profile').then(({data}) =>;
//     // setUser(data);
//     if (!user) {
//       axios.get('/profile').then(({data}) => {
//         setUser(data);
//   });
// }
// }, []);
//   return (
//     <UserContext.Provider value={{user,setUser,}}>
//       {children}
//     </UserContext.Provider>
//   );
// }




import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {data} from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({data}) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{user,setUser, ready}}>
      {children}
    </UserContext.Provider>
  );
}