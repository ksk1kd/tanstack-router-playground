import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const productSearchSchema = z.object({
  page: z.number().catch(1),
})

export const Route = createFileRoute('/(front)/posts/')({
  validateSearch: (search) => productSearchSchema.parse(search),
  loader: fetchPosts,
})

function fetchPosts() {
  return {
    foo: 'bar',
  } 
}