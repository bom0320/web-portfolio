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

import type { BuildStructureIcon } from "@/data/build";

export const BUILD_STRUCTURE_CORE_ICON = Boxes;

export const BUILD_STRUCTURE_ICON_MAP: Record<BuildStructureIcon, LucideIcon> =
  {
    hierarchy: GitBranch,
    components: Component,
    "users-group": UsersRound,
    "arrows-exchange": ArrowLeftRight,
    ripple: Waves,
    palette: Palette,
  };
