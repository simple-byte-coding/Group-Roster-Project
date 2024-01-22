import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export default pgTable('users', {
  id: varchar('id', { length: 255 }).primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
