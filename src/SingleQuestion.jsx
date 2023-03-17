import React, { useState } from "react";

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  //   function handler() {
  //     if (showInfo) {
  //       setShowInfo(false);
  //     }
  //     setShowInfo(true);
  //   }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
          {/* <i class="fa-solid fa-plus"></i> */}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
