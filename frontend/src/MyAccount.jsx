import { useEffect, useState, useContext } from "react";
import { AuthProvider } from "./AccessTokenProvider";

function MyAccount() {
  const [name, setName] = useState("");
  const [orders, setOrders] = useState([]);
  const { AccessToken } = useContext(AuthProvider);

  useEffect(() => {
    const GetAccountInformation = async () => {
      try {
        const request = await fetch("http://localhost:3500/myaccount", {
          method: "POST",
          headers: {
            authorization: `Bearer ${AccessToken}`,
          },
        });
        const response = await request.json();
        setName(response.user.Name);
        setOrders(response.user.orders);
      } catch (error) {
        console.error(error);
      }
    };
    GetAccountInformation();
  }, []);
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>
        Orders Placed :{" "}
        {orders.length > 0 ? (
          <p>Total Orders placed so far {orders.length}</p>
        ) : (
          "No Orders Olaced so far"
        )}
      </h2>
    </div>
  );
}
export default MyAccount;
