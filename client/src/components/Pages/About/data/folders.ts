import { contactItems, contributionsItems, educationItems, freelanceItems } from "./items";

export const professionalInfoFolders = [
  {
    folderName: 'freelance',
    folderColor: '#FEA55F',
    items: freelanceItems
  },
  {
    folderName: 'contributions',
    folderColor: '#43D9AD',
    items: contributionsItems
  }
]

export const contactInfoFolders = [
  {
    folderName: 'contact-me',
    folderColor: '#FEA55F',
    items: contactItems
  }
]

export const personalInfoFolders = [
  {
    folderName: 'bio',
    folderColor: '#FEA55F',
    items: []
  },
  {
    folderName: 'interests',
    folderColor: '#43D9AD',
    items: []
  },
  {
    folderName: 'education',
    folderColor: '#4D5BCE',
    items: educationItems
  }
]