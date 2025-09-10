import * as React from "react";
import { cn } from "@/lib/utils";

export interface AngularCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient" | "highlight";
}

const AngularCard = React.forwardRef<HTMLDivElement, AngularCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "clip-card transition-smooth",
          {
            "bg-card text-card-foreground shadow-card": variant === "default",
            "gradient-card text-foreground shadow-card": variant === "gradient", 
            "bg-primary text-primary-foreground shadow-glow": variant === "highlight",
          },
          className
        )}
        {...props}
      />
    );
  }
);
AngularCard.displayName = "AngularCard";

export { AngularCard };