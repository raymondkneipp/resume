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
        justifyContent: 'space-between',
        margin: '0 10 0 10',
      }}
    >
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        {contactMethods.slice(0, 2).map(({ icon, text, href }) => (
          <PrefixWithIcon icon={icon}>
            {href ? (
              <Link src={href} style={{ textDecoration: 'none' }}>
                {text}
              </Link>
            ) : (
              <Text>{text}</Text>
            )}
          </PrefixWithIcon>
        ))}
      </View>
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        {contactMethods.slice(2, 4).map(({ icon, text, href }) => (
          <PrefixWithIcon icon={icon}>
            {href ? (
              <Link src={href} style={{ textDecoration: 'none' }}>
                {text}
              </Link>
            ) : (
              <Text>{text}</Text>
            )}
          </PrefixWithIcon>
        ))}
      </View>
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        {contactMethods.slice(4, 6).map(({ icon, text, href }) => (
          <PrefixWithIcon icon={icon}>
            {href ? (
              <Link src={href} style={{ textDecoration: 'none' }}>
                {text}
              </Link>
            ) : (
              <Text>{text}</Text>
            )}
          </PrefixWithIcon>
        ))}
      </View>
    </View>
  )
}

export default Contact
