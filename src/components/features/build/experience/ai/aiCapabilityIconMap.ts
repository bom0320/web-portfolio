import {
  BrainCircuit,
  Compass,
  GitCompare,
  type LucideIcon,
} from "lucide-react";

import type { BuildAIIcon } from "@/data/build";

export const AI_ICON_MAP: Record<BuildAIIcon, LucideIcon> = {
  "git-compare": GitCompare,
  compass: Compass,
  "brain-circuit": BrainCircuit,
};
