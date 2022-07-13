export interface RadioButtonProps {
  checked: boolean;
  value?: any;
  label?: string;
  name?: string;
  id?: string;
  onChange: (checked: boolean, value: any, text: any) => void;
}
