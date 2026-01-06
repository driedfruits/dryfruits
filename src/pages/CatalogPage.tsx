import { Layout } from "@/components/layout";
import { CatalogForm } from "@/components/forms";
import { CheckCircle, FileText, Download } from "lucide-react";

export default function CatalogPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              Download Product Catalog
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Get our complete product catalog with specifications and pricing
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Info */}
              <div>
                <FileText className="h-16 w-16 text-primary mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What's Inside the Catalog
                </h2>
                <div className="space-y-4">
                  {[
                    "Complete product range with photos",
                    "Detailed specifications for each product",
                    "FOB pricing guidelines",
                    "Packaging options and MOQs",
                    "Certification details",
                    "Company profile and factory information",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <div className="text-center mb-6">
                  <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground">Get Your Copy</h3>
                  <p className="text-sm text-muted-foreground">Enter your details to download</p>
                </div>
                <CatalogForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
