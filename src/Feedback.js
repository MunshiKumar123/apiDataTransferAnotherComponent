import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  // const { n } = useParams();
  const data = useLocation();
  useEffect(() => {
    let url = data?.state?.data?.url;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data.moves);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  console.log("feedback", data?.state?.data?.url);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Feedback</h2>
            <p>
              Feedback related content goes here. Feedback related content goes
              here. Feedback related content goes here. Feedback related content
              goes here. Feedback related content goes here. Feedback related
              content goes here. Feedback related content goes here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feedback;
