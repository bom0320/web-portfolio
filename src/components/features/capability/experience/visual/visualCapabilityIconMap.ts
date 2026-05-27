import { Film, Route, Sparkles, Type, type LucideIcon } from "lucide-react";

import type { VisualCapabilityIcon } from "@/data/capability/experience";

export const VISUAL_ICON_MAP: Record<VisualCapabilityIcon, LucideIcon> = {
  sparkles: Sparkles,
  type: Type,
  motion: Film,
  route: Route,
};
