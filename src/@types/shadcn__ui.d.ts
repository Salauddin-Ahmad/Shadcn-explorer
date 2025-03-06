declare module "@shadcn/ui" {
  import * as React from "react";

  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "outline" | "solid";
  }

  export const Button: React.FC<ButtonProps>;
}
