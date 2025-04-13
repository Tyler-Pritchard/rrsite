import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAxiosInstance } from '../../axiosConfig';
import EventCard, { RobRichEvent } from './components/events/EventCard';
import {
  TourPageWrapper,
  EventsGrid,
  PageTitle
} from './tour.styles';

const Tour: React.FC = () => {
  const [events, setEvents] = useState<RobRichEvent[]>([]);
  const navigate = useNavigate();
  const axios = createAxiosInstance('events');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events/upcoming');
        setEvents(res.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  const handleNavigate = (slug: string) => {
    navigate(`/tour/${slug}`);
  };

  return (
    <TourPageWrapper>
      <PageTitle>Upcoming Tour Dates</PageTitle>
      <EventsGrid>
        {events.map(event => (
          <EventCard key={event.id} event={event} onNavigate={handleNavigate} />
        ))}
      </EventsGrid>
    </TourPageWrapper>
  );
};

export default Tour;
