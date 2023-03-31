import React from "react";
import { useEffect, useState } from "react";
import Bookmarks from "./Bookmarks";

const Skills = () => {
  const [values, setValues] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, []);

  const readTime = (time) => {
    const readableTime = totalTime + time;
    setTotalTime(readableTime);
  };

  const addBookmark = (title) => {
    let newBookmarkArray = [...bookmark, title];
    setBookmark(newBookmarkArray);
  };

  return (
    <div className="row">
      <div className="col-md-9">
        {values.map((value) => (
          <div className="border border-black my-3">
            <div className="mb-3">
              <img className="img-fluid" src={value.coverImage} alt=""></img>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div className="d-flex justify-content-between my-3">
                <div style={{ width: "60px", height: "60px" }} className="me-3">
                  <img
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                    src={value.authorImage}
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
                  <span>{value.readTime}</span> min read
                  <button
                    className="border border-0"
                    onClick={() => addBookmark(value.title)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      class="bi bi-bookmark"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                  </button>
                </p>
              </div>
            </div>
            <h3>{value.title}</h3>
            <div className="my-5">
              <button
                className="btn btn-primary"
                onClick={() => readTime(value.readTime)}
              >
                Mark as read
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="col-md-3">
        <Bookmarks time={totalTime} bookmark={bookmark}></Bookmarks>
      </div>
    </div>
  );
};

export default Skills;
