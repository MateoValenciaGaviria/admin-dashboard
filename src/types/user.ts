export type Status = 'active' | 'paused' | 'vacation';

export interface UserProps {
  id: number;
  name: string;
  role: string;
  team: string;
  status: Status;
  age: string;
  avatar: string;
  email: string;
}
