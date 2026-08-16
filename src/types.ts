import type { IconType } from "react-icons";

export type Profile = {
  name: string;
  title: string;
  summary: string;
  location: string;
  languages: string[];
  email: string;
  phone: string;
  birthdate: string;
};

type Link = {
  name: string;
  path: string;
  icon: IconType;
};

export type Project = {
  title: string;
  period?: string;
  description: string;
  skill_tags: string[];
  image?: string;
  links?: Link[];
};

export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  description: string;
  projects: Project[];
};

export type PersonalProjects = {
  description: string;
  projects: Project[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  description: string;
  skill_tags: string[];
};
