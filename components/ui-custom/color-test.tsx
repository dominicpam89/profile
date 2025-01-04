import { cn } from "@/lib/utils"

interface Props {
   color:
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "destructive"
      | "accent"
      | "muted"
}
export default function ColorTest({ color }: Props) {
   return (
      <div
         className={cn("rounded-xl w-full px-4 py-2", {
            "bg-primary text-primary-foreground": color == "primary",
            "bg-secondary text-secondary-foreground": color == "secondary",
            "bg-info text-info-foreground": color == "info",
            "bg-success text-success-foreground": color == "success",
            "bg-warning text-warning-foreground": color == "warning",
            "bg-destructive text-destructive-foreground":
               color == "destructive",
            "bg-accent text-accent-foreground": color == "accent",
            "bg-muted text-muted-foreground": color == "muted",
         })}
      >
         {color.slice(0, 1).toUpperCase() + color.slice(1)}
      </div>
   )
}
