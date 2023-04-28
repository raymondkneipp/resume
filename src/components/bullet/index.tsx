import { Text, View } from '@react-pdf/renderer'

interface Props {
  text: string
}

const Bullet = ({ text }: Props) => {
  return (
    <View
      style={{ display: 'flex', flexDirection: 'row', gap: 5, marginLeft: 5 }}
    >
      <Text style={{ fontWeight: 700 }}>•</Text>
      <Text>{text}</Text>
    </View>
  )
}

export default Bullet
