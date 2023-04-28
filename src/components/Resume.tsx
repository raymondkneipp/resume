import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer'
import Experience from './experience'
import Skills from './skills'
import Contact from './contact'
import Projects from './projects'
import Education from './education'
import useTitle from '../hooks/useTitle'
import { name, title } from '../data'

Font.register({
  family: 'Jost',
  fonts: [
    { src: '/fonts/Jost-Regular.ttf' },
    { src: '/fonts/Jost-Bold.ttf', fontWeight: 700 },
  ],
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    fontSize: 10,
    padding: 30,
    fontFamily: 'Jost',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
})

const Resume = () => {
  const fileName = name
    .replaceAll(' ', '-')
    .concat('-resume-')
    .concat(title.replaceAll(' ', '-'))
    .toLowerCase()

  // Set webpage title
  useTitle(name.concat(' Resume ').concat(title))

  return (
    <Document title={fileName}>
      <Page size='A4' style={styles.page}>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 20 }}>{name}</Text>

            <Text style={{ fontSize: 15 }}>{title}</Text>
          </View>
        </View>

        <Contact />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </Page>
    </Document>
  )
}

export default Resume
