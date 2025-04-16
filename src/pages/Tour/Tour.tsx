import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAxiosInstance } from '../../axiosConfig';

import EventCard, { RobRichEvent } from './components/events/EventCard';
import PastShowsCard from './components/events/PastShowsCard';
import {
  TourPageWrapper,
  EventsGrid,
  PageTitle
} from './tour.styles';

const Tour: React.FC = () => {
  const [events, setEvents] = useState<RobRichEvent[]>([]);
  const navigate = useNavigate();

  /**
   * Fetch all upcoming events from the backend API.
   * Backend handles filtering logic (`/api/events/upcoming`)
   */
  const fetchEvents = useCallback(async () => {
    try {
      const axios = createAxiosInstance('events');
      const response = await axios.get<RobRichEvent[]>('/api/events/upcoming');
      setEvents(response.data);
    } catch (error) {
      console.error('[Tour] Failed to fetch upcoming events:', error);
    }
  }, []);

  /**
   * Navigate to the dynamic detail page for a specific event.
   * Example route: `/tour/2025-04-25-downtown-olympia-wa`
   */
  const handleNavigate = useCallback((slug: string) => {
    if (slug) navigate(`/tour/${slug}`);
  }, [navigate]);

  /**
   * Run on mount: load the initial event list.
   * `fetchEvents` is memoized to avoid dependency loop warnings.
   */
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <TourPageWrapper>
      <PageTitle>Upcoming Tour Dates</PageTitle>

      {/* Event Grid (Metallica-style card layout) */}
      <EventsGrid>
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onNavigate={handleNavigate}
          />
        ))}
      </EventsGrid>

      {/* CTA card linking to /tour/past */}
      <PastShowsCard />
    </TourPageWrapper>
  );
};

export default Tour;
