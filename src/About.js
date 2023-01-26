import { useParams, useLocation, useHistory } from "react-router-dom";
const About = () => {
  const { uname } = useParams();
  const { pathname } = useLocation();
  const h = useHistory();
  console.log(uname);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>About</h2>
            <p>
              About related content goes here. About related content goes here.
              About related content goes here. About related content goes here.
              About related content goes here. About related content goes here.
              About related content goes here.
              <br />
              <br />
              <br />
              Name : {uname}
              <br />
              Path name : {pathname}
              <br />
              <br />
              <input type="button" value="Home" onClick={() => h.push("/")} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
