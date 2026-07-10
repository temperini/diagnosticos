/*
 * Production configuration. Keep this file public: never put Google keys,
 * passwords or spreadsheet IDs that should remain private here.
 *
 * The endpoint and Turnstile site key are public values. Secrets stay inside
 * the Google Apps Script project properties.
 */
window.MONYU_CAPTURE_CONFIG = Object.freeze({
  endpoint: "https://script.google.com/macros/s/AKfycbzeSbiIS0czVFmKEc_wxWnqO4pkdfwjPWIGgHmJJICYdX4c6v-vSKLHNg1v3Hll43bbpQ/exec",
  turnstileSiteKey: "0x4AAAAAADzWHxlzZ7vS34L1",
});
