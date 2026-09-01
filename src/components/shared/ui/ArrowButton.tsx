import { ArrowLeft, ArrowRight } from "lucide-react";

type ArrowButtonSize = "small" | "medium";

interface ArrowButtonProps {
  direction: "left" | "right";
  size?: ArrowButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  className?: string;
}

export default function ArrowButton({
  direction,
  size = "medium",
  onClick,
  disabled = false,
  ariaLabel,
  className = "",
}: ArrowButtonProps) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;

  const iconSize = size === "small" ? 18 : 24;

  return (
    <button
      type="button"
      className={["arrow-button", `arrow-button--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <Icon size={iconSize} strokeWidth={1.5} />
    </button>
  );
}
