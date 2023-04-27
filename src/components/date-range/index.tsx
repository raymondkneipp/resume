import { Text } from '@react-pdf/renderer'
import type { DateRange } from '../../types'
import { CalendarIcon } from '../icons'
import PrefixWithIcon from '../prefix-with-icon'

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const DateRange = ({ startDate, endDate }: DateRange) => {
  const start = `${months[startDate.getMonth()]} ${startDate.getFullYear()}`
  const end = endDate
    ? `${months[endDate.getMonth()]} ${endDate.getFullYear()}`
    : 'present'

  return (
    <PrefixWithIcon icon={<CalendarIcon />}>
    <Text style={{ color: '#696969'}}>
      {start} to {end}
    </Text>
    </PrefixWithIcon>
  )
}

export default DateRange
