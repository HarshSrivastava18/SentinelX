import { NavLink } from "react-router-dom";
import navigation from "../data/navigation";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        SentinelX
      </h2>

      <nav>
        <ul className="space-y-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg p-3 transition ${
                      isActive
                        ? "bg-cyan-600 text-white"
                        : "text-gray-300 hover:bg-slate-800"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;