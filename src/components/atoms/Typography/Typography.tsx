import { TypographyProps } from './Typography.types';

export default function Typography({ todo }: TypographyProps) {
  return <div>Typography - todo from props: {todo}</div>;
}
