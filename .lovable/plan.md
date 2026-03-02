

## Mobile Bottom Nav — Remove Home & Contact

Remove "Home" and "Contact" tabs from the mobile bottom navigation, keeping only **Products**, **Samples**, and **WhatsApp** — three tabs that represent the key B2B conversion actions.

### Changes

**File: `src/components/layout/MobileBottomNav.tsx`**
- Remove `Home` and `Mail` icon imports
- Update `tabs` array to only contain Products and Samples
- Clean up unused imports

Final nav will have 3 items: Products | Samples | WhatsApp

