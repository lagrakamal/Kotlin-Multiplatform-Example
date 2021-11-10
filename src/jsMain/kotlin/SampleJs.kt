import kotlin.js.Date

actual fun getCurrentTimeInMillis(): Long =  Date.now().toLong()

fun main() {
    CommonSample().runFib()
}

