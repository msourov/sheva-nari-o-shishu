import api from "../../action/api";
import { Layout, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const response = await api().get("navbarmenus?populate=*");
      console.log("response", response);
      return response?.data || [];
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMenuAsync = async () => {
      try {
        const response = await fetchMenu();
        setItems(response.data || []);
      } catch (error) {
        console.error("Error in useEffect: ", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchMenuAsync();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log("items", JSON.stringify(items, undefined, 2));

  const menus = items.map((m) => ({
    key: m.id,
    label: m.name,
    children: m.submenus.map((sm) => ({
      label: sm.name,
      key: `sm-${sm.id}`,
      link: `/${sm.link}`,
    })),
  }));

  console.log(JSON.stringify(menus, undefined, 2));

  const menuItems = menus.map((item) => {
    if (!item.children || item.children.length === 0) {
      return (
        <Menu.Item key={item.key} theme="dark">
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      );
    }

    return (
      <Menu.SubMenu key={item.key} title={item.label} theme="dark">
        {item.children.map((subMenuItem) => (
          <Menu.Item key={subMenuItem.key}>
            <Link to={subMenuItem.link}>{subMenuItem.label}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    );
  });

  return (
    <Menu
      theme="none"
      mode="horizontal"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // outline: "auto",
          margin: "none",
          padding: "0",
          height: "50px",
          width: "30%",
        }}
      >
        <Link to="/">
          <img
            src="./sheva_transparent.png"
            style={{
              // margin: "0 2em 0 0",
              // outline: "auto",
              padding: "0",
              width: "30%",
            }}
          />
        </Link>
      </div>
      <Menu.ItemGroup style={{ margin: "0", padding: "0" }}>
        {menuItems}
      </Menu.ItemGroup>
    </Menu>
  );
}

export default Navbar;
