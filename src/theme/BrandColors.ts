const colors = {
  Primary: {
    black: '#01080E',
    dkSlate: '#011627',
    dkGray: '#011221'
  },
  Secondary: {
    slate: '#607B96',
    teal: '#3C9D93',
    indigo: '#4D5BCE',
    white: '#FFFFFF'
  },
  Accent: {
    orange: '#FEA55F',
    emerald: '#43D9AD',
    rose: '#E99287',
    purple: '#C98BDF'
  },
  Lines: '#1E2D3D'
};

export const scrollbarStyles = {
  '&::-webkit-scrollbar': {
    width: '12px'
  },
  '&::-webkit-scrollbar-track': {
    marginTop: '-1px',
    background: '#011627',
    border: '1px solid',
    borderColor: '#1E2D3D'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#607B96'
  }
};

export default colors;
