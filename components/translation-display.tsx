"use client"

import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TranslationDisplayProps {
  text: string
  label: string
  language: string
  isFlipped?: boolean
  onFlip?: () => void
  position: "top" | "bottom"
}

export function TranslationDisplay({
  text,
  label,
  language,
  isFlipped = false,
  onFlip,
  position,
}: TranslationDisplayProps) {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col justify-center items-center px-6 py-8 relative",
        position === "top" ? "bg-card/50" : "bg-background",
      )}
    >
      <div className={cn("w-full max-w-2xl transition-transform duration-500", isFlipped && "rotate-180")}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-primary">{language}</span>
          </div>
          {position === "top" && onFlip && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onFlip}
              className={cn(
                "h-8 w-8 text-muted-foreground hover:text-foreground transition-transform",
                isFlipped && "rotate-180",
              )}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="min-h-[120px] flex items-center justify-center">
          {text ? (
            <p className="text-2xl md:text-3xl font-light text-foreground text-center leading-relaxed">{text}</p>
          ) : (
            <p className="text-lg text-muted-foreground italic">Waiting for input...</p>
          )}
        </div>
      </div>
    </div>
  )
}
