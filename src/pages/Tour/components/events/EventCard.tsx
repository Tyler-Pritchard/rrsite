import React, { useCallback, memo } from 'react';
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
  slug: string;
  description?: string;
  startTimeUtc: string;
  endTimeUtc: string;
  location: string;
  isPrivate: boolean;
  ticketLink?: string;
}

interface EventCardProps {
  event: RobRichEvent;
  onNavigate: (slug: string) => void;
}

/**
 * Renders a summary card for an upcoming tour event.
 */
const EventCard: React.FC<EventCardProps> = ({ event, onNavigate }) => {
  const {
    slug,
    title,
    location,
    startTimeUtc,
    ticketLink
  } = event;

  const formattedDate = format(new Date(startTimeUtc), 'MMMM d, yyyy');
  const isSoldOut = !ticketLink;

  const handleNavigate = useCallback(() => {
    onNavigate(slug);
  }, [slug, onNavigate]); // ✅ No reference to full event object

  return (
    <CardWrapper>
      <InfoWrapper onClick={handleNavigate}>
        <DateText>{formattedDate}</DateText>
        <LocationText>{location}</LocationText>
        <VenueText>{title}</VenueText>
      </InfoWrapper>

      <Actions>
        {isSoldOut ? (
          <SoldOutText>Tickets Sold Out</SoldOutText>
        ) : (
          <Button as="a" href={ticketLink} target="_blank" rel="noopener noreferrer">
            Buy Tickets
          </Button>
        )}
        <Button onClick={handleNavigate}>More Info</Button>
      </Actions>
    </CardWrapper>
  );
};

export default memo(EventCard);
