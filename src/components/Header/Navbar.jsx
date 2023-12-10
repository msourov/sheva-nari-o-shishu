import api from "../../action/apis";
import { Layout, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";

const fetchMenuItems = async () => {
  try {
    const response = await api.get(
      "top-left-menus?populate[dropdown][populate]=*"
    );
    // console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items ", error);
    throw error;
  }
};

function Navbar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuItemsData = await fetchMenuItems();
        setItems(menuItemsData?.data[0]?.attributes?.dropdown || []);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };
    fetchData();
  }, []);

  // console.log("items", items);
  let submenuItems = [];

  items.map((item) => {
    submenuItems.push({
      key: item?.label,
      children: item?.sections?.data?.map((val) => val.attributes.label),
    });
  });

  // console.log("submenuItems", submenuItems);

  const menu = (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ margin: "2em", display: "flex", justifyContent: "flex-end" }}
    >
      {submenuItems.map((subMenuItem) => (
        <Menu.SubMenu key={subMenuItem.key} title={subMenuItem.key} style={{}}>
          {subMenuItem.children.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
          {/* <Menu.Item key={subMenuItem.children}>
            {console.log("subMenuItem.children", subMenuItem.children)}
            {subMenuItem.children}
          </Menu.Item> */}
        </Menu.SubMenu>
      ))}
    </Menu>
  );

  return <div>{menu}</div>;
}

export default Navbar;
