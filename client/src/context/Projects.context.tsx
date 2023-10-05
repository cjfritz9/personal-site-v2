import React, { useEffect, useState } from 'react';

import { ProjectsInterface } from '../@types/context';
import { ContextProps } from '../@types/props';
import { projectItems } from '../components/Pages/Projects/data/projectItems';
import { getFilteredProjects } from '../lib/projects';
import { Technologies } from '../@types/projects';

export const ProjectsContext = React.createContext<ProjectsInterface | null>(
  null
);

export const ProjectsProvider: React.FC<ContextProps> = ({ children }) => {
  const [filteredProjects, setFilteredProjects] = useState(projectItems);
  const [filters, setFilters] = useState<Technologies>([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFilteredProjects(getFilteredProjects(filters));
      setIsUpdating(false);
    }, 200);
  }, [filters]);

  return (
    <ProjectsContext.Provider
      value={{
        filteredProjects,
        filters,
        isUpdating,
        setFilters,
        setIsUpdating
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
