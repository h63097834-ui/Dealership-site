import { Link } from "react-router-dom";
import "./css/HondaFrontPage.css";
import { useEffect, useState } from "react";
function HondaFrontPage() {
  const Company = "Honda";
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const FetchBikes = async () => {
      try {
        const request = await fetch("http://localhost:3500/bikes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Company,
          }),
        });
        if (!request.ok) console.log("request was not ok in honda front page");
        const response = await request.json();
        setBikes(response.Bikes);
        console.log(`Bikes ${response.Bikes[0].Name}`);
      } catch (error) {
        console.log(error);
      }
    };
    FetchBikes();
  }, []);

  return (
    <>
      <h1>Honda Motorsports</h1>
      <h1>Where design meet Perfection</h1>
      <div id="hondaimage1"></div>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veritatis. Ea temporibus totam reprehenderit suscipit
          repellendus, labore delectus ducimus adipisci tempore odit deserunt
          blanditiis aperiam maiores error modi. Atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veritatis. Ea temporibus totam reprehenderit suscipit
          repellendus, labore delectus ducimus adipisci tempore odit deserunt
          blanditiis aperiam maiores error modi. Atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veritatis. Ea temporibus totam reprehenderit suscipit
          repellendus, labore delectus ducimus adipisci tempore odit deserunt
          blanditiis aperiam maiores error modi. Atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veritatis. Ea temporibus totam reprehenderit suscipit
          repellendus, labore delectus ducimus adipisci tempore odit deserunt
          blanditiis aperiam maiores error modi. Atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veritatis. Ea temporibus totam reprehenderit suscipit
          repellendus, labore delectus ducimus adipisci tempore odit deserunt
          blanditiis aperiam maiores error modi. Atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          distinctio veritatis. Ea temporibus totam reprehenderit suscipit
          repellendus, labore delectus ducimus adipisci tempore odit deserunt
          blanditiis aperiam maiores error modi. Atque.
        </p>
      </main>

      <div id="hondaimage2"></div>

      <h1>Our Product Lineup for Honda</h1>

      {bikes.length > 0 &&
        bikes.map((data, index) => {
          return (
            <Link key={index} to={`/bikedetails/${Company}/${data.Name}`}>
              <div className="bike-card">
                <p className="bike-name">Name: {data.Name}</p>
              </div>
            </Link>
          );
        })}
    </>
  );
}
export default HondaFrontPage;
