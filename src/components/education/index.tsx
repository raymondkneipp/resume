import { Text, View } from '@react-pdf/renderer'
import { education } from '../../data'

const Education = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 14,
          borderBottom: '1px solid #e4e4e4',
          marginBottom: 5,
        }}
      >
        Education
      </Text>

      {education.map(({ school, degree }) => (
        <>
          <Text style={{ fontWeight: 700 }}>
            {school} <Text style={{ fontWeight: 400 }}> - {degree}</Text>
          </Text>
        </>
      ))}
    </View>
  )
}

export default Education
