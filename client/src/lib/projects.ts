import { ProjectItems, Technologies } from '../@types/projects';
import { projectItems } from '../components/Pages/Projects/data/projectItems';

export const getFilteredProjects = (filters: Technologies): ProjectItems => {
  return projectItems.filter((proj) => {
    for (let i = 0; i < filters.length; i++) {
      if (!proj.technologies.includes(filters[i])) {
        return false;
      }
    }
    return true;
  });
};
