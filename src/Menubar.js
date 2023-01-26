import { Link } from "react-router-dom";
const Menubar = () => {
  const nm = "Amit kumar";
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="mt-5">
              <Link to="/">Home</Link>&nbsp;&nbsp;
              <Link to={"/about/" + nm}>About</Link>&nbsp;&nbsp;
              <Link to="/feedback">Feedback</Link>&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menubar;
