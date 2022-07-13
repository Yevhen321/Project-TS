import { InputProps } from '../input';

export interface Option {
  value: string;
  text: string;
}

export interface AutocompleteProps extends InputProps {
  options?: Option[];
  onClick?: () => void;
}
