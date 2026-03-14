# HTML6 Specification v1.0  
Created by **Commander AbdulSamad (age 8)**

## 1. Overview

HTML6 is a new **version of HTML**, designed to:

- Separate **system setup** from **visible UI**
- Integrate **CSS Next** and **JS² v2.0**
- Define **backend servers** directly in the document
- Support **multiplayer** and **cloud** concepts via Chrono

HTML6 is **backward‑compatible in spirit** with HTML5, but introduces new tags, new attribute rules, and a stricter separation between configuration and presentation.

All examples in this spec are intended to be hosted and tested via [`rentry.co`](https://rentry.co).

---

## 2. Core Principles

- **P1 — System vs UI:**  
  `<hd>` is for configuration and systems.  
  `<bdy>` is for visible UI only.

- **P2 — Backend in the Document:**  
  `<srv>` defines backend servers (cloud/local, multiplayer).

- **P3 — Engine Integration:**  
  `<styl>` loads **CSS Next**.  
  `<scrpt>` loads **JS² v2.0**.

- **P4 — Clean Identifiers:**  
  Attribute names are **vowel‑free** where possible (e.g. `d` instead of `id`).

- **P5 — Values Are Free:**  
  Attribute **values** may contain vowels and any valid string.

---

## 3. Document Structure

### 3.1 Doctype

HTML6 documents start with:

~~~~html
<!DOCTYPE>
~~~~

No version string is required; the presence of HTML6 tags (`<hd>`, `<srv>`, etc.) identifies the document as HTML6.

### 3.2 Root Element

The root element is:

~~~~html
<html>
  <hd>…</hd>
  <bdy>…</bdy>
</html>
~~~~

- `<hd>`: system initializer (metadata, styles, scripts, servers)  
- `<bdy>`: visible UI only  

`<hd>` **must** appear before `<bdy>`.

---

## 4. Tags

### 4.1 `<hd>` — System Initializer

The `<hd>` tag replaces the traditional `<head>` in HTML6.

**Allowed children:**

- `<mt>` — metadata  
- `<styl>` — CSS Next loader  
- `<scrpt>` — JS² loader  
- `<srv>` — backend server definitions  

**Example:**

~~~~html
<hd>
  <mt nm="<title>" thng="My HTML6 Project"></mt>
  <mt nm="url" content="https://myhtml6site.html6"></mt>
  <mt nm="public or not" pblc="true"></mt>

  <styl v="next" src="style.css"></styl>
  <scrpt v="2.0" src="main.js"></scrpt>

  <srv srvd="tropical" cld="true" mltplyr="true">
    <nrq pth="/api/stts">
      {"msg": "Trpcl Islnd mltplyr ctve"}
    </nrq>
  </srv>
</hd>
~~~~

---

### 4.2 `<bdy>` — Visible UI

The `<bdy>` tag replaces `<body>`.

- Contains **only visible UI elements**.  
- **MUST NOT** contain `<srv>`, `<styl>`, `<scrpt>`, or `<mt>`.

**Example:**

~~~~html
<bdy>
  <h1>Welcome to my HTML6 + CSS Next + JS² site!</h1>
  <p>This page uses all the rules created by Commander.</p>

  <bttn s_ss="true" ss="Google">Sign in with Google</bttn>
</bdy>
~~~~

---

### 4.3 `<mt>` — Metadata

HTML6 uses `<mt>` for metadata inside `<hd>`.

**Attributes:**

- `nm` — metadata name (string)  
- `thng` — value for title‑like metadata  
- `content` — generic metadata value  
- `pblc` — `"true"` or `"false"` for public visibility flags  

**Examples:**

~~~~html
<mt nm="<title>" thng="My HTML6 Project">
<mt nm="url" content="https://myhtml6site.html6">
<mt nm="public or not" pblc="true">
~~~~

The `<mt nm="url" content="https://myhtml6site.html6">` sets the site URL of your website, no matter if you open from the preview at Spck, the browser changes the URL, if you want your site to be public on the internet, use `<mt nm="public or not" pblc="true">`.

The `<mt nm="<title>" thng="My HTML6 Project">` sets the title of the tab of your website, like the HTML5 `<title>`.

---

### 4.4 `<styl>` — CSS Next Loader

Loads a CSS Next stylesheet.

**Attributes:**

- `v` — version string (e.g. `"next"`)  
- `src` — path to the CSS file  

**Example:**

~~~~html
<styl v="next" src="style.css"></styl>
~~~~

---

### 4.5 `<scrpt>` — JS² Loader

Loads a JS² script.

**Attributes:**

- `v` — version string (e.g. `"2.0"`)  
- `src` — path to the JS file  

**Example:**

~~~~html
<scrpt v="2.0" src="main.js"></scrpt>
~~~~

---

### 4.6 `<srv>` — Server Definition

Defines a backend server used by the page.

**Placement:**

- Must be inside `<hd>`.  
- Must not appear in `<bdy>`.

**Attributes:**

- `srvd` — server identifier (string)  
- `cld` — `"true"` or `"false"` (cloud or local)  
- `mltplyr` — `"true"` if multiplayer is enabled (Chrono required)  

**Children:**

- `<nrq>` — request handler blocks  

**Example:**

~~~~html
<srv srvd="tropical" cld="true" mltplyr="true">
  <nrq pth="/api/stts">
    {"msg": "Trpcl Islnd mltplyr ctve"}
  </nrq>
</srv>
~~~~

---

### 4.7 `<nrq>` — Request Handler

Defines a simple inline response for a given path.

**Attributes:**

- `pth` — request path (string)

**Content:**

- JSON‑style inline response (treated as data, not rendered)

**Example:**

~~~~html
<nrq pth="/api/png">
  {"png": true}
</nrq>
~~~~

---

### 4.8 Custom UI Tags (e.g. `<bttn>`)

HTML6 allows custom UI tags, often vowel‑free, for semantic or stylistic purposes.

**Examples:**

~~~~html
<bttn s_ss="true" ss="Google">Sign in with Google</bttn>
~~~~

These are rendered as block/inline elements depending on CSS Next.

---

### 4.9

To add **SSO** to your website, you need to put `s_sso="true"` in a `<bttn>` like this:

~~~~html
<bttn s_ss="true">Sign in with </bttn>
~~~~

To set the **SSO** of your **SSO** button, you need `ss="(your sso)"`

**Example**

~~~html
<bttn s_ss="true" ss="Google">Sign in with </bttn>
~~~~

HTML6 makes it Sign in with + Google = Sign in with Google

**Preview**

~~~~
[Sign in with Google]
~~~~

---

## 5. Attributes

### 5.1 Vowel‑Free Attribute Names

HTML6 encourages vowel‑free attribute names for system‑level attributes:

- `d` — element identifier (replaces `id`)  
- `srvd` — server id  
- `cld` — cloud flag  
- `pth` — path  
- `pblc` — public flag  
- `src` — source path  
- `nm` — name  
- `ss` / `s_ss` — sign‑in provider flags  

### 5.2 Attribute Values

Attribute values:

- May contain vowels  
- Follow normal HTML string rules  
- Are interpreted by CSS Next, JS², or the HTML6 engine  

---

## 6. Server Rules

### 6.1 Cloud vs Local

- `cld="true"` → server is cloud‑based  
- `cld="false"` → server is local  

### 6.2 Multiplayer

- If `cld="true"` and `mltplyr="true"` → Chrono multiplayer is required.  
- If `cld="false"` → `mltplyr` **must not** be present.

**Valid:**

~~~~html
<srv srvd="tropical" cld="true" mltplyr="true">
  …
</srv>

<srv srvd="localtest" cld="false">
  …
</srv>
~~~~

**Invalid:**

~~~~html
<srv srvd="localtest" cld="false" mltplyr="true">
  …
</srv>
~~~~

---

## 7. Integration with JS² and Chrono

### 7.1 JS² Access to Servers

JS² can query `<srv>` definitions via the DOM:

~~~~js
function getSrvAttr(id, nm) {
  const srv = document.querySelector(`srv[srvd="${id}"]`)
  if (!srv) return null
  return srv.getAttribute(nm)
}
~~~~

### 7.2 Enforcing Server Rules in JS²

~~~~js
function checkHTML6ServerRules() {
  const cld = getSrvAttr("tropical", "cld")
  const mlt = getSrvAttr("tropical", "mltplyr")

  if (cld === "true" && mlt !== "true") {
    throw new Error('HTML6: cld="true" requires mltplyr="true"')
  }

  const lclCld = getSrvAttr("localtest", "cld")
  const lclMlt = getSrvAttr("localtest", "mltplyr")
  if (lclCld === "false" && lclMlt !== null) {
    throw new Error('HTML6: cld="false" cannot have mltplyr')
  }
}
~~~~

### 7.3 Chrono Activation

When a cloud server has `mltplyr="true"`, JS² is expected to activate Chrono:

~~~~js
const Chrono = {
  parse() {
    console.log("[Chrono] Multiplayer service activated")
  }
}

async function main() {
  checkHTML6ServerRules()
  Chrono.parse()
}
~~~~

---

## 8. Example HTML6 Document

~~~~html
<!DOCTYPE>
<html>
  <hd>
    <mt nm="<title>" thng="My HTML6 Project"></mt>
    <mt nm="url" content="https://myhtml6site.html6"></mt>
    <mt nm="public or not" pblc="true"></mt>

    <styl v="next" src="style.css"></styl>
    <scrpt v="2.0" src="main.js"></scrpt>

    <srv srvd="tropical" cld="true" mltplyr="true">
      <nrq pth="/api/stts">
        {"msg": "Trpcl Islnd mltplyr ctve"}
      </nrq>
    </srv>

    <srv srvd="localtest" cld="false">
      <nrq pth="/api/png">
        {"png": true}
      </nrq>
    </srv>
  </hd>

  <bdy>
    <h1>Welcome to my HTML6 + CSS Next + JS² site!</h1>
    <p>This page uses all the rules created by Commander.</p>

    <bttn s_ss="true" ss="Google">Sign in with Google</bttn>
  </bdy>
</html>
~~~~

---

## 9. Status

- HTML6 v1.0 is a **versioned extension** of HTML, not a separate language.  
- This spec is intended to be hosted and iterated on via [`rentry.co`](https://rentry.co).  
- Future versions may add:
  - More system tags  
  - More server types  
  - Deeper Chrono integration  
  - Formal error codes and validation rules

---

## 10. Link to spec

The link will be live [here](https://rentry.co/html6-spec).
