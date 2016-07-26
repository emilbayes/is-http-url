const test = require('tape')
const isHttpUrl = require('.')

test('valid urls', function (assert) {
  [
    'http://example.com',
    'http://hello.world:8080/hello.txt',
    'https://130.198.123.256:1/hello.txt',
    'https://130.198.123.256:65535/hello.txt',
    'http://localhost'
  ].map(u => assert.ok(isHttpUrl(u), 'should be valid: ' + u))

  assert.end()
})

test('invalid urls', function (assert) {
  [
    'http',
    'https',
    'ftp',
    'ftp://hello.world',
    'https://',
    'http://',
    'https://-hello-.com.au',
    'http://.dk',
    'https:///hello.txt',
    'https:///hello.txt:8000',
    '//hello.dk:8000/hello.txt',
    '129.123:81231',
    'https://130.198.123.256:0/hello.txt',
    'https://192.168.1.1:65536/hello.txt',
    'http//hello.world:8080/hello.txt',
    'http//hello.world:8080.5/hello.txt',
    'http://some-very-very-very-very-looooooooooooooooooooooong-domain-name-thats-invalid-as-its-longer-than-256-chars.thats-also-very-very-very-nested-in-a-lot-of-subsubsubdomains.another-long-subdomain.gee-this-it-department-should-really-learn-some-ux.oh-noes-not-another-one.example.com'
  ].map(u => assert.notOk(isHttpUrl(u), 'should be invalid: ' + u))

  assert.end()
})
