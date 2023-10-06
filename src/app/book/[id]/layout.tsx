import { Metadata } from 'next'
import React from 'react'
import { Book } from '../../../types/books'
import { getBookById } from '../../../services/bookServices'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params

  const book: Book | undefined = await getBookById(id)

  return {
    title: book?.name || 'Not Found',
    description: book?.description,
    openGraph: {
      images: book?.thumbnail,
    },
  }
}

interface LayoutProps {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>
}
