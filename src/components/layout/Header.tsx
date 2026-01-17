import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton, SecondaryButton, IconButton } from "@/components/CTAButton";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "/products",
    children: [
      { name: "All Products", href: "/products" },
      { name: "Dried Fruits", href: "/products/dried-fruits" },
      { name: "Powdered Dried Fruits", href: "/products/powdered-fruits" },
      { name: "Vacuum Fried Fruits", href: "/products/vacuum-fried" },
      { name: "Ginger & Turmeric", href: "/products/ginger-turmeric" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Certifications", href: "/certifications" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDesktopDropdownOpen(!desktopDropdownOpen);
    }
    if (e.key === 'Escape') {
      setDesktopDropdownOpen(false);
    }
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
            item.children ? (
              <div 
                key={item.name} 
                className="relative group"
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <button
                  aria-expanded={desktopDropdownOpen}
                  aria-haspopup="true"
                  onKeyDown={handleDropdownKeyDown}
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} 
                    aria-hidden="true" 
                  />
                </button>
                <div 
                  className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                    desktopDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                  }`}
                >
                  <div className="bg-card rounded-xl shadow-lg border border-border p-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={() => setDesktopDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm rounded-lg transition-colors hover:bg-muted ${
                          location.pathname === child.href ? "text-primary font-medium" : "text-foreground"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            )
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
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex w-full items-center justify-between px-3 py-3 min-h-[48px] text-base font-medium text-foreground rounded-lg hover:bg-muted"
                  >
                    {item.name}
                    <ChevronDown className={`h-5 w-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {productsOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-3 min-h-[44px] text-base text-muted-foreground rounded-lg hover:bg-muted hover:text-foreground"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
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
