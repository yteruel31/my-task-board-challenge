import { forwardRef, HTMLProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

const anchorVariants = cva(
  "inline-flex text-white items-center justify-center gap-2 whitespace-nowrap transition-colors font-medium rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-focus",
        secondary: "bg-gray-400",
        tertiary:
          "bg-transparent text-foreground border border-gray-400 hover:bg-gray-300",
      },
      size: {
        md: "h-9 px-4 py-2 text-sm",
        lg: "h-10 px-6 text-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface AnchorProps
  extends LinkProps,
    Omit<HTMLProps<HTMLAnchorElement>, "as" | "href" | "size">,
    VariantProps<typeof anchorVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    { variant, className, size, children, leftSection, rightSection, ...rest },
    ref,
  ) => (
    <Link
      {...rest}
      ref={ref}
      className={cn(anchorVariants({ variant, size, className }))}
    >
      {leftSection}
      {children}
      {rightSection}
    </Link>
  ),
);

Anchor.displayName = "Anchor";
