import { Text, View } from '@react-pdf/renderer'
import { skills } from '../../data'

const Skills = () => {
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
        Skills
      </Text>
      {skills.map((group) => (
        <>
          <Text style={{ fontWeight: 700 }}>
            {group.name}
            <Text style={{ fontWeight: 400 }}>
              {' - '.concat(group.skills.sort().join(', '))}
            </Text>
          </Text>
        </>
      ))}
    </View>
  )
}

export default Skills
