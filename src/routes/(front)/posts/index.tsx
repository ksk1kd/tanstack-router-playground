import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

interface Post {
  id: string
  title: string
  content: string
}

const productSearchSchema = z.object({
  page: z.number().catch(1),
})

export const Route = createFileRoute('/(front)/posts/')({
  validateSearch: (search) => productSearchSchema.parse(search),
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: ({ deps: { page } }) => fetchPosts({ page }),
  head: () => ({
    meta: [
      {
        title: 'Posts | TanStack Router Playground',
      },
    ],
  }),
})

async function fetchPosts({ page }: { page: number }) {
  const posts: Post[] = Array.from({ length: 10 }, (_, i) => ({
    id: `${i + 1}`,
    title: `Post ${i + 1}`,
    content: `Post ${i + 1} Content`,
  }))

  return {
    foo: 'bar',
    posts,
    page,
  }
}
