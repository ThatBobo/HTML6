// runtime/engine.js
import { HTML6 } from "./runtime.js"
import {
  HTML6_REGISTRY,
  registerStyle,
  registerScript,
  registerMetadata,
  registerServer
} from "./registry.js"
import { validateDoctype, validateAttributes } from "./validator.js"
import { HTML6Server } from "./server.js"
import { mountBody } from "./dom.js"

export function startHTML6() {
  const errors = []
  
  // Validate DOCTYPE
  errors.push(...validateDoctype(document))
  
  const root = document.querySelector("html6") || document.documentElement
  const hd = root.querySelector("hd")
  const bdy = root.querySelector("bdy")
  
  if (!hd || !bdy) {
    console.warn("[HTML6] Missing <hd> or <bdy>")
    return
  }
  
  // Process <styl>
  hd.querySelectorAll("styl").forEach(styl => {
    errors.push(...validateAttributes(styl))
    registerStyle({
      v: styl.getAttribute("v"),
      src: styl.getAttribute("src")
    })
  })
  
  // Process <scrpt>
  hd.querySelectorAll("scrpt").forEach(scrpt => {
    errors.push(...validateAttributes(scrpt))
    registerScript({
      v: scrpt.getAttribute("v"),
      src: scrpt.getAttribute("src")
    })
  })
  
  // Process <mt>
  hd.querySelectorAll("mt").forEach(mt => {
    errors.push(...validateAttributes(mt))
    registerMetadata(
      mt.getAttribute("nm"),
      mt.getAttribute("thng") ||
      mt.getAttribute("content") ||
      mt.getAttribute("pblc")
    )
  })
  
  // Process <srv>
  hd.querySelectorAll("srv").forEach(srv => {
    errors.push(...validateAttributes(srv))
    
    const server = new HTML6Server(
      srv.getAttribute("srvd"),
      srv.getAttribute("cld"),
      srv.getAttribute("mltplyr")
    )
    
    srv.querySelectorAll("onrq").forEach(onrq => {
      errors.push(...validateAttributes(onrq))
      server.addHandler(
        onrq.getAttribute("pth"),
        onrq.textContent.trim()
      )
    })
    
    registerServer(server)
  })
  
  // Process <bdy>
  mountBody(bdy)
  
  if (errors.length > 0) {
    console.warn("[HTML6] Validation errors:", errors)
  }
  
  console.log("[HTML6] Runtime complete.")
}
