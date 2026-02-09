"use client"

import { Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WaveformVisualizer } from "@/components/waveform-visualizer"

interface MicrophoneButtonProps {
  state: "idle" | "listening" | "translating" | "speaking"
  onClick: () => void
}

export function MicrophoneButton({ state, onClick }: MicrophoneButtonProps) {
  const isActive = state !== "idle"

  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Outer glow ring when active */}
        {isActive && <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />}

        {/* Waveform visualizer */}
        {state === "listening" && (
          <div className="absolute -left-24 -right-24 top-1/2 -translate-y-1/2">
            <WaveformVisualizer />
          </div>
        )}

        {/* Main button */}
        <Button
          size="icon"
          onClick={onClick}
          disabled={isActive}
          className={cn(
            "relative h-24 w-24 rounded-full transition-all duration-300",
            isActive
              ? "bg-primary text-primary-foreground pulse-glow scale-110"
              : "bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105",
          )}
        >
          <Mic className={cn("h-10 w-10 transition-transform", isActive && "scale-110")} />
        </Button>

        {/* Pulsing rings when active */}
        {isActive && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-75" />
            <div className="absolute inset-0 rounded-full border border-primary animate-pulse" />
          </>
        )}
      </div>
    </div>
  )
}
