import React from 'react'
import { Metadata } from 'next'
import { getBookById } from '../../../services/bookServices'

type Props = {
  params: { id: number }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params

  const book = await getBookById(id)

  return {
    title: book?.name || 'Not Found',
    description: book?.description || 'description',
    openGraph: {
      images:
        book?.thumbnail ||
        'https://trungkien-assignment-4.vercel.app/assets/Assignment-4.png',
    },
  }
}

interface LayoutProps {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>
}
