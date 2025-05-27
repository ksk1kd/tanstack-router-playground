import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(front)/posts/$postId')({
  component: PostComponent,
})

function PostComponent() {
  const { postId } = Route.useParams()
  return <div>Post ID: {postId}</div>
}