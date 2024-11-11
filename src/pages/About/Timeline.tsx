import React from 'react';
import { TimelineContainer } from './Timeline.styles'; // Assuming TimelineContainer is a styled component

const Timeline: React.FC = () => {
  return (
    <TimelineContainer>
      <iframe 
        src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Rbw8wpCESaQ-Dmmw4jyWc8zrbRekwBK1L2rRgbchDbI&font=Default&lang=en&start_at_end=true&initial_zoom=2&height=650' 
        width='100%' 
        height='650' 
        title="Rob Rich Band Timeline"
        allowFullScreen
      ></iframe>
    </TimelineContainer>
  );
};

export default Timeline;
