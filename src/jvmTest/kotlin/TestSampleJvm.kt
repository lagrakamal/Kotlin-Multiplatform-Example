import org.junit.Test
import kotlin.test.assertTrue

class TestSampleJvm {

    @Test
    fun runFibTest() {
        CommonSample().runFib()
    }

    @Test
    fun testHello() {
        assertTrue("JVM" in platform())
    }
}