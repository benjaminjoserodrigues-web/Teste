import { integer, sqliteTable, text, index } from 'drizzle-orm/sqlite-core';
export const classroom = sqliteTable('classroom', { id: integer('id').primaryKey(), data: text('data').notNull(), revision: integer('revision').notNull().default(0) });
export const members = sqliteTable('members', { id: text('id').primaryKey(), name: text('name').notNull(), email: text('email').notNull(), role: text('role').notNull() });
export const completions = sqliteTable('completions', { id: text('id').primaryKey(), userId: text('user_id').notNull(), taskId: text('task_id').notNull() }, t=>[index('idx_completions_user').on(t.userId)]);
