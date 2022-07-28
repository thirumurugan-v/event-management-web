export interface searchEvent{
    keyword: string;
    locationId: number;
}

export interface eventFilters{
    dateId: number;
    typeId: number;
    categoryId: number;
}

export interface SearchEventRequest extends searchEvent, eventFilters  {
}