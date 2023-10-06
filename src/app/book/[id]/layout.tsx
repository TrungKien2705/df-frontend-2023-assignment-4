import { Metadata } from 'next'
import { Book } from '../../../types/books'
import { getBookById } from '../../../services/bookServices'

export async function generateMetadata({ params }): Promise<Metadata> {
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

export default function layout({ children }) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>
}
