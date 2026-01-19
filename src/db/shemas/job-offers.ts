import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const jobOffers = pgTable('job_offers', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
	company: text('company').notNull(),
	location: text('location').notNull(),
	salary: integer('salary').notNull(),
	link: text('link').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
