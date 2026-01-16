import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function GradientCard({ to, children, className }: GradientCardProps) {
  return (
    <Link 
      to={to} 
      className={cn(
        "group rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-8 text-primary-foreground transition-transform hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </Link>
  );
}
