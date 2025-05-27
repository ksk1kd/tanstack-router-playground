import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(front)/posts/')({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return <div>Please select a post!</div>
}