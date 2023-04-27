import { Link, Text, View } from '@react-pdf/renderer'
import { cleanUrl } from '../../utils'
import { CodeIcon, LinkIcon } from '../icons'
import PrefixWithIcon from '../prefix-with-icon'
import { projects } from '../../data'

const Projects = () => {
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
        Projects
      </Text>

      {projects.map(({ title, bullets, demo, source }) => (
        <>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontWeight: 700 }}>{title}</Text>

            {source && (
              <PrefixWithIcon icon={<CodeIcon />}>
                <Link src={source}>{cleanUrl(source)}</Link>
              </PrefixWithIcon>
            )}

            <PrefixWithIcon icon={<LinkIcon />}>
              <Link src={demo}>{cleanUrl(demo)}</Link>
            </PrefixWithIcon>
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
      ))}
    </View>
  )
}

export default Projects
