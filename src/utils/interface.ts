export type DataType = 'Restaurant' | 'Cafe' | 'BirthCafe';

export interface IUser {
  name: string;
  email: string;
  birthday: string;
}
export interface IGroup {
  group_name: string;
  group_members: string[];
}

export interface IPlace {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  img?: string;
  type?: string;
}

export interface IRecord {
  purpose: number;
  place: IPlace;
  group: string;
  member: string;
  temperature?: number;
}

export interface IPeoples {
  group: string;
  name: string;
}
