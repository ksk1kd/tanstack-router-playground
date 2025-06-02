import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const productSearchSchema = z.object({
  page: z.number().catch(1),
})

export const Route = createFileRoute('/(front)/posts/')({
  validateSearch: (search) => productSearchSchema.parse(search),
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: ({ deps: { page } }) => fetchPosts({ page }),
})

function fetchPosts({ page }: { page: number }) {
  return {
    foo: 'bar',
    page,
  }
}
