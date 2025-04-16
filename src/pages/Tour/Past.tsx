import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAxiosInstance } from '../../axiosConfig';

import { RobRichEvent } from './components/events/EventCard';
import {
  PastWrapper,
  PageTitle,
  PastEventTable,
  PastEventRow
} from './past.styles';

const Past: React.FC = () => {
  const [events, setEvents] = useState<RobRichEvent[]>([]);
  const navigate = useNavigate();

  /**
   * Fetch all events, then filter to those whose end time is in the past.
   * Backend *should ideally* serve `/api/events/past`, but fallback logic is included here.
   */
  const fetchPastEvents = useCallback(async () => {
    try {
      const axios = createAxiosInstance('events');
      const response = await axios.get<RobRichEvent[]>('/api/events');

      const now = new Date();
      const filtered = response.data.filter(event =>
        new Date(event.endTimeUtc) < now
      );

      setEvents(filtered);
    } catch (error) {
      console.error('[Past] Failed to fetch events:', error);
    }
  }, []);

  /**
   * Navigates to the event detail route using its `slug`
   */
  const handleNavigate = useCallback((slug: string) => {
    if (slug) navigate(`/tour/${slug}`);
  }, [navigate]);

  /**
   * Run once on component mount
   */
  useEffect(() => {
    fetchPastEvents();
  }, [fetchPastEvents]);

  return (
    <PastWrapper>
      <PageTitle>Past Events</PageTitle>

      {/* Simple list-style event table, suitable for archives */}
      <PastEventTable>
        {events.map((event) => (
          <PastEventRow key={event.id} onClick={() => handleNavigate(event.slug)}>
            {new Date(event.startTimeUtc).toLocaleDateString()} — {event.title} ({event.location})
          </PastEventRow>
        ))}
      </PastEventTable>
    </PastWrapper>
  );
};

export default Past;
