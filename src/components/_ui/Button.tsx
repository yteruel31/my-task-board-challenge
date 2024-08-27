import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "h-9 px-4 py-2 inline-flex text-white items-center justify-center whitespace-nowrap text-sm font-medium rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-focus",
        secondary: "bg-gray-400",
        tertiary:
          "bg-transparent text-foreground border border-gray-400 hover:bg-gray-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...rest }, ref) => (
    <button
      {...rest}
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
    />
  ),
);

Button.displayName = "Button";
