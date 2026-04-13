// parsers/html6-parser.js
// Full HTML6 parser using DOM-based AST (for later tooling/validation use)

export function parseHTML6Source(source, options = {}) {
  const doc = parseToDocument(source, options)
  
  // HTML6 root can be <html6> or normal <html>
  const root =
    doc.querySelector("html6") ||
    doc.documentElement
  
  const result = {
    head: null,
    body: null,
    styles: [],
    scripts: [],
    servers: [],
    metadata: [],
    meta: {
      length: source.length,
      lines: source.split("\n").length,
      rootTag: root.tagName.toLowerCase()
    }
  }
  
  walkHTML6(root, result)
  return result
}

// --- DOM parsing ---

function parseToDocument(source, _options) {
  if (typeof DOMParser !== "undefined") {
    const parser = new DOMParser()
    return parser.parseFromString(source, "text/html")
  }
  
  if (typeof document !== "undefined" && document.implementation) {
    const html = document.implementation.createHTMLDocument("HTML6")
    html.documentElement.innerHTML = source
    return html
  }
  
  throw new Error("HTML6 parser: no DOM environment available")
}

// --- AST walking ---

function walkHTML6(root, out) {
  const hd = root.querySelector("hd")
  const bdy = root.querySelector("bdy")
  
  if (hd) {
    out.head = handleHead(hd, out)
  }
  
  if (bdy) {
    out.body = handleBody(bdy)
  }
}

function handleHead(hd, out) {
  const head = {
    styles: [],
    scripts: [],
    servers: [],
    metadata: []
  }
  
  // <styl>
  hd.querySelectorAll("styl").forEach(styl => {
    const node = {
      v: attr(styl, "v"),
      src: attr(styl, "src"),
      loc: nodeLocation(styl)
    }
    head.styles.push(node)
    out.styles.push(node)
  })
  
  // <scrpt>
  hd.querySelectorAll("scrpt").forEach(scrpt => {
    const node = {
      v: attr(scrpt, "v"),
      src: attr(scrpt, "src"),
      loc: nodeLocation(scrpt)
    }
    head.scripts.push(node)
    out.scripts.push(node)
  })
  
  // <mt>
  hd.querySelectorAll("mt").forEach(mt => {
    const node = {
      nm: attr(mt, "nm"),
      thng: attr(mt, "thng"),
      content: attr(mt, "content"),
      pblc: attr(mt, "pblc"),
      loc: nodeLocation(mt)
    }
    head.metadata.push(node)
    out.metadata.push(node)
  })
  
  // <srv> + <nrq>
  hd.querySelectorAll("srv").forEach(srv => {
    const server = {
      id: attr(srv, "srvd"),
      cloud: attr(srv, "cld"),
      multiplayer: attr(srv, "mltplyr"),
      handlers: [],
      loc: nodeLocation(srv)
    }
    
    srv.querySelectorAll("nrq").forEach(nrq => {
      server.handlers.push({
        path: attr(nrq, "pth"),
        raw: nrq.textContent.trim(),
        loc: nodeLocation(nrq)
      })
    })
    
    head.servers.push(server)
    out.servers.push(server)
  })
  
  return head
}

function handleBody(bdy) {
  // Later you can walk this into a full UI AST.
  return {
    innerHTML: bdy.innerHTML.trim()
  }
}

// --- Helpers ---

function attr(el, name) {
  const v = el.getAttribute(name)
  return v === null ? null : v
}

// We don’t have real locations like Acorn, but we keep a stub for future tooling.
function nodeLocation(_el) {
  return null
}
