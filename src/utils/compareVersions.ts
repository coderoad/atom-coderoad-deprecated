/**
 * extracts versions intro array from a string
 * "0.1.0" -> ['0', '1', '0']
 * or returns null
 * @param  {string} v
 */
function matchVersions(v: string): string[]|null {
  return v.match(/([0-9]+)\.([0-9]+)/);
}

/**
 * checks that a version is >= b version
 * @param  {string} a
 * @param  {string} b
 * @returns boolean
 */
export function isAboveVersion(a: string, b: string): boolean {
  if (a === b) { return true; }
  const a_components = a.split('.');
  const b_components = b.split('.');
  const len = Math.min(a_components.length, b_components.length);
  for (let i = 0; i < len; i++) {
    const first = parseInt(a_components[i], 10);
    const second = parseInt(b_components[i], 10);
    if (first > second) { return true; }
    if (first < second) { return false; }
  }
  if (a_components.length > b_components.length) { return true; }
  if (a_components.length < b_components.length) { return false; }
  return true;
}