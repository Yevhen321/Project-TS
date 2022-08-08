export interface RadioButtonProps {
  checked: boolean;
  value?: any;
  label?: string;
  name?: string;
  id?: string;
  onChange: (checked: boolean, value: string, text: string | undefined) => void;
}
