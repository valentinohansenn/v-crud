import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-gray-100 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring focus-visible:ring-offset disabled:cursor-not-allowed disabled:opacity-50 focus-within:ring focus-within:ring-gray-950 transition duration-300 focus:rounded",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
