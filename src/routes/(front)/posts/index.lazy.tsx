import { Link, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(front)/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { foo, posts, page } = Route.useLoaderData()

  return (
    <>
      <h1>Posts</h1>
      <div>foo: {foo}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to="/posts/$postId"
              params={{
                postId: post.id,
              }}
              className="[&.active]:font-bold"
            >
              Post {post.id}
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
