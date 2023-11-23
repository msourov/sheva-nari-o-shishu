import api from "../../action/apis";
import { Layout, Button, Dropdown, Menu, Divider } from "antd";
import { Input, Space } from "antd";

import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
const { Search } = Input;
const fetchMenuItems = async () => {
  try {
    const response = await api.get(
      "top-left-menus?populate[dropdown][populate]=*"
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items", error);
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

  console.log("items", items);
  let submenuItems = [];

  items.map((item) => {
    submenuItems.push({
      key: item?.label,
      children: {
        subMenu:
          item?.sections?.data?.map((val) => ({
            label: val.attributes.label,
            content: val.attributes,
          })) || [],
        // Uncomment the following line if you want to include 'content'
        // content: item?.sections?.data?.map((val) => val.attributes),
      },
    });
  });

  console.log("submenuItems", submenuItems);

  const menu = (
    <>
      <div className="navbar-container">
        <Menu theme="light" mode="horizontal" className="navbar-menu">
          {submenuItems.map((subMenuItem) => (
            <Menu.SubMenu key={subMenuItem.key} title={subMenuItem.key}>
              <Menu.Item key={subMenuItem.children}>
                {/* {subMenuItem.children.label.map((item) => item.label)} */}
                {console.log(
                  "subMenuItem.children.label",
                  JSON.stringify(subMenuItem.children, undefined, 2)
                )}
              </Menu.Item>
            </Menu.SubMenu>
          ))}
        </Menu>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="middle"
          className="navbar-search"
          // onSearch={onSearch}
        />
      </div>
      <Divider />
    </>
  );

  return <div>{menu}</div>;
}

export default Navbar;
