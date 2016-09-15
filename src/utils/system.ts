/**
 * checks if system is Windows
 * @returns boolean
 */
export const isWindows = window.navigator.appVersion.indexOf('Win') > -1 || false;

export const isMac = !!navigator.platform.match(/Mac/); 
