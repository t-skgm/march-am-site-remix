// import type {
//   LinksFunction,
//   LoaderArgs,
//   MetaFunction,
// } from "@remix-run/cloudflare";
// import { json } from "@remix-run/cloudflare";
// import {
//   Links,
//   LiveReload,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
// } from "@remix-run/react";

// import tailwindStylesheetUrl from "./styles/tailwind.css";
// import { getUser } from "./session.server";

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
// };

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "Remix Notes",
//   viewport: "width=device-width,initial-scale=1",
// });

// export async function loader({ request }: LoaderArgs) {
//   return json({
//     user: await getUser(request),
//   });
// }

// export default function App() {
//   return (
//     <html lang="en" className="h-full">
//       <head>
//         <Meta />
//         <Links />
//       </head>
//       <body className="h-full">
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         <LiveReload />
//       </body>
//     </html>
//   );
// }

import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
