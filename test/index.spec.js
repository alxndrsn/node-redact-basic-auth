const assert = require('chai').assert;

const redact = require('../src/index');

const UNCHANGING = [
  'http://example.com',
];

const REDACTABLE = {
  'http://username:password@example.com': 'http://username:****@example.com',
};

describe('redact', () => {

  UNCHANGING.forEach(url => {
    it(`Should not change ${url}`, () => {

      // expect
      assert.equal(url, redact(url));

    });
  });

  for(const url in REDACTABLE) {
    it(`Should redact ${url}`, () => {

      // given
      const expected = REDACTABLE[url];
  
      // expect
      assert.equal(expected, redact(url));

    });
  }

});
