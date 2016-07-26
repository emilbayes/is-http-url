'use strict'
var url = require('url')
var isDomainName = require('is-domain-name')

var protocolRegex = /^https?:$/

// From http://stackoverflow.com/a/106223
var ip4Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/

module.exports = function isHttpUrl (u) {
  var uP = url.parse(u)

  var hasValidProtocol = protocolRegex.test(uP.protocol)
  var hasValidDomainName = uP.hostname == null ? false : (isDomainName(uP.hostname) || ip4Regex.test(uP.hostname))

  // If no port is found, port should just be true
  var hasValidPort = uP.port == null ? true : uP.port > 0 && uP.port < 65536

  return hasValidProtocol && hasValidDomainName && hasValidPort
}
