import { View } from '@react-pdf/renderer'

interface Props {
  children: React.ReactNode
  icon: React.ReactNode
}

const PrefixWithIcon = ({ children, icon }: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      }}
    >
      {icon}
      {children}
    </View>
  )
}

export default PrefixWithIcon
