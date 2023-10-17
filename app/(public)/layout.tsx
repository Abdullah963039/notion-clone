export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full dark:bg-custom_dark">{children}</div>;
}
