import React from 'react';
import { TimelineContainer } from './Timeline.styles';

/**
 * External timeline URL for the Rob Rich Band history.
 * Adjust parameters here to configure display settings.
 */
const TIMELINE_URL = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Rbw8wpCESaQ-Dmmw4jyWc8zrbRekwBK1L2rRgbchDbI&font=Default&lang=en&start_at_end=true&initial_zoom=2&height=650';

/**
 * Timeline Component
 * 
 * Renders an embedded timeline using Knight Lab's TimelineJS, displaying the Rob Rich Band's historical events.
 * This component is styled using TimelineContainer to ensure responsive sizing.
 * 
 * @returns {React.FC} Timeline component for embedding a historical timeline.
 */
const Timeline: React.FC = () => {
  return (
    <TimelineContainer>
      {/* Embedded iframe with essential attributes for accessibility and configuration */}
      <iframe 
        src={TIMELINE_URL}
        width="100%" 
        height="650" 
        title="Rob Rich Band Timeline"
        loading="lazy" // Defers loading for performance
        allowFullScreen
        frameBorder="0"
      >
        {/* Fallback text in case iframe fails to load */}
        Your browser does not support iframes. Please visit the timeline directly at <a href={TIMELINE_URL}>this link</a>.
      </iframe>
    </TimelineContainer>
  );
};

export default Timeline;
