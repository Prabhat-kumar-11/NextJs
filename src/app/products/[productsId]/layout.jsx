export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav>product headbar with layout</nav>
      {children}
    </section>
  );
}
