import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(front)/posts/')({
  loader: fetchPosts,
})

function fetchPosts() {
  return {
    foo: 'bar',
  } 
}