import { Text, View, Link } from '@react-pdf/renderer'
import PrefixWithIcon from '../prefix-with-icon'
import { contactMethods } from '../../data'

const Contact = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '0 10 0 10',
      }}
    >
      {contactMethods.map(({ icon, text, href }) => (
        <PrefixWithIcon icon={icon}>
          {href ? <Link src={href}>{text}</Link> : <Text>{text}</Text>}
        </PrefixWithIcon>
      ))}
    </View>
  )
}

export default Contact
