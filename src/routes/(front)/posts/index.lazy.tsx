import { Link, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(front)/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { foo, page } = Route.useLoaderData()

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
      <p>Page Number: {page}</p>
      <div>
        <Link
          to="."
          search={(prev) => ({ ...prev, page: (prev.page ?? 0) + 1 })}
          className="[&.active]:font-bold"
        >
          Next
        </Link>
      </div>
    </>
  )
}
