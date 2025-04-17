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
    eventImageUrl?: string;
  }
  