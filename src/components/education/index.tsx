import { Text, View } from '@react-pdf/renderer'
import { bootcamp, education } from '../../data'
import Bullet from '../bullet'
import DateRange from '../date-range'

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

      {bootcamp && (
        <>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontWeight: 700 }}>
              {bootcamp.title}
              <Text style={{ fontWeight: 400, color: '#696969' }}>
                {' '}
                @ {bootcamp.company}
              </Text>
            </Text>

            <DateRange
              startDate={bootcamp.startDate}
              endDate={bootcamp.endDate}
            />
          </View>

          {bootcamp.bullets.map((bullet) => (
            <Bullet text={bullet} />
          ))}
        </>
      )}

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
