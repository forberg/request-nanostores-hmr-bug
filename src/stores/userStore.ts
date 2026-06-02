import { atom } from 'nanostores';
import { shared } from '@it-astro:request-nanostores';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Mock data for the user store
const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' },
];

// Using 'shared' to demonstrate the hot reload bug
// The store is wrapped with shared() which enables request-scoped state
export const userStore = shared('users', atom<User[]>(mockUsers));
