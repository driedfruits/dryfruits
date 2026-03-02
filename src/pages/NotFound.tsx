import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { PrimaryButton } from "@/components/CTAButton";
import { SEO } from "@/components/SEO";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noIndex={true}
        prerenderStatusCode={404}
      />
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-muted p-6">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
          <p className="mb-2 text-2xl font-semibold text-foreground">Page Not Found</p>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <PrimaryButton to="/" size="lg">
            <Home className="h-5 w-5 mr-2" />
            Return to Home
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
