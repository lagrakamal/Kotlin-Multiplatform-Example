(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'try', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('try'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'try-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'try-test'.");
    }if (typeof try === 'undefined') {
      throw new Error("Error loading module 'try-test'. Its dependency 'try' was not found. Please, check whether 'try' is loaded prior to 'try-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'try-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'try-test'.");
    }root['try-test'] = factory(typeof this['try-test'] === 'undefined' ? {} : this['try-test'], kotlin, try, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$try, $module$kotlin_test) {
  'use strict';
  var CommonSample = $module$try.CommonSample;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function TestSampleJs() {
  }
  TestSampleJs.prototype.runFibTest = function () {
    (new CommonSample()).runFib();
  };
  TestSampleJs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TestSampleJs',
    interfaces: []
  };
  _.TestSampleJs = TestSampleJs;
  suite('', false, function () {
    suite('TestSampleJs', false, function () {
      test('runFibTest', false, function () {
        return (new TestSampleJs()).runFibTest();
      });
    });
  });
  Kotlin.defineModule('try-test', _);
  return _;
}));

//# sourceMappingURL=try-test.js.map
