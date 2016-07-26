# `is-http-url`

> Validate URLs for sane values

## Install

```sh
npm install is-http-url
```

## Usage

Does the following:

* Protocol should be one of `http:` or `https:`
* Hostname should be valid [domain name](http://github.com/emilbayes/is-domain-name) or IPv4 address (TODO: IPv6)
* Port, if given, should be an integer in the range [1, 65535]

Example usage could be to validate the `Origin` or `Referer` HTTP headers

```js
const assert = require('assert')
const isHttpUrl = require('is-http-url')

assert.ok(isHttpUrl('http://example.com/hello-world.txt'))
assert.notOk(isHttpUrl('//test'))

```

## API

### isHttpUrl(url)
#### url

Type: `String`

## Related

* [`is-domain-name`](http://github.com/emilbayes/is-domain-name)

## License

[ISC](LICENSE.md)
