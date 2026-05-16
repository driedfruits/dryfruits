import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { c as cn } from "../main.mjs";
import { L as Label } from "./label-DPO1kvhT.js";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-5 w-5 shrink-0 rounded-md border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-action-manipulation",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
const FormInput = React.forwardRef(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs(Label, { htmlFor: inputId, className: cn(error && "text-destructive"), children: [
        label,
        props.required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: inputId,
          className: cn(
            "flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className
          ),
          ref,
          ...props
        }
      ),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: helperText }),
      error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error })
    ] });
  }
);
FormInput.displayName = "FormInput";
const FormTextarea = React.forwardRef(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs(Label, { htmlFor: textareaId, className: cn(error && "text-destructive"), children: [
        label,
        props.required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: textareaId,
          className: cn(
            "flex min-h-[120px] w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className
          ),
          ref,
          ...props
        }
      ),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: helperText }),
      error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error })
    ] });
  }
);
FormTextarea.displayName = "FormTextarea";
const FormSelect = React.forwardRef(
  ({ className, label, error, helperText, options, placeholder, id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs(Label, { htmlFor: selectId, className: cn(error && "text-destructive"), children: [
        label,
        props.required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: selectId,
          className: cn(
            "flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className
          ),
          ref,
          ...props,
          children: [
            placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
            options.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
          ]
        }
      ),
      helperText && !error && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: helperText }),
      error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error })
    ] });
  }
);
FormSelect.displayName = "FormSelect";
const FormCheckbox = React.forwardRef(
  ({ className, label, error, id, checked, onCheckedChange, disabled, required }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 min-h-[48px] py-2", children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          id: checkboxId,
          ref,
          checked,
          onCheckedChange,
          disabled,
          className: cn(
            "mt-0.5",
            error && "border-destructive",
            className
          )
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxs(Label, { htmlFor: checkboxId, className: cn("cursor-pointer text-base", error && "text-destructive"), children: [
          label,
          required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error })
      ] })
    ] });
  }
);
FormCheckbox.displayName = "FormCheckbox";
export {
  FormInput as F,
  FormSelect as a,
  FormTextarea as b,
  FormCheckbox as c
};
