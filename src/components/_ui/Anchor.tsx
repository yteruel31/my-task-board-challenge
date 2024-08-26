import { forwardRef, HTMLProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

const anchorVariants = cva(
  "h-9 px-4 py-2 inline-flex text-white items-center justify-center whitespace-nowrap text-sm font-medium rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-focus",
        secondary: "bg-gray-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface AnchorProps
  extends LinkProps,
    Omit<HTMLProps<HTMLAnchorElement>, "as" | "href">,
    VariantProps<typeof anchorVariants> {}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ variant, className, ...rest }, ref) => (
    <Link
      {...rest}
      ref={ref}
      className={cn(anchorVariants({ variant, className }))}
    />
  ),
);

Anchor.displayName = "Anchor";
