import React from "react";

const Bookmarks = (props) => {
  const { time, bookmark } = props;

  return (
    <div>
      <div>
        <div className="my-3 border border-primary p-2 text-primary">
          <h5>
            Spent time on read :<span> {time} </span>min
          </h5>
        </div>

        <div className="bg-light">
          <h5 className="p-3">
            Bookmarked Blogs:<span> {bookmark.length} </span>
          </h5>
          <ul className="list-group">
            {bookmark.map((title) => (
              <li className="list-group-item m-2">{title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
