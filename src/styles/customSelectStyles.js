export const customSelectStyle = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? 'transparent' : 'transparent',
    width: '100px',
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    border: state.isFocused ? 'none' : provided.border,
    '&:hover': {
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      border: state.isFocused ? 'none' : provided.border,
      cursor: 'pointer',
    },
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    paddingRight: '0px',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: '0px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0px',
    color: '#3A80BA',
    '&:hover': {
      color: '#3A80BA',
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    'font-weight': '400',
    'font-size': '14px',
    'line-height': '17px',
    'font-family': 'Montserrat, sans-serif',
    color: '#1A1A1A',
  }),
};
