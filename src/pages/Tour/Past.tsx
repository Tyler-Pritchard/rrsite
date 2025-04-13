import React, { useEffect, useState } from 'react';
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
  const axios = createAxiosInstance('events');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events'); // Filtering handled on backend ideally
        const pastEvents = res.data.filter((e: RobRichEvent) => new Date(e.endTimeUtc) < new Date());
        setEvents(pastEvents);
      } catch (err) {
        console.error('Error fetching past events:', err);
      }
    };

    fetchEvents();
  }, []);

  const formatDateSlug = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  };

  return (
    <PastWrapper>
      <PageTitle>Past Events</PageTitle>
      <PastEventTable>
        {events.map(event => (
          <PastEventRow
            key={event.id}
            onClick={() => navigate(`/tour/${formatDateSlug(event.startTimeUtc)}-${event.location.toLowerCase().replace(/\s|,/g, '-')}`)}
          >
            {new Date(event.startTimeUtc).toLocaleDateString()} — {event.title} ({event.location})
          </PastEventRow>
        ))}
      </PastEventTable>
    </PastWrapper>
  );
};

export default Past;
