export interface FormObjectModel {
  key: string;
  label: string;
  type: InputType;
  options?: Array<string>;
  isButton?: boolean;
  value: string;
}

type InputType = 'text' | 'radio' | 'email' | 'textarea' | 'dropdown';
