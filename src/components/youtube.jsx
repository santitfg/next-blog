import React from "react";

const Youtube = ({ id, width }) => {
  return (
    <>
      {/* hay problemas de cors */}
      <div className={`aspect-video  ${width} `}>
        <div className={`video-container `}>
          <iframe
            // className="h-full"
            className="absolute"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Youtube;
