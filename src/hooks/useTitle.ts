import { useEffect, useRef } from 'react'

const useTitle = (title: string): void => {
  const documentDefined: boolean = typeof document !== 'undefined'
  const originalTitle = useRef<string | null>(
    documentDefined ? document.title : null
  )

  useEffect(() => {
    if (!documentDefined) return

    if (document.title !== title) document.title = title

    return () => {
      document.title = originalTitle.current!
    }
  }, [title, documentDefined])
}

export default useTitle
