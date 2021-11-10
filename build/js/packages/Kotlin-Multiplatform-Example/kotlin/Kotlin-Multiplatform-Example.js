(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Example'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotlin-Multiplatform-Example'.");
    }root['Kotlin-Multiplatform-Example'] = factory(typeof this['Kotlin-Multiplatform-Example'] === 'undefined' ? {} : this['Kotlin-Multiplatform-Example'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Pair = Kotlin.kotlin.Pair;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function CommonSample() {
  }
  function CommonSample$runFib$lambda() {
    var tmp$;
    tmp$ = take((new FibSeqGen()).fibonacci(), 30).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element);
    }
    println('result: ' + toString(Unit));
    return Unit;
  }
  CommonSample.prototype.runFib = function () {
    println('Fibonacci Sequence');
    measureTime(CommonSample$runFib$lambda);
  };
  CommonSample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonSample',
    interfaces: []
  };
  function measureTime(measure) {
    var start = getCurrentTimeInMillis();
    measure();
    var end = getCurrentTimeInMillis();
    var duration = end.subtract(start);
    println('Generated in ' + duration.toString() + ' ms');
  }
  function platform() {
    return 'Hello from JS';
  }
  function FibSeqGen() {
  }
  function Coroutine$FibSeqGen$fibonacci$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$fib = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$FibSeqGen$fibonacci$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FibSeqGen$fibonacci$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FibSeqGen$fibonacci$lambda.prototype.constructor = Coroutine$FibSeqGen$fibonacci$lambda;
  Coroutine$FibSeqGen$fibonacci$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fib = new Pair(0, 1);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$fib.first, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$fib = new Pair(this.local$fib.second, this.local$fib.first + this.local$fib.second | 0);
            this.state_0 = 2;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function FibSeqGen$fibonacci$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$FibSeqGen$fibonacci$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  FibSeqGen.prototype.fibonacci = function () {
    return sequence(FibSeqGen$fibonacci$lambda);
  };
  FibSeqGen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FibSeqGen',
    interfaces: []
  };
  function getCurrentTimeInMillis() {
    return Kotlin.Long.fromNumber(Date.now());
  }
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }return Platform_instance;
  }
  function main() {
    (new CommonSample()).runFib();
  }
  _.CommonSample = CommonSample;
  _.platform = platform;
  _.FibSeqGen = FibSeqGen;
  _.getCurrentTimeInMillis = getCurrentTimeInMillis;
  Object.defineProperty(_, 'Platform', {
    get: Platform_getInstance
  });
  _.main = main;
  main();
  Kotlin.defineModule('Kotlin-Multiplatform-Example', _);
  return _;
}));

//# sourceMappingURL=Kotlin-Multiplatform-Example.js.map
