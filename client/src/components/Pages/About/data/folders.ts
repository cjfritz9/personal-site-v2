import { bioItems, campingItems, contactItems, contributionsItems, educationItems, freelanceItems, gamingItems, interestsItems, moddingItems } from "./items";

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
    items: bioItems
  },
  {
    folderName: 'interests',
    folderColor: '#43D9AD',
    items: interestsItems
  },
  {
    folderName: 'education',
    folderColor: '#4D5BCE',
    items: educationItems
  }
]

export const hobbiesFolders = [
  {
    folderName: 'gaming',
    folderColor: '#FEA55F',
    items: gamingItems
  },
  {
    folderName: 'modding',
    folderColor: '#43D9AD',
    items: moddingItems
  },
  {
    folderName: 'camping',
    folderColor: '#4D5BCE',
    items: campingItems
  }
]