import React from "react";
import "./App.css"; // Importing the CSS file

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>ERP System</h1>
      </header>

      <div className="body">
        {/* Sidebar Section */}
        <aside className="sidebar">
          <ul className="navList">
            <li>Dashboard</li>
            <li>Products</li>
            <li>Sales</li>
            <li>Orders</li>
            <li>Inventory</li>
          </ul>
        </aside>

        {/* Dashboard/Main Content Section */}
        <main className="dashboard">
          <h2>Welcome to the ERP Dashboard</h2>
          <p>This is where ERP data will be displayed.</p>
        </main>
      </div>
    </div>
  );
}

export default App;
