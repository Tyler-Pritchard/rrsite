import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createAxiosInstance } from '../../axiosConfig';
import {
  EventPageWrapper,
  EventTitle,
  EventDate,
  EventLocation,
  EventDescription,
  ButtonRow,
  EventButton
} from './event.styles';

import { RobRichEvent } from './components/events/EventCard';

const axios = createAxiosInstance('events');

const Event: React.FC = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState<RobRichEvent | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/api/events/${slug}`);
        setEvent(res.data);
      } catch (err) {
        console.error('Error fetching event:', err);
      }
    };

    if (slug) fetchEvent();
  }, [slug]);

  if (!event) return <div>Loading...</div>;

  return (
    <EventPageWrapper>
      <EventTitle>{event.title}</EventTitle>
      <EventDate>{new Date(event.startTimeUtc).toLocaleDateString()}</EventDate>
      <EventLocation>{event.location}</EventLocation>
      <EventDescription>{event.description || 'No description available.'}</EventDescription>

      <ButtonRow>
        {event.ticketLink ? (
          <EventButton as="a" href={event.ticketLink} target="_blank" rel="noopener noreferrer">
            Buy Tickets
          </EventButton>
        ) : (
          <EventButton disabled>Sold Out</EventButton>
        )}
        <EventButton onClick={() => navigate(-1)}>Back to Tour</EventButton>
      </ButtonRow>
    </EventPageWrapper>
  );
};

export default Event;
