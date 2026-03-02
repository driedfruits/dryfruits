

## Fix: Scroll to Top on Navigation

When navigating between pages, the scroll position persists from the previous page. Need to add a `ScrollToTop` component inside the `BrowserRouter`.

### Changes

**New file: `src/components/ScrollToTop.tsx`**
- Uses `useLocation` and `useNavigationType` from React Router
- Scrolls to top on forward navigation (`PUSH`/`REPLACE`), preserves position on back/forward (`POP`)

**Edit: `src/App.tsx`**
- Import and render `<ScrollToTop />` inside `<BrowserRouter>`, before `<Routes>`

