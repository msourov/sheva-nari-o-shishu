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

  // items.map((item) => {
  //   submenuItems.push({
  //     key: item?.label,
  //     children: item?.sections?.data?.map((val) => val.attributes.label),
  //   });
  // });

  // console.log("submenuItems", submenuItems);

  const menu = (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{
        margin: "2em",
        display: "flex",
        justifyContent: "flex-end",
        // backgroundColor: "dark",
      }}
      items={menus}
    />
    //   {submenuItems.map((subMenuItem) => (
    //     <Menu.SubMenu key={subMenuItem.key} title={subMenuItem.key} style={{}}>
    //       {subMenuItem.children.map((item) => (
    //         <Menu.Item key={item}>{item}</Menu.Item>
    //       ))}
    //       {/* <Menu.Item key={subMenuItem.children}>
    //         {console.log("subMenuItem.children", subMenuItem.children)}
    //         {subMenuItem.children}
    //       </Menu.Item> */}
    //     </Menu.SubMenu>
    //   ))}
    // </Menu>
  );

  return <div>{menu}</div>;
}

export default Navbar;
