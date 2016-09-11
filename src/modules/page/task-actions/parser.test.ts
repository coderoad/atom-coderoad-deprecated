/// <reference path="../../../typings/globals/jest/index.d.ts" />

import parseParams from './parse-params';

describe('parseBreaks', function() {

  describe('getParams', function() {
    it('should return the same string in an array if only one param', function () {
      let params = 'first';
      let parser = new parseParams();
      let breaks = parser.getParams(params);
      expect(breaks).toEqual(['first']);
    });

    it('should return params in a simple string', function() {
      let params = 'first, second, third';
      let parser = new parseParams();
      let breaks = parser.getParams(params);
      expect(breaks).toEqual(['first', 'second', 'third']);
    });

    it('should ignore breaks within an object', function() {
      let params = '{ a: 1, b: 2 }, second, third';
      let parser = new parseParams();
      let breaks = parser.getParams(params);
      expect(breaks).toEqual(['{ a: 1, b: 2 }', 'second', 'third']);
    });

    it('should ignore breaks within an array', function() {
      let params = '[ a: 1, b: 2 ], second, third';
      let parser = new parseParams();
      let breaks = parser.getParams(params);
      expect(breaks).toEqual(['[ a: 1, b: 2 ]', 'second', 'third']);
    });

    it('should ignore breaks within brackets', function() {
      let params = 'function (a, b) {}, second, third';
      let parser = new parseParams();
      let breaks = parser.getParams(params);
      expect(breaks).toEqual(['function (a, b) {}', 'second', 'third']);
    });
  });

});
