import { db } from "./db";
import { eq } from "drizzle-orm";
import { 
  projects, 
  experience, 
  skills, 
  contactMessages,
  type InsertProject,
  type InsertExperience,
  type InsertSkill,
  type InsertContactMessage,
  type Project,
  type Experience,
  type Skill,
  type ContactMessage,
} from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Experience
  getExperience(): Promise<Experience[]>;
  getExperienceById(id: number): Promise<Experience | undefined>;
  createExperience(exp: InsertExperience): Promise<Experience>;

  // Skills
  getSkills(): Promise<Skill[]>;
  getSkillById(id: number): Promise<Skill | undefined>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class Storage implements IStorage {
  // Projects
  async getProjects(): Promise<Project[]> {
    return db.select().from(projects);
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    const result = await db.select().from(projects).where(eq(projects.id, id));
    return result[0];
  }

  async createProject(project: InsertProject): Promise<Project> {
    const result = await db.insert(projects).values(project).returning();
    return result[0];
  }

  // Experience
  async getExperience(): Promise<Experience[]> {
    return db.select().from(experience);
  }

  async getExperienceById(id: number): Promise<Experience | undefined> {
    const result = await db.select().from(experience).where(eq(experience.id, id));
    return result[0];
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const result = await db.insert(experience).values(exp).returning();
    return result[0];
  }

  // Skills
  async getSkills(): Promise<Skill[]> {
    return db.select().from(skills);
  }

  async getSkillById(id: number): Promise<Skill | undefined> {
    const result = await db.select().from(skills).where(eq(skills.id, id));
    return result[0];
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const result = await db.insert(skills).values(skill).returning();
    return result[0];
  }

  // Contact Messages
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const result = await db.insert(contactMessages).values(message).returning();
    return result[0];
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return db.select().from(contactMessages);
  }
}

export const storage = new Storage();
