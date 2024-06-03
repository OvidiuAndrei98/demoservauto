import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { Toaster } from "sonner";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center py-[50px]">
      <main className="bg-slate-100">{children}</main>
    </div>
  );
};

export default AdminLayout;
