import { NavLink } from "react-router-dom";
function Navbars() {
  return (
    <div className="main3">
      <div className="mcqs">
        <p>MCQs Test</p>
      </div>
      <div className="navLinks">
        <div>
          <NavLink className='home'
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "white",
              };
            }}
          >
            <p>Home</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbars;
