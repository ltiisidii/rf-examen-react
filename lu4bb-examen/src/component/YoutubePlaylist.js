import React from 'react';
import PropTypes from "prop-types";

const YoutubePlaylist = ({ embedId }) => (
  <div className="video-responsive" style={{ textAlign: 'center', paddingTop: '100px'}}> 
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubePlaylist.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubePlaylist;

// Utilizar el componente en otro lugar de tu código
<YoutubePlaylist embedId="HdAiGPejrhI" />;