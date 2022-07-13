export interface CheckboxProps {
  checked?: boolean;
  name?: string;
  value: string;
  id?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (checkboxValue: string, checked: boolean) => void;
}
