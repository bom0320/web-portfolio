import {
  AudioWaveform,
  GitBranch,
  Sparkles,
  PencilRuler,
  type LucideIcon,
} from "lucide-react";

import type { BuildVisualIcon } from "@/data/build";

export const VISUAL_ICON_MAP: Record<BuildVisualIcon, LucideIcon> = {
  sparkles: Sparkles,
  type: PencilRuler,
  motion: AudioWaveform,
  workflow: GitBranch,
};
