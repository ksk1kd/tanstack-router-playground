import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/(front)/posts/$postId')({
  loader: ({ params }) => fetchPost(params.postId),
  component: PostComponent,
})

async function fetchPost(postId: string) {
  if (Number(postId) > 10) {
    throw notFound()
  }
}

function PostComponent() {
  const { postId } = Route.useParams()
  return <div>Post ID: {postId}</div>
}
