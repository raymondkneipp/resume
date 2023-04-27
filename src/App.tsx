import { PDFViewer } from '@react-pdf/renderer'
import Resume from './components/Resume'
import useWindowSize from './hooks/useWindowSize'

function App() {
  const size = useWindowSize()

  return (
    <>
      <PDFViewer
        width={size.width}
        height={size.height && size.height}
        style={{ border: 'none' }}
      >
        <Resume />
      </PDFViewer>
    </>
  )
}

export default App
