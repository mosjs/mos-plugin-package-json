'use strict'
module.exports = plugin

function plugin (markdown) {
  return {
    pkg: markdown.pkg,
  }
}
