import {
  ArrowLeftRight,
  Boxes,
  Component,
  GitBranch,
  Palette,
  UsersRound,
  Waves,
  type LucideIcon,
} from "lucide-react";

import type { StructureCapabilityIcon } from "@/data/capability/experience";

export const STRUCTURE_CORE_ICON = Boxes;

export const STRUCTURE_ICON_MAP: Record<StructureCapabilityIcon, LucideIcon> = {
  hierarchy: GitBranch,
  components: Component,
  "users-group": UsersRound,
  "arrows-exchange": ArrowLeftRight,
  ripple: Waves,
  palette: Palette,
};
