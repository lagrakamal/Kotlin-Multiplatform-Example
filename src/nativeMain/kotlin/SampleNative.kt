import kotlin.system.getTimeMillis

actual fun getCurrentTimeInMillis(): Long = getTimeMillis()

fun main() {
    CommonSample().runFib()
}