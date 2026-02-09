"use client"

import { useState, useEffect } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MicrophoneButton } from "@/components/microphone-button"
import { TranslationDisplay } from "@/components/translation-display"

type TranslationState = "idle" | "listening" | "translating" | "speaking"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "zh", name: "Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "hi", name: "Hindi" },
  { code: "pt", name: "Portuguese" },
  { code: "yo", name: "Yoruba" }, // Added Yoruba language option
]

export function TranslatorInterface() {
  const [state, setState] = useState<TranslationState>("idle")
  const [yourLanguage, setYourLanguage] = useState("en")
  const [strangerLanguage, setStrangerLanguage] = useState("ja")
  const [yourText, setYourText] = useState("")
  const [strangerText, setStrangerText] = useState("")
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    if (strangerText && state === "speaking" && typeof window !== "undefined") {
      const utterance = new SpeechSynthesisUtterance(strangerText)
      utterance.lang = strangerLanguage
      window.speechSynthesis.speak(utterance)
    }
  }, [strangerText, state, strangerLanguage])

  const mockTranslation = () => {
    // Simulate listening
    setState("listening")
    setYourText("")
    setStrangerText("")

    setTimeout(() => {
      // Simulate capturing speech
      setYourText("Hello! How are you doing today?")
      setState("translating")

      setTimeout(() => {
        // Simulate translation
        setStrangerText("こんにちは！今日はどうですか？")
        setState("speaking")

        setTimeout(() => {
          setState("idle")
        }, 2000)
      }, 1000)
    }, 2000)
  }

  const getStatusText = () => {
    switch (state) {
      case "listening":
        return "Listening..."
      case "translating":
        return "Translating..."
      case "speaking":
        return "Speaking..."
      default:
        return "Ready"
    }
  }

  const getStatusColor = () => {
    switch (state) {
      case "listening":
        return "text-primary"
      case "translating":
        return "text-amber-400"
      case "speaking":
        return "text-emerald-400"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${state !== "idle" ? "bg-primary animate-pulse" : "bg-muted"}`} />
          <span className={`text-sm font-medium ${getStatusColor()}`}>{getStatusText()}</span>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      {/* Language Selectors */}
      <div className="px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center justify-between gap-4 max-w-2xl mx-auto">
          <Select value={yourLanguage} onValueChange={setYourLanguage}>
            <SelectTrigger className="flex-1 bg-secondary border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name} (You)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="text-muted-foreground">↔</div>

          <Select value={strangerLanguage} onValueChange={setStrangerLanguage}>
            <SelectTrigger className="flex-1 bg-secondary border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name} (Stranger)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Split Screen Conversation View */}
      <div className="flex-1 flex flex-col">
        {/* Stranger's Text (Top Half) */}
        <TranslationDisplay
          text={strangerText}
          label="Stranger"
          language={languages.find((l) => l.code === strangerLanguage)?.name || "Japanese"}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
          position="top"
        />

        {/* Central Microphone */}
        <div className="relative z-10 -my-12">
          <MicrophoneButton state={state} onClick={mockTranslation} />
        </div>

        {/* Your Text (Bottom Half) */}
        <TranslationDisplay
          text={yourText}
          label="You"
          language={languages.find((l) => l.code === yourLanguage)?.name || "English"}
          position="bottom"
        />
      </div>
    </div>
  )
}
