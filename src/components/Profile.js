import React, {useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export default function Profile() {
 const { user } = useContext(AuthContext);
 const history = useHistory();

 return (
   <div>
     <p>
       Welcome {user.fullName} 
     </p>
     <button
       onClick={() => {
         Cookies.remove("authToken");
         history.push("/login");
       }}
     >
       Logout
     </button>
   </div>
 );
}
