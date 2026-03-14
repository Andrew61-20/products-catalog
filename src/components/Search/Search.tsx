import { FC } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Search: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Пошук"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '8px 12px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        width: '250px'
      }}
    />
  );
};