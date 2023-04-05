import React from 'react';
import './Filter.scss';
import Select, { SingleValue } from 'react-select';
import { customSelectStyle } from '../../styles/customSelectStyles';

export type SelectOptionType = {
  value: string;
  label: string;
};

type Props = {
  filter: SelectOptionType | null,
  searchInput: string,
  onFilterChange: (newValue: SingleValue<SelectOptionType>) => void,
  onInputChange: (input: string) => void,
  onSubmit: (event: React.FormEvent) => void
};

export const Filter: React.FC<Props> = ({
  filter,
  searchInput,
  onFilterChange,
  onInputChange,
  onSubmit,
}) => {
  const options = [
    { value: 'from', label: 'Sender adress' },
    { value: 'to', label: 'Recipient\'s address' },
    { value: 'hash', label: 'Transaction ID' },
    { value: 'blockNumberString', label: 'Block number' },
  ];

  return (
    <form
      className="filter"
      onSubmit={onSubmit}
    >
      <div className="filter__input-group">
        <input
          type="text"
          value={searchInput}
          onChange={e => onInputChange(e.target.value)}
          className="filter__input"
          placeholder="Search..."
        />

        <Select
          value={filter}
          options={options}
          onChange={(v) => onFilterChange(v)}
          styles={customSelectStyle}
          isSearchable={false}
        />
      </div>

      <button
        type="submit"
        className="filter__button"
      >
      </button>
    </form>
  );
};
