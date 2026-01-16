import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    
    return (
      <div className="space-y-2">
        <Label htmlFor={inputId} className={cn(error && "text-destructive")}>
          {label}
          {props.required && <span className="text-destructive ml-1">*</span>}
        </Label>
        <input
          id={inputId}
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
    
    return (
      <div className="space-y-2">
        <Label htmlFor={textareaId} className={cn(error && "text-destructive")}>
          {label}
          {props.required && <span className="text-destructive ml-1">*</span>}
        </Label>
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);
FormTextarea.displayName = "FormTextarea";

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, label, error, helperText, options, placeholder, id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");
    
    return (
      <div className="space-y-2">
        <Label htmlFor={selectId} className={cn(error && "text-destructive")}>
          {label}
          {props.required && <span className="text-destructive ml-1">*</span>}
        </Label>
        <select
          id={selectId}
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);
FormSelect.displayName = "FormSelect";

export interface FormCheckboxProps {
  label: string;
  error?: string;
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const FormCheckbox = React.forwardRef<HTMLButtonElement, FormCheckboxProps>(
  ({ className, label, error, id, checked, onCheckedChange, disabled, required }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, "-");
    
    return (
      <div className="flex items-start space-x-3">
        <Checkbox
          id={checkboxId}
          ref={ref}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={cn(
            "mt-0.5",
            error && "border-destructive",
            className
          )}
        />
        <div className="space-y-1">
          <Label htmlFor={checkboxId} className={cn("cursor-pointer", error && "text-destructive")}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </div>
      </div>
    );
  }
);
FormCheckbox.displayName = "FormCheckbox";

export { FormInput, FormTextarea, FormSelect, FormCheckbox };
