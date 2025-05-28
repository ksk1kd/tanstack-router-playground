import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(front)/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { foo } = Route.useLoaderData()

  return (
    <>
      <h1>Posts</h1>
      <div>foo: {foo}</div>
    </>
  )
}
