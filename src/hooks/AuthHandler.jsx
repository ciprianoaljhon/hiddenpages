// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLoggedInContext } from "./LoggedInContext";
// import { baseURL } from "../config/data";
// export const useAuth = () => {
//   const { loggedIn, setLogIn, setUserAuth } = useLoggedInContext();
//   const [state, setState] = useState({});
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const updateState = (e) => {
//     setState({
//       ...state,
//       [e.target.placeholder.toLowerCase()]: e.target.value,
//     });
//   };
//   const handleSubmit = async (e, isLogIn) => {
//     setLoading(true);
//     e.preventDefault();
//     let apiURL = `${baseURL}/auth/${isLogIn ? "sign-in" : "sign-up"}`;
//     const button = e.target.elements.submitBtn;
//     button.disabled = true;
//     const username = e.target.elements.username;
//     const password = e.target.elements.password;
//     const confirmPass = isLogIn ? "" : e.target.elements.confirmPass;

//     try {
//       if (!isLogIn) {
//         if (password.value != confirmPass.value) {
//           alert("Passwords don't match");
//           throw new Error("Passwords don't match");
//         }
//       } else {
//         try {
//           setLoading(true);
//           const res = await axios(apiURL, {
//             method: "post",
//             data: {
//               username: state.username,
//               password: state.password,
//             },
//           });
//           if (res.data.status == "success") {
//             setLogIn(true);
//             setUserAuth({
//               userID: res.data.userID,
//               tempAuthID: res.data.tempAuthID,
//             });
//             navigate(res.data.redirectURL);
//           } else {
//             setLogIn(false);
//           }
//         } catch (error) {
//           console.log("Server Error");
//           alert("Server Error");
//         } finally {
//           setLoading(false);
//         }
//       }
//     } catch (error) {
//       setLoading(false);
//     }
//   };

//   return [state, updateState, message, handleSubmit, loading];
// };

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedInContext } from "./LoggedInContext";
import { baseURL } from "../config/data";

export const useAuth = () => {
  const { setLogIn, userAuth, handleAuth } = useLoggedInContext();
  const [state, setState] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateState = (e) => {
    setState({
      ...state,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
  };

  const handleSubmit = async (e, isLogIn) => {
    e.preventDefault();
    let apiURL = `${baseURL}/auth/${isLogIn ? "sign-in" : "sign-up"}`;
    const button = e.target.elements.submitBtn;
    button.disabled = true;
    const username = e.target.elements.username;
    const password = e.target.elements.password;
    const confirmPass = isLogIn ? "" : e.target.elements.confirmPass;

    try {
      if (!isLogIn) {
        if (password.value !== confirmPass.value) {
          alert("Passwords don't match");
          return;
        }
      }
      setLoading(true);
      const res = await axios.post(apiURL, {
        username: username.value,
        password: password.value,
      });
      console.log(res.data);
      if (res.data.status === "success") {
        const { userID, tempAuthID, firstName, lastName } = res.data;
        handleAuth({
          userID: res.data.userID,
          tempAuthID: res.data.tempAuthID,
        });
        const sessionData = {
          tempAuthId: tempAuthID,
          userId: userID,
          firstName,
          lastName,
          loggedIn: true,
        };
        setLogIn(true);
        sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
        navigate(res.data.redirectURL);
      } else if (res.data.status === "incorrect-credentials") {
        alert(res.data.message);
        navigate(res.data.redirectURL);
      } else if (res.data.status === "username_exists") {
        throw new Error(res.data.message);
      } else {
        setLogIn(false);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      button.disabled = false;
    }
  };

  return [state, updateState, message, handleSubmit, loading];
};
