import Sidebar from "@/components/home/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-[600px_auto] grid-rows-[80px_auto] h-screen ">
      <Navbar />
      <Sidebar />
      <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
    </main>
  );
};

export default Layout;
