import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};
@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Adonis',
      username: 'adonis',
      password: 'password123',
    },
    {
      id: 2,
      name: 'Geraldine',
      username: 'geraldine',
      password: 'password123',
    },
    {
      id: 3,
      name: 'Auric Gavin',
      username: 'auric gavin',
      password: 'password123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
