import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/companyData";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "/products",
    children: [
      { name: "All Products", href: "/products" },
      { name: "Dried Fruits", href: "/products/dried-fruits" },
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
            item.children ? (
              <div key={item.name} className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-xl shadow-lg border border-border p-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
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
          <Button variant="outline" size="sm" asChild>
            <Link to="/samples">Free Samples</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
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
                    className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-foreground rounded-lg hover:bg-muted"
                  >
                    {item.name}
                    <ChevronDown className={`h-5 w-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-muted-foreground rounded-lg hover:bg-muted hover:text-foreground"
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
                  className={`block px-3 py-2 text-base font-medium rounded-lg hover:bg-muted ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/samples" onClick={() => setMobileMenuOpen(false)}>Free Samples</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
