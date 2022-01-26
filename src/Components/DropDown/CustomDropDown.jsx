import React, { useState } from 'react';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';

// Defining options for sorting
const optionsForSort = [
  {
    label: 'Relevance',
    value: '0'
  },
  {
    label: 'Featured',
    value: '1'
  },
  {
    label: 'Low to High',
    value: '2'
  },
  {
    label: 'High to Low',
    value: '3'
  }
];
// Defining Options for page items
const optionsForPage = [
  {
    label: '25',
    value: 25
  },
  {
    label: '10',
    value: 10
  },
  {
    label: '5',
    value: 5
  }
];
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <span className='drop-down-icon'>
        <div className='arrow-down'></div>
      </span>
    </components.DropdownIndicator>
  );
};

const CustomDropDown = props => {
  const [selectSort, setSelectSort] = useState({
    label: 'Relevance',
    value: '0'
  });
  const [selectPagesize, setSelectPageSize] = useState({
    label: '25',
    value: 25
  });

  const customStyles = {
    control: (base, state) => ({
      ...base,

      height: props.height || 25,
      minHeight: props.height || 25,
      fontSize: '10px',
      marginleft: 0,
      width: props.width || 165,
      borderRadius: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? '0 0 0 0.1rem rgba(174, 194, 226, 1)' : 0,
      '&:hover': {
        borderColor: state.isFocused ? 0 : '#FFF'
      }
    }),
    placeholder: base => ({
      ...base,
      marginLeft: 0
    }),
    singleValue: base => ({
      ...base,
      color: '#666',
      fontSize: '10px'
    }),
    multiValue: base => ({
      ...base,
      fontSize: '0.8em',
      color: '#666'
    }),

    input: base => ({
      ...base,
      margin: 0,
      color: '#666',
      padding: 0
    })
  };

  return (
    <div className='select-special'>
      {props.for === 'sort' && (
        <Select
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles}
          theme={theme => ({
            ...theme,
            borderRadius: 0.5,
            colors: {
              ...theme.colors,
              text: 'orangered',
              primary25: '#ECECEC',
              primary: '#aec2e2'
            }
          })}
          value={selectSort.label}
          placeholder={`Sort By: ${selectSort.label}`}
          onChange={e => {
            setSelectSort(e)
            props.onChange(e.value)
          }}
          options={optionsForSort}
        />
      )}

      {props.for === 'page' && (
        <Select
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator
          }}
          styles={customStyles}
          theme={theme => ({
            ...theme,
            borderRadius: 0.5,
            colors: {
              ...theme.colors,
              text: 'orangered',
              primary25: '#ECECEC',
              primary: '#aec2e2'
            }
          })}
          value={selectSort.label}
          placeholder={`Showing: ${selectPagesize.label} Items`}
          onChange={e => {
            props.onChange(e.value);
            setSelectPageSize(e);
          }}
          options={optionsForPage}
        />
      )}
    </div>
  );
};

CustomDropDown.defaultProps = {
  for: 'sort'
};
CustomDropDown.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CustomDropDown;
