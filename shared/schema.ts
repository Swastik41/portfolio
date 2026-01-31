import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Projects table
export const projects = pgTable("projects", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array().notNull(),
  liveUrl: varchar("live_url", { length: 255 }).notNull(),
  githubUrl: varchar("github_url", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Experience table
export const experience = pgTable("experience", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  role: varchar("role", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  duration: varchar("duration", { length: 100 }).notNull(),
  startDate: varchar("start_date", { length: 50 }).notNull(),
  endDate: varchar("end_date", { length: 50 }).notNull(),
  bullets: text("bullets").array().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Skills table
export const skills = pgTable("skills", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  category: varchar("category", { length: 100 }).notNull(),
  items: text("items").array().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Contact Messages table
export const contactMessages = pgTable("contact_messages", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Insert schemas
export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
}) as any;

export const insertExperienceSchema = createInsertSchema(experience).omit({
  id: true as const,
  createdAt: true as const,
}) as any;

export const insertSkillSchema = createInsertSchema(skills).omit({
  id: true as const,
  createdAt: true as const,
}) as any;

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true as const,
  createdAt: true as const,
}) as any;

// Types
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Experience = typeof experience.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
