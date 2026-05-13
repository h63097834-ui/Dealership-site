import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "./AccessTokenProvider";
import './css/SeeMyOrders.css'

function SeeMyOrders() {
    const [error, setError] = useState('');
    const [Orders, setOrders] = useState([]);
    const [print, setPrint] = useState(false);
    const { AccessToken, setAccessToken } = useContext(AuthProvider);
    const navigate = useNavigate();

    useEffect(() => {
        const GetOrders = async () => {
            try {
                const request = await fetch("http://localhost:3500/myaccount/myorders", {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        'authorization': `Bearer ${AccessToken}`
                    }
                });
                if (!request.ok) {
                    setError('Please Login first. Takin to Login Page');
                    navigate('/login');
                }
                const response = await request.json();
                if (response.orders.length === 0)
                    setPrint(true);
                else
                    setPrint(false);
                setOrders(response.orders);
            }
            catch (error) {
                console.log(error);
            }
        }; GetOrders();
    }, []);
    return (
        <div>
            <h1 id="order-text">My Orders</h1>
            <div id="order-container">
                <p>My Orders: </p>
                {Orders.length === 0 && print && <p>No Orders have been Placed so far</p>}
            </div>
            <div>
                {Orders.length > 0 && Orders.map((data, index) => {
                    <div key={index}>
                        <p className="bike-details" >Bike: {data.Name}</p>
                        <p className="bike-details">Date Ordered: {data.Date}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
export default SeeMyOrders