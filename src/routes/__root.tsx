import {
  HeadContent,
  Link,
  Outlet,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <html lang="en">
        <head>
          <HeadContent />
        </head>
        <body>
          <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>{' '}
            <Link to="/posts" className="[&.active]:font-bold">
              Posts
            </Link>
          </div>
          <hr />
          <Outlet />
          <TanStackRouterDevtools />
        </body>
      </html>
    </>
  ),
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'This is TanStack Router Playground.',
      },
      {
        title: 'TanStack Router Playground',
      },
    ],
  }),
})
