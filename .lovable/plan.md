

## Update sitemap.xml

The current sitemap references categories and products that don't exist in the codebase. Only one category (`dried-fruits`) with 10 products exists. The sitemap needs to be trimmed to match reality.

### What changes

**`public/sitemap.xml`** — Full rewrite to match actual routes:

- **Remove** all entries for non-existent categories: `powdered-fruits`, `vacuum-fried`, `ginger-turmeric` and all their child product URLs (26 URLs removed)
- **Remove** the single category entry for `dried-fruits` (products are accessed via `/products/dried-fruits`, which is valid and stays)
- **Keep** all 10 dried fruit product URLs under `/products/dried-fruits/`
- **Keep** all other page URLs (home, about, contact, samples, catalog, etc.)
- **Update** `<lastmod>` dates to `2026-03-02` (today)

### Final URL list

```text
/                                          1.0
/products                                  0.95
/products/dried-fruits                     0.9
/products/dried-fruits/dried-papaya        0.8
/products/dried-fruits/dried-pineapple     0.8
/products/dried-fruits/dried-avocado       0.8
/products/dried-fruits/dried-mango         0.8
/products/dried-fruits/dried-dragon-fruit  0.8
/products/dried-fruits/dried-snake-fruit   0.8
/products/dried-fruits/dried-breadfruit    0.8
/products/dried-fruits/dried-jackfruit     0.8
/products/dried-fruits/dried-coconut       0.8
/products/dried-fruits/dried-banana        0.8
/samples                                   0.85
/catalog                                   0.85
/private-label                             0.8
/contact                                   0.8
/about                                     0.7
/shipping                                  0.75
/sustainability                            0.65
/certifications                            0.7
/storage-guide                             0.7
/faq                                       0.65
/privacy                                   0.3
/terms                                     0.3
/llm.html                                  0.4
```

Total: 26 URLs (down from 48).

