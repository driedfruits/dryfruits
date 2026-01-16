import { Link } from "react-router-dom";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends Omit<ButtonProps, "asChild"> {
  to?: string;
  href?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export function CTAButton({ to, href, children, ...props }: CTAButtonProps) {
  if (to) {
    return (
      <Button asChild {...props}>
        <Link to={to}>{children}</Link>
      </Button>
    );
  }
  
  if (href) {
    return (
      <Button asChild {...props}>
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
      </Button>
    );
  }

  return <Button {...props}>{children}</Button>;
}

export function PrimaryButton({ children, ...props }: CTAButtonProps) {
  return (
    <CTAButton variant="default" {...props}>
      {children}
    </CTAButton>
  );
}

export function SecondaryButton({ children, ...props }: CTAButtonProps) {
  return (
    <CTAButton variant="outline" {...props}>
      {children}
    </CTAButton>
  );
}

export function SecondaryLightButton({ children, ...props }: CTAButtonProps) {
  return (
    <CTAButton variant="outline-light" {...props}>
      {children}
    </CTAButton>
  );
}

export function AccentButton({ children, ...props }: CTAButtonProps) {
  return (
    <CTAButton variant="accent" {...props}>
      {children}
    </CTAButton>
  );
}

export function GoldButton({ children, ...props }: CTAButtonProps) {
  return (
    <CTAButton variant="gold" {...props}>
      {children}
    </CTAButton>
  );
}

export function IconButton({ children, className, ...props }: CTAButtonProps) {
  return (
    <CTAButton variant="ghost" size="icon" className={cn("p-2", className)} {...props}>
      {children}
    </CTAButton>
  );
}
