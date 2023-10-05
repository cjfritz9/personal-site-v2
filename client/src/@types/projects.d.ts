export type Technologies = Array<
  | 'typescript'
  | 'c++'
  | 'react'
  | 'next'
  | 'chakraui'
  | 'tailwind'
  | 'svelte'
  | 'docker'
  | 'node'
  | 'express'
  | 'graphql'
  | 'postgresql'
  | 'firebase'
  | 'mongodb'
  | 'aws'
  | 'gcp'
>;

export interface ProjectItem {
  title: string;
  description: string;
  links: [string | null, string];
  thumbnail: string;
  technologies: Technologies;
}

export type ProjectItems = Array<ProjectItem>;
