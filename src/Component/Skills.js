import React, { useEffect, useState } from "react";

const Skills = () => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, []);
  return (
    <div className="col-md-8">
      {values.map((value) => (
        <div>
          <div className="d-flex">
            <div>
              <div style={{ width: "60px", height: "60px" }}>
                <img
                  className="img-fluid border rounded-5"
                  src="{value.authorImage}"
                  alt=""
                />
              </div>
              <div>
                <h6>{value.authorName}</h6>
                <p>{value.publishDAte}</p>
              </div>
            </div>

            <div>
              <p>
                <span>{value.readTime}</span> min read <span></span>
              </p>
            </div>
          </div>
          <h3>{value.title}</h3>
          <div>
            <button className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
