import { ProjectItem, projectItems } from "../components/Pages/Projects/data/projectItems";

export const getFilteredProjects = (filters: string[]): ProjectItem[] => {
  return projectItems.filter((proj) => {
    for (let i = 0; i < filters.length; i++) {
      if (!proj.technologies.includes(filters[i])) {
        return false;
      }
    }
    return true;
  })
}