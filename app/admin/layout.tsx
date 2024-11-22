/* @note this Dashboardlayout is the main layout for the dashboard routes
 *  and should not contain any ui styling ,best use for global state management,global context providers, within dashboard routes
 * it wraps other layout,pages components within dashboard routes
 */

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
