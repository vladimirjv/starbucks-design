import { ButtonProps } from './Button.types';

export default function Button({ todo }: ButtonProps) {
  return <div>Button - todo from props: {todo}</div>;
}
