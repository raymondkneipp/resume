import { Text, View } from '@react-pdf/renderer'
import DateRange from '../date-range'
import { experiences } from '../../data'

const Experience = () => {
  const sortedExperiences = experiences.sort(
    (a, b) => b.startDate.valueOf() - a.startDate.valueOf()
  )

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
        Experience
      </Text>

      {sortedExperiences.map(
        ({ title, company, startDate, endDate, bullets }) => (
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
                {title}
                <Text style={{ fontWeight: 400, color: '#696969' }}>
                  {' '}
                  @ {company}
                </Text>
              </Text>

              <DateRange startDate={startDate} endDate={endDate} />
            </View>

            <View
              style={{
                marginLeft: 10,
              }}
            >
              {bullets.map((bullet) => (
                <Text style={{ textAlign: 'justify' }}>- {bullet}</Text>
              ))}
            </View>
          </>
        )
      )}
    </View>
  )
}

export default Experience
