export interface Option {
  text: string;
  value: string | number;
}

export interface RadioGroupProps {
  options?: Option[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (a: any, b?: string) => void;
  value: string;
  label?: string;
}
