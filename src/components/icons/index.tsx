import { G, Path, Svg, Circle, Rect, Line } from '@react-pdf/renderer'

const ICON_SIZE = 10

export const CalendarIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <G stroke='black' strokeWidth='2' strokeLineCap='round'>
        <Rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
        <Line x1='16' x2='16' y1='2' y2='6' />
        <Line x1='8' x2='8' y1='2' y2='6' />
        <Line x1='3' x2='21' y1='10' y2='10' />
      </G>
    </Svg>
  )
}

export const CodeIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <G stroke='black' strokeWidth='2' strokeLineCap='round'>
        <Path d='m18 16 4-4-4-4' />
        <Path d='m6 8-4 4 4 4' />
        <Path d='m14.5 4-5 16' />
      </G>
    </Svg>
  )
}

export const MapPinIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <Path fill='black' d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
      <Circle cx='12' cy='10' r='3' fill='#fff' />
    </Svg>
  )
}

export const LinkIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <G stroke='black' strokeWidth='2'>
        <Path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
        <Path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
      </G>
    </Svg>
  )
}

export const MailIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <G stroke='black' strokeWidth='2' strokeLineCap='round'>
        <Rect width='20' height='16' x='2' y='4' rx='2' ry='2' />
        <Path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
      </G>
    </Svg>
  )
}

export const PhoneIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <G stroke='black' strokeWidth='2' strokeLineCap='round'>
        <Path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
      </G>
    </Svg>
  )
}

export const GitHubIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <G stroke='black' strokeWidth='2' strokeLineCap='round'>
        <Path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
        <Path d='M9 18c-4.51 2-5-2-7-2' />
      </G>
    </Svg>
  )
}

export const LinkedInIcon = () => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox='0 0 24 24'>
      <G stroke='black' strokeWidth='2' strokeLineCap='round'>
        <Path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
        <Rect width='4' height='12' x='2' y='9' />
        <Circle cx='4' cy='4' r='2' />
      </G>
    </Svg>
  )
}
