import BlogList from '../components/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - WSEVOLVES',
  description: 'Stay updated with the latest insights, tutorials, and news from our team.',
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <BlogList />
    </div>
  )
}

