"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function WaveformVisualizer() {
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    // Generate random heights for bars to simulate audio activity
    const interval = setInterval(() => {
      setBars(Array.from({ length: 40 }, () => Math.random() * 100))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-primary/60 rounded-full transition-all duration-100",
            i % 2 === 0 ? "bg-primary" : "bg-primary/40",
          )}
          style={{
            height: `${bars[i] || 20}%`,
          }}
        />
      ))}
    </div>
  )
}
