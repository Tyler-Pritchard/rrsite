import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createAxiosInstance } from '../../axiosConfig';
import {
  EventPageWrapper,
  EventTitle,
  EventDate,
  EventLocation,
  EventDescription,
  ButtonRow,
  EventImage,
  EventButton
} from './event.styles';

import { RobRichEvent } from '../../types/Event';

const axios = createAxiosInstance('events');

const Event: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [event, setEvent] = useState<RobRichEvent | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Fetches event details by slug
   */
  const fetchEvent = useCallback(async () => {
    if (!slug) return;

    try {
      const response = await axios.get<RobRichEvent>(`/api/events/${slug}`);
      setEvent(response.data);
    } catch (error) {
      console.error(`[Event] Failed to load event "${slug}":`, error);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  if (loading) return <EventPageWrapper>Loading event details...</EventPageWrapper>;
  if (!event) return <EventPageWrapper>Event not found.</EventPageWrapper>;

  return (
    <EventPageWrapper>
      {event.eventImageUrl && (
        <EventImage src={event.eventImageUrl} alt={event.title} />
      )}
      <EventTitle>{event.title}</EventTitle>
      <EventDate>{new Date(event.startTimeUtc).toLocaleDateString()}</EventDate>
      <EventLocation>{event.location}</EventLocation>
      <EventDescription>
        {event.description?.trim() || 'No description available.'}
      </EventDescription>

      <ButtonRow>
        {event.ticketLink ? (
          <EventButton
            as="a"
            href={event.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
          >
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
