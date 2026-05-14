import { useState, useContext } from "react";
import { AuthProvider } from './AccessTokenProvider';
import { useParams } from 'react-router-dom';

function PurchaseBike() {
    const { companyName, bikeName } = useParams();
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [data, setData] = useState('');
    const { AccessToken } = useContext(AuthProvider);

    const getPassword = (event) => {
        setPassword(event.target.value);
    }
    const getCity = (event) => {
        setCity(event.target.value);
    }
    const getContactNumber = (event) => {
        setContactNumber(event.target.value);
    }

    const Submit = async (event) => {
        event.preventDefault();
        try {
            const request = await fetch('http://localhost:3500/purchasebike', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'authorization': `Bearer ${AccessToken}`
                },
                body: JSON.stringify({
                    name, company, password, city, contactNumber
                })
            });
            if (!request.ok) {
                setData('Could not place order');
                return;
            }
            const response = await request.json();
            setData(response.message);
        }
        catch (error) {
            setData('Could not place order');
            console.error(error);
        }
    }
    console.log(companyName)
    return (
        <div>
            <form onSubmit={Submit}>
                <p>Company {companyName}</p>
                <p>Bike Name {bikeName}</p>
                <label>Enter Password</label><br />
                <input type="password" required onChange={getPassword} /><br />
                <label>Enter City</label><br />
                <input type="text" required onChange={getCity} /><br />
                <label>Enter Contact Number</label><br />
                <input type="text" required onChange={getContactNumber} /><br />
                <button>Place Order</button>
            </form>
        </div>
    )
}
export default PurchaseBike