import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAVIGATION_LINKS } from "../../constants/navigationLinks";

const AsideNav = () => {
  const { t } = useTranslation();

  const baseClasses =
    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group";

  const activeClasses = "bg-[#c5a667]/10 text-[#c5a667]";
  const inactiveClasses = "text-gray-500 hover:bg-gray-50";

  const translationKeys: Record<string, string> = {
    Dashboard: "navigation.dashboard",
    Staff: "navigation.staff",
    Departments: "navigation.departments",
    Shifts: "navigation.shifts",
    Requests: "navigation.requests",
    Analytics: "navigation.analytics",
    Integration: "navigation.integration",
    Rooms: "navigation.rooms",
  };

  return (
    <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
      {NAVIGATION_LINKS.map((nl) => (
        <NavLink
          key={nl.id}
          to={nl.path}
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          {nl.icon}
          <span className="text-sm font-medium">
            {t(translationKeys[nl.label] || nl.label)}
          </span>
        </NavLink>
      ))}
    </nav>
  );
};

export default AsideNav;
