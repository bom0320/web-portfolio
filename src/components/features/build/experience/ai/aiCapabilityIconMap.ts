import {
  BrainCircuit,
  Compass,
  GitCompare,
  type LucideIcon,
} from "lucide-react";

import type { AICapabilityIcon } from "@/data/build";

export const AI_ICON_MAP: Record<AICapabilityIcon, LucideIcon> = {
  "git-compare": GitCompare,
  compass: Compass,
  "brain-circuit": BrainCircuit,
};
