import { JobAppData } from '../@types/responses';

export const formReducer = (state: any, action: any) => {
  if (action.type === 'COMPANY') {
    state.companyName = action.value;
  }

  if (action.type === 'DATE') {
    state.dateSubmitted = action.value;
  }

  if (action.type === 'STATUS') {
    state.status = action.value;
  }

  if (action.type === 'POSITION') {
    state.positionTitle = action.value;
  }

  if (action.type === 'LINK') {
    state.postLink = action.value;
  }

  if (action.type === 'RESET') {
    state = {
      companyName: '',
      dateSubmitted: '',
      positionTitle: '',
      postLink: '',
      isActive: true,
      status: {
        name: 'submitted',
        weight: 2
      }
    };
  }

  if (action.type === 'EDIT') {
    state = action.value;
  }

  return state;
};

export const validateForm = (data: JobAppData) => {
  const invalidFields = Object.values(data).filter((field) => field.length < 1);
  if (invalidFields.length > 0) return false;
  return true;
};
