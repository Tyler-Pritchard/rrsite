// rrsite/src/components/events/EventCard.tsx

import React from 'react';
import { format } from 'date-fns';
import {
  CardWrapper,
  InfoWrapper,
  DateText,
  LocationText,
  VenueText,
  Actions,
  Button,
  SoldOutText
} from './eventCard.styles';

export interface RobRichEvent {
  id: number;
  title: string;
  description?: string;
  startTimeUtc: string;
  endTimeUtc: string;
  location: string;
  isPrivate: boolean;
  ticketLink?: string;
}

interface EventCardProps {
  event: RobRichEvent;
  onNavigate: (id: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onNavigate }) => {
  const date = format(new Date(event.startTimeUtc), 'MMMM d, yyyy');
  const location = event.location;
  const venue = event.title;
  const isSoldOut = !event.ticketLink;

  return (
    <CardWrapper>
      <InfoWrapper onClick={() => onNavigate(event.id)}>
        <DateText>{date}</DateText>
        <LocationText>{location}</LocationText>
        <VenueText>{venue}</VenueText>
      </InfoWrapper>
      <Actions>
        {isSoldOut ? (
          <SoldOutText>Tickets Sold Out</SoldOutText>
        ) : (
          <Button as="a" href={event.ticketLink} target="_blank" rel="noopener noreferrer">
            Buy Tickets
          </Button>
        )}
        <Button onClick={() => onNavigate(event.id)}>More Info</Button>
      </Actions>
    </CardWrapper>
  );
};

export default EventCard;
