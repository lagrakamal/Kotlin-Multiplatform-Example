import kotlin.test.Test
import kotlin.test.assertTrue

class TestSampleJs {

    @Test
    fun runFibTest() {
        CommonSample().runFib()
    }

    @Test
    fun testHello() {
        assertTrue("JS" in platform())
    }
}