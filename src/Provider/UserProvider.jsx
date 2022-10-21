<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserContext } from "../Contexts";
import Loading from "../Loading";

function UserProvider({children}) {
    const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        }
        ,
      }).then((response) => {
        setUser(response.data);
        setUserLoading(false);
      }).catch(()=>{
        localStorage.removeItem("token");
        setUserLoading(false);
      })
    } else {
      setUserLoading(false);
    }

  }, []);

  if (userLoading) {
    return <Loading/>
  }


    return <UserContext.Provider value={{ isLoggedIn:!!token , user, setUser }}>{children}</UserContext.Provider>
}

=======
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserContext } from "../Contexts";
import Loading from "../Loading";

function UserProvider({children}) {
    const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        }
        ,
      }).then((response) => {
        setUser(response.data);
        setUserLoading(false);
      }).catch(()=>{
        localStorage.removeItem("token");
        setUserLoading(false);
      })
    } else {
      setUserLoading(false);
    }

  }, []);

  if (userLoading) {
    return <Loading/>
  }


    return <UserContext.Provider value={{ isloggedIn:!!token , user, setUser }}>{children}</UserContext.Provider>
}

>>>>>>> e9014e2017a6a48ff74bdd54535b1f19f6e5c191
export default UserProvider;