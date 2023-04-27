export interface Skills {
  name: string
  skills: string[]
}

export interface Experience extends DateRange {
  title: string
  company: string
  bullets: string[]
}

export interface ContactMethod {
  icon: React.ReactNode
  text: string
  href?: string
}

export interface DateRange {
  startDate: Date
  endDate?: Date
}

export interface Project {
  title: string
  demo: string
  source?: string
  bullets: string[]
}

export interface Education {
  school: string
  degree: string
}
