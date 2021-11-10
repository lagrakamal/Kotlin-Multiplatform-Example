(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Kotlin-Multiplatform-Example', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Kotlin-Multiplatform-Example'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Example-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotlin-Multiplatform-Example-test'.");
    }if (typeof this['Kotlin-Multiplatform-Example'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Example-test'. Its dependency 'Kotlin-Multiplatform-Example' was not found. Please, check whether 'Kotlin-Multiplatform-Example' is loaded prior to 'Kotlin-Multiplatform-Example-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Example-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'Kotlin-Multiplatform-Example-test'.");
    }root['Kotlin-Multiplatform-Example-test'] = factory(typeof this['Kotlin-Multiplatform-Example-test'] === 'undefined' ? {} : this['Kotlin-Multiplatform-Example-test'], kotlin, this['Kotlin-Multiplatform-Example'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$Kotlin_Multiplatform_Example, $module$kotlin_test) {
  'use strict';
  var CommonSample = $module$Kotlin_Multiplatform_Example.CommonSample;
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
  Kotlin.defineModule('Kotlin-Multiplatform-Example-test', _);
  return _;
}));

//# sourceMappingURL=Kotlin-Multiplatform-Example-test.js.map
