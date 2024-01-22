import { nanoid } from 'nanoid';
import argon2 from 'argon2';
import db from '../utils/db.js';
import users from '../utils/schema.js';

export default class UserService {
  static async insertUser({ name, email, password }) {
    const userPayload = {
      id: nanoid(),
      name,
      email,
      password,
    };
    return db.insert(users).values(userPayload).returning();
  }

  static async hashPassword(password) {
    return argon2.hash(password);
  }

  static async verifyPassword(password, hash) {
    return argon2.verify(hash, password);
  }
}
