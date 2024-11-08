import React from 'react';
import { TimelineWrapper, IframeContainer } from './Timeline.styles';

const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <IframeContainer>
        <iframe 
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=123GOV6yO_5I0rvcqM-_eseb-zdVajJQUum5ZacGQApY&font=Default&lang=en&start_at_end=true&initial_zoom=2&height=650" 
          width="100%" 
          height="650" 
          allowFullScreen 
          frameBorder="0"
          title="Rob Rich Timeline"
        ></iframe>
      </IframeContainer>
    </TimelineWrapper>
  );
};

export default Timeline;
