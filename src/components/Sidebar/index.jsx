import "./Sidebar.css";

function Sidebar() {
  return (
     <aside className="sidebar">
      <nav className="menuSidebar">
        <ul>
          <li className="menu-item active">📁 My Templates</li>
          <li className="menu-item">🔌 API Integrations</li>
          <li className="menu-item">📄 Generate PDF</li>
          <li className="menu-item">⚙️ Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
