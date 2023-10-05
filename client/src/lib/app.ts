const validateColorMode = () => {
  const chakraColorKey = 'chakra-ui-color-mode';
  const colorMode = localStorage.getItem(chakraColorKey);
  if (colorMode !== 'dark') {
    localStorage.setItem(chakraColorKey, 'dark');
  }
};

export default validateColorMode;
