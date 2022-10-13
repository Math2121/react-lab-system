import * as CheckboxPrimnitive from "@radix-ui/react-checkbox";
import {Check} from 'phosphor-react'
export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <>
      <CheckboxPrimnitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
        <CheckboxPrimnitive.Indicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimnitive.Indicator>
      </CheckboxPrimnitive.Root>
    </>
  );
}
