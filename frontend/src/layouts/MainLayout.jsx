import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 bg-slate-950 min-h-screen text-white">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;