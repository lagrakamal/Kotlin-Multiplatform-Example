import kotlin.system.getTimeMillis

actual fun getCurrentTimeInMillis(): Long = getTimeMillis()

actual object Platform {
    actual val name: String = "Native"
}

fun main() {

    CommonSample().runFib()
}