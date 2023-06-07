import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  return (
    <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
        {title}
      </h1>
      <h4
        className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
      >
        <PortableText value={description} />
      </h4>
    </header>
  )
}
