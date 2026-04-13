# HTML6 README

## runtime/

### engine.js

`engine.js` is the core of the HTML6 runtime. It validates the document, processes the `<hd>` and `<bdy>` sections, registers styles, scripts, metadata, and servers, and mounts the transformed body into the DOM. The exported `startHTML6()` function initializes the entire system.

### boot.js

`boot.js` waits for the `DOMContentLoaded` event and then calls `startHTML6()`. This ensures the DOM is fully available before the engine scans and transforms HTML6 elements.

### dom.js

`dom.js` validates every element inside `<bdy>` and transforms HTML6 shorthand tags into real HTML elements. Examples include:

- `<dv>` → `<div>`
- `<nv>` → `<nav>`
- `<bttn>` → `<button>`

Attributes are preserved, and validation errors are collected and reported.

### registry.js

`registry.js` stores all runtime‑registered data:

- `styles` from `<styl>`
- `scripts` from `<scrpt>`
- `metadata` from `<mt>`
- `servers` from `<srv>` and `<nrq>`

This central registry allows the rest of the runtime to access structured information discovered during initialization.

### runtime.js

`runtime.js` exposes the public HTML6 API:

- `HTML6.fetch(serverId, path)` retrieves a server handler defined in `<srv>`.
- `HTML6.meta(name)` returns metadata defined in `<mt>`.

This gives HTML6 pages a simple interface for interacting with registered data.

### server.js

`server.js` defines the `HTML6Server` class. Each `<srv>` block becomes a server instance with:

- an ID (`srvd`)
- cloud flag (`cld`)
- multiplayer flag (`mltplyr`)
- a set of handlers defined by nested `<nrq>` elements

Handlers are stored as raw strings and accessed through the runtime API.

### validator.js

`validator.js` enforces HTML6’s structural rules:

- A DOCTYPE must be present.
- Tag names cannot contain vowels.
- Attribute names cannot contain vowels.
- Attribute values may contain vowels.

Validation errors are collected and reported during runtime initialization.
