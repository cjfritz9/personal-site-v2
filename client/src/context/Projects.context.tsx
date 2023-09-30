import React, { useEffect, useState } from 'react';

import { ProjectsInterface } from '../@types/context';
import { ContextProps } from '../@types/props';
import { projectItems } from '../components/Pages/Projects/data/projectItems';
import { getFilteredProjects } from '../utils/projects';

export const ProjectsContext = React.createContext<ProjectsInterface | null>(
  null
);

export const ProjectsProvider: React.FC<ContextProps> = ({ children }) => {
  const [filteredProjects, setFilteredProjects] = useState(projectItems);
  const [filters, setFilters] = useState([
    'react',
    'svelte',
    'node',
    'express',
    'graphql',
    'postgresql',
    'firebase',
    'mongodb'
  ]);

  useEffect(() => {
    setFilteredProjects(getFilteredProjects(filters));
  }, [filters]);

  return (
    <ProjectsContext.Provider
      value={{
        filteredProjects,
        filters,
        setFilters
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
