import api from "../../action/apis";
import { Layout, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";

const { Header } = Layout;

const fetchMenuItems = async () => {
  try {
    const response = await api.get(
      "top-left-menus?populate[dropdown][populate]=*"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items", error);
    throw error;
  }
};

function Navbar() {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuItemsData = await fetchMenuItems();
        setItems(menuItemsData);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };
    fetchData();
  }, []);
  const menuItems = items?.data[0].attributes.dropdown.map(
    (item) => item.label
  );
  const subMenuItems = items?.data[0].attributes.dropdown.map((item) =>
    item.sections.data.map((i) => i.attributes.label)
  );
  console.log("menu", JSON.stringify(items, undefined, 2));
  // console.log("menuitems", JSON.stringify(menuItems, undefined, 2));
  // console.log("submenuitems", JSON.stringify(subMenuItems, undefined, 2));
  // const menuItemsD = menuItems.map((item) => {
  //   <Menu.Item key={item}></Menu.Item>;
  // });
  const menu = (
    <Menu theme="light" mode="vertical">
      {menuItems}
    </Menu>
  );
  return (
    <div>
      <Menu theme="light" mode="vertical">
        {menuItems}
      </Menu>
    </div>
  );
}

export default Navbar;
