/**
 * Type-File-Extension npm package
 */

'use strict';

/**
 * Gets ONLY the file extension of a file.
 * @param filename {string}
 * @returns {string}
 */
function typeFileExtension(filename) {
  return filename.split('.').slice(0, -1).join('.');
}

module.exports = typeFileExtension;