import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { Toaster } from "sonner";

const GreetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <main className="bg-slate-100">
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default GreetLayout;
