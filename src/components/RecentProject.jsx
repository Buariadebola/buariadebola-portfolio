import React, { useState } from 'react'
import thumbnail from '../assets/Images/video thumbnail.png'
import videoUrl from '../assets/Images/product page design.mp4'

const RecentProject = () => {

  const [ viewVideo, setViewVideo ] = useState(false);

  const handleVideo = () => {
    setViewVideo(! viewVideo);
  }
  return (
    <div className='recent-project'>
        <h1>My recent UI/UX design </h1>
      <div className="recent-content">
        <div className="video-container">
          <div className='thumbnail'>
            <img src={thumbnail} alt="" />
            <div className='thumbnail-cover'></div>
            <button onClick={handleVideo}>play</button>
          </div>
          {viewVideo ? (
            <div className='video-modal'>
            <iframe
          src={videoUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ objectFit: 'cover' }}
        />
        <button onClick={handleVideo}>close</button>
        </div>
          ) : null}
        </div>
        <div className="recent-description">
          <h2>Dark theme product page user interface design for a camera store website</h2>
        </div>
      </div>
    </div>
  )
}

export default RecentProject
