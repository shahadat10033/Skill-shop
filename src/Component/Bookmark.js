import React from "react";

const Bookmark = () => {
  return (
    <div className="col-md-3">
      <div className="my-3 border border-primary p-2 text-primary">
        <h5>
          Spent time on read :<span></span>min
        </h5>
      </div>

      <div className="bg-light">
        <h5 className="p-3">
          Bookmarked Blogs:<span>{}</span>
        </h5>
        <ul className="list-group">
          <li className="list-group-item m-3">{}</li>
        </ul>
      </div>
    </div>
  );
};

export default Bookmark;
