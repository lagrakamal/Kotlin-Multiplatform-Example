class CommonSample {

    fun runFib() {
        println("Fibonacci Sequence")
        measureTime {
            println("result: " + FibSeqGen().fibonacci().take(30).forEach {
                println(it)
            })
        }
    }

}

private fun measureTime(measure: () -> Any) {
    val start = getCurrentTimeInMillis()
    measure.invoke()
    val end = getCurrentTimeInMillis()
    val duration = end - start
    println("Generated in $duration ms")
}

expect fun getCurrentTimeInMillis(): Long

expect object Platform {
    val name: String
}

fun platform(): String = "Hello from ${Platform.name}"

