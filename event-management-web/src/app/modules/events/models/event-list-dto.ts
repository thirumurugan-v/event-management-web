export interface EventListDto{
    events: EventDto[];
  }
  
  export interface EventDto{
    id: number;
    name: string;
    groupName: string;
    startTime: Date;
    isOnlineEvent: boolean;
    noOfPeopleGoing: number;
    thumbnailImagePath: string;
    locationName?: string;
  }
  