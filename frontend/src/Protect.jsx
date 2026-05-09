import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "./AccessTokenProvider";

function Protect({ children }) {
  console.log("protect ran");
  const { AccessToken, setAccessToken } = useContext(AuthProvider);
  const [next, setNext] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const RequestNewAccessToken = async () => {
      try {
        if (AccessToken) {
          setNext(true);
          return;
        }
        const request = await fetch("http://localhost:3500/newaccesstoken", {
          method: "POST",
          credentials: "include",
        });
        if (!request.ok) navigate("/signup");
        else {
          const response = await request.json();
          setAccessToken(response.AccessToken);
          setNext(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    RequestNewAccessToken();
  }, []);
  if (!next) return <p>Loadin..... Please Wait</p>;
  return children;
}

export default Protect;
