"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: any
  }
}

export default function ChatbotWindow() {
  useEffect(() => {
    // Load Tawk.to script
    var s1 = document.createElement("script")
    s1.async = true
    s1.src = "https://embed.tawk.to/677c3da0af5bfec1dbe777bc/1igul1fhg"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    document.head.appendChild(s1)

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      if (document.head.contains(s1)) {
        document.head.removeChild(s1)
      }
    }
  }, [])

  // The Tawk.to widget will be automatically inserted into the page
  // We don't need to render anything here
  return null
}

