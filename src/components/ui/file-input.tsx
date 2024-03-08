import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FileInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type='file'
        className={
          cn( "block w-full text-sm text-muted-foreground\
          file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm\
          file:font-semibold file:bg-secondary file:text-foreground\
          hover:file:bg-foreground hover:file:text-background",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
FileInput.displayName = "FileInput"

export { FileInput }