import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import { captureUtmParams } from "@/lib/utm";
import { initLeadTracking } from "@/lib/trackLeadEvents";
import "./index.css";

// vite-react-ssg renders this entry both in Node (during `vite-react-ssg build`)
// and in the browser (hydration). The default export is invoked by the runtime;
// providers live inside the root route in `./routes` so they wrap both passes.
export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    if (isClient) {
      // Browser-only side effects (no-op during SSG).
      captureUtmParams();
      initLeadTracking();
    }
  },
);
