// src/services/stringUtils.js

/**
 * Passe toute la chaîne en majuscules.
 * @param {string} text
 * @returns {string}
 */
export function toUpperCase(text) {
  if (!text) return ''
  return text.toUpperCase()
}

/**
 * Capitalise la première lettre d'un mot et passe le reste en minuscules.
 * @param {string} text
 * @returns {string}
 */
export function capitalize(text) {
  if (!text) return ''
  const trimmed = text.trim()
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
}

/**
 * Formate un nom complet (Prénom avec initiale majuscule + NOM en majuscules).
 * @param {string} firstname
 * @param {string} lastname
 * @returns {string}
 */
export function formatFullName(firstname, lastname) {
  const cleanFirst = capitalize(firstname)
  const cleanLast = toUpperCase(lastname?.trim())

  return `${cleanFirst} ${cleanLast}`.trim()
}