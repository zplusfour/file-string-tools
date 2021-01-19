/**
 * File-Tols npm package
 */

'use strict';
const path = require('path');
class FileTools {
  /**
   * @param fileString {string}
   */
  constructor(fileString) {
    this.fileString = fileString;
  }

  ext() {
    return this.fileString.split('.').slice(0, -1).join('.');
  }

  name() {
    return path.extname(this.fileString);
  }
}

module.exports = FileTools;