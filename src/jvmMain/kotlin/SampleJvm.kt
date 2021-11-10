actual fun getCurrentTimeInMillis(): Long = System.currentTimeMillis()

actual object Platform {
    actual val name: String = "JVM"
}

fun main() {

    CommonSample().runFib()
}