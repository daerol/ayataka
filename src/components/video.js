import React from "react"

const Video = () => {
  return (
    <div className="video-section">
      <div className="container">
        <div className="video-player">
          <video
            controls
            type="video/mp4"
            src="https://www.youtube.com/embed/V3wSQUcH7Ck"
          />
        </div>
        <div className="video-content">
          <div className="title">
            <h3>Know more about Ayataka</h3>
          </div>
          <div className="content">
            <p>
              Ayataka is typically packaged in clear plastic bottles that
              showcase the tea's vibrant green color, further highlighting its
              natural and pure image. The brand has gained popularity not only
              in Japan but also in other parts of the world, where consumers
              appreciate its focus on traditional tea values and
              health-consciousness. It's important to note that my knowledge is
              based on information available up until September 2021, so there
              might have been developments or changes related to Ayataka since
              then.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
