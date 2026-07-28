import {
  AudioWaveform,
  GitBranch,
  Sparkles,
  PencilRuler,
  type LucideIcon,
} from "lucide-react";

import type { VisualCapabilityIcon } from "@/data/build";

export const VISUAL_ICON_MAP: Record<VisualCapabilityIcon, LucideIcon> = {
  sparkles: Sparkles,
  type: PencilRuler,
  motion: AudioWaveform,
  workflow: GitBranch,
};
