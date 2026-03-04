import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton, SecondaryButton, IconButton } from "@/components/CTAButton";
import { Menu, X, Leaf } from "lucide-react";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Certifications", href: "/certifications" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Leaf className="h-6 w-6" />
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-foreground leading-tight">DFT Indonesia</p>
            <p className="text-xs text-muted-foreground">Dried Fruits Exporter</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                isActive(item.href) ? "text-primary" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <SecondaryButton to="/samples" size="sm">
            Free Samples
          </SecondaryButton>
          <PrimaryButton to="/contact" size="sm">
            Contact
          </PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </IconButton>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-3 min-h-[48px] text-base font-medium rounded-lg hover:bg-muted ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <SecondaryButton to="/samples" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Free Samples
              </SecondaryButton>
              <PrimaryButton to="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
