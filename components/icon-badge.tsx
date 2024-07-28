import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";


const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-100 dark:bg-sky-900",
        success: "bg-emerald-100 dark:bg-emerald-900"
      },
      size: {
        default: "p-2",
        sm: "p-1"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

const iconVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "text-sky-700 dark:text-sky-200",
        success: "text-emerald-700 dark:text-emerald-200"
      },
      size: {
        default: "h-8 w-8",
        sm: "h-4 w-4"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
  icon: LucideIcon;
};

export const IconBadge = ({
  icon: Icon,
  variant,
  size
}: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size}))} />
    </div>
  )
}