"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface DetailedSectionProps {
  title: string
  summary: string
  details: string | React.ReactNode
  buttonText?: string
}

export function DetailedSection({ title, summary, details, buttonText = "Batafsil" }: DetailedSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-balance">{title}</h3>
        <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{summary}</p>

        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-4 hover:scale-105 transition-transform duration-200"
        >
          {buttonText}
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
        </Button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="pt-4 border-t border-border">
            {typeof details === "string" ? (
              <p className="text-muted-foreground leading-relaxed text-pretty">{details}</p>
            ) : (
              details
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
