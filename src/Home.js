import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Home</h2>
            <p>
              Home related content goes here. Home related content goes here.
              Home related content goes here. Home related content goes here.
              Home related content goes here. Home related content goes here.
              Home related content goes here.
            </p>
            {data?.map((item, index) => {
              return (
                <div key={index} className="stu1">
                  <Link
                    to={{
                      pathname: "/feedback",
                      state: { data: item },
                    }}
                  >
                    {" "}
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
