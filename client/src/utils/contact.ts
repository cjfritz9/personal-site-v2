export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const getFormIsValid = ({ name, email, message }: ContactFormData) => {

  if (!name.length || !email.length || !message.length) {
    return {
      isValid: false,
      statusMsg: 'please fill out all fields'
    }
  }

  if (!email.includes('@') || !email.includes('.')) {
    return {
      isValid: false,
      statusMsg: 'invalid email address'
    }
  }

  if (email.length - 3 < email.lastIndexOf('.')) {
    return {
      isValid: false,
      statusMsg: 'invalid email address'
    }
  }

  return {
    isValid: true,
    statusMsg: 'success'
  }
};


export const contactFormReducer = (state: ContactFormData, action: any) => {
  if (action.type === 'NAME') {
    return {
      ...state,
      name: action.value
    }
  }

  if (action.type === 'EMAIL') {
    return {
      ...state,
      email: action.value
    }
  }

  if (action.type === 'MESSAGE') {
    return {
      ...state,
      message: action.value
    }
  }

  if (action.type === 'RESET') {
    return {
      name: '',
      email: '',
      message: ''
    }
  }

  return state;
};

export default getFormIsValid;
