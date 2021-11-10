class FibSeqGen {
    fun fibonacci() = sequence {
        var fib = Pair(0, 1)
        while (true) {
            yield(fib.first)
            fib = Pair(fib.second, fib.first + fib.second)
        }
    }

}