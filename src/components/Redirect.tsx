import { Navigate } from "react-router-dom";

interface RedirectProps {
  to: string;
}

/**
 * Reusable redirect component that wraps React Router's Navigate
 * with replace behavior for 301-style redirects
 */
export function Redirect({ to }: RedirectProps) {
  return <Navigate to={to} replace />;
}

export default Redirect;
