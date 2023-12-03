import api from "../../action/apis";
import { Layout, Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import { useEffect, useState } from "react";

const fetchMenuItems = async () => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items", error);
    throw error;
  }
};

function Navbar() {
  const [menu, setMenu] = useState([]);
  const [submenu, setSubmenu] = useState([]);
  const [body, setBody] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuItemsData = await fetchMenuItems();
        setMenu(menuItemsData?.headers[0].menu);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };
    fetchData();
  }, []);

  console.log("menu", JSON.stringify(menu, undefined, 2));

  const navmenu = menu.map((item, index) => {
    return {
      key: index,
      label: item.name,
      children: item.submenus.map((sub) => ({
        key: sub.sub_menu_id,
        label: sub.sub_menu_name,
      })),
    };
  });

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        triggerSubMenuAction="click"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingBlock: "0.75em",
        }}
        items={navmenu}
      ></Menu>
    </>
  );
}

export default Navbar;
