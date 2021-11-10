import kotlin.test.Test
import kotlin.test.assertTrue

class TestSampleNative {

    @Test
    fun runFibTest() {
        CommonSample().runFib()
    }

    @Test
    fun testHello() {
        assertTrue("Native" in platform())
    }
}