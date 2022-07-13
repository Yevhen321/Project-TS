export interface Option {
  text: string;
  value: string;
}

export interface CheckboxGroupProps {
  options?: Option[];
  onChange: (a: any, b?: string) => void;
  checked?: boolean;
  value: string;
  disabled?: boolean;
  label?: string;
}
