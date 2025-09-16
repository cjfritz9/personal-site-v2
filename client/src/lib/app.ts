const validateColorMode = () => {
  const chakraColorKey = 'chakra-ui-color-mode';
  const colorMode = localStorage.getItem(chakraColorKey);
  if (colorMode !== 'dark') {
    localStorage.setItem(chakraColorKey, 'dark');
  }
};

javascript: (() => {const blacklist = ['jinobreaker', 'impostorpk'];for (const user in blacklist) {const e = document.querySelector(`a[href="/${user}"]`);e?.parentElement?.parentElement?.parentElement?.style.setProperty('display','none','important');}})();

export default validateColorMode;
