import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(front)/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { foo } = Route.useLoaderData()

  return (
    <>
      <h1>Posts</h1>
      <div>foo: {foo}</div>
      <ul>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
          <li key={id}>
            <Link
              to="/posts/$postId"
              params={{
                postId: id.toString(),
              }}
              className="[&.active]:font-bold"
            >
              Post {id}
            </Link>{' '}
          </li>
        ))}
      </ul>
    </>
  )
}
