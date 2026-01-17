import { Link } from "react-router-dom";
import { companyInfo, socialLinks, certifications } from "@/data/companyData";
import { socialIcons } from "@/lib/socialIcons";
import { Leaf, Mail, Phone, MapPin, Clock } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Dried Fruits", href: "/products/dried-fruits" },
    { name: "Powdered Fruits", href: "/products/powdered-fruits" },
    { name: "Vacuum Fried Fruits", href: "/products/vacuum-fried" },
    { name: "Ginger & Turmeric", href: "/products/ginger-turmeric" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Certifications", href: "/certifications" },
  ],
  resources: [
    { name: "Free Samples", href: "/samples" },
    { name: "Download Catalog", href: "/catalog" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-on-dark">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-on-dark leading-tight">{companyInfo.shortName}</p>
                <p className="text-xs text-on-dark-muted">Est. {companyInfo.established}</p>
              </div>
            </Link>
            <p className="text-on-dark-muted mb-6 max-w-sm">
              {companyInfo.tagline}. Premium dried fruits, vacuum fried snacks, and spices for global B2B buyers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-on-dark-muted hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                {companyInfo.email}
              </a>
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-on-dark-muted hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                {companyInfo.phone}
              </a>
              <div className="flex items-start gap-3 text-on-dark-muted">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>{companyInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-on-dark-muted">
                <Clock className="h-5 w-5" />
                {companyInfo.workingHours.full}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-on-dark mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-on-dark-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-on-dark mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-on-dark-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-on-dark mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-on-dark-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Social */}
        <div className="mt-12 pt-8 border-t border-on-dark-subtle/30 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Certifications */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-on-dark-subtle">Certified:</span>
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="flex items-center gap-1 text-sm text-on-dark-muted bg-on-dark/10 px-3 py-1 rounded-full"
              >
                <Leaf className="h-4 w-4" />
                {cert.name}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-on-dark-subtle">Follow us:</span>
            {Object.entries(socialLinks).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-on-dark/10 text-on-dark-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`Follow us on ${key}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-on-dark-subtle/30">
        <div className="container py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-on-dark-subtle">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-on-dark-subtle hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-on-dark-subtle hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
