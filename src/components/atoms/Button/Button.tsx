import { ButtonProps } from "./Button.types";

export default function Button({ todo }: ButtonProps) {
  return <button className="min-w-9 min-h-9 px-4 py-[7px] border-solid border text-center font-semibold leading-5 rounded-full border-accent-green text-accent-green">Espresso</button>;
}
