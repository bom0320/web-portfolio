import {
  AudioWaveform,
  GitBranch,
  PencilRuler,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import type { BuildVisualIcon } from "@/data/build";

export const BUILD_VISUAL_ICON_MAP: Record<BuildVisualIcon, LucideIcon> = {
  sparkles: Sparkles,
  type: PencilRuler,
  motion: AudioWaveform,
  workflow: GitBranch,
};
