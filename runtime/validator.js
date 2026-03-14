// runtime/validator.js

// DOCTYPE: vowels allowed
export function validateDoctype(doc) {
  const dt = doc.doctype
  if (!dt) return ["Missing <!DOCTYPE>"]
  return []
}

// Tag names: vowels NOT allowed
export function validateTagName(el) {
  const name = el.tagName.toLowerCase()
  if (/[aeiou]/.test(name)) {
    return [`Tag <${name}> contains vowels (HTML6 forbids vowels in tag names)`]
  }
  return []
}

// Attribute names: vowels NOT allowed
// Attribute values: vowels allowed (inside quotes)
export function validateAttributes(el) {
  const errors = []
  for (const attr of el.attributes) {
    if (/[aeiou]/.test(attr.name)) {
      errors.push(`Attribute name "${attr.name}" contains vowels`)
    }
  }
  return errors
}
