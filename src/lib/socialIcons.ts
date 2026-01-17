// Centralized social icons mapping
import { Linkedin, Instagram, Facebook, Youtube, type LucideIcon } from "lucide-react";

export const socialIcons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
} as const;
