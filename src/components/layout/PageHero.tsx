import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({ title, subtitle, children, className }: PageHeroProps) {
  return (
    <section className={cn(
      "py-16 bg-gradient-to-br from-primary to-tropical-green-light",
      className
    )}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-on-primary-muted">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
