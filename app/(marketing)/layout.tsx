import { Navbar } from "./_components/navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="h-full dark:bg-custom_dark">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
