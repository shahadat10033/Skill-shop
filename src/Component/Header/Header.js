import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light ">
        <div className="container-fluid ">
          <h3>Skill Shop</h3>

          <div className="mt-2  ">
            <img
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              src="https://img.freepik.com/free-photo/young-male-formal-outfit-sitting-outdoor-cafe-talking-phone_181624-26363.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
