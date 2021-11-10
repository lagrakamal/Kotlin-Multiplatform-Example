import kotlin.js.Date

actual fun getCurrentTimeInMillis(): Long = Date.now().toLong()

actual object Platform {
    actual val name: String = "JS"
}

fun main() {
    CommonSample().runFib()
}

