import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BikeDetails() {
    const { company, name } = useParams();
    const [data, setData] = useState('');
    const [bike, setBike] = useState({});

    useEffect(() => {
        const getBikeDetails = async () => {
            try {
                const request = await fetch('http://localhost:3500/bikedetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        company, name,
                    })
                });
                if (!request.ok) {
                    setData('Could not load bike details. Please try again later');
                    return;
                }
                const response = await request.json();
                setBike(response.bike);
            }
            catch (error) {
                console.log(error);
            }
        }
        getBikeDetails();
    }, [bike]);

    return (
        <div>
            bike !== { } ? {
                <div>
                    <p>Name: {bike.Name} </p>
                    <p>Company: {bike.Company}</p>
                    <p>Top Speed: {bike.Topspeed}</p>
                    <p>Horsepower: {bike.Horsepower}</p>
                    <p>Engine specs: {bike.Engine}</p>
                    <p>Price: {bike.Engine}</p>
                </div>
            } : <p>Bike Not found. please try again later</p>
        </div>
    )
}
export default BikeDetails