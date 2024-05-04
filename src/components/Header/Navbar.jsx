import api from "../../action/api";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const { Header } = Layout;

function Navbar() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(false);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const response = await api().get("navbarmenus?populate=*");
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
        console.log(response.data);
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const menus = items.map((m) => ({
    key: m.id,
    label: m.name,
    children: m.submenus.map((sm) => ({
      label: sm.name,
      key: `sm-${sm.id}`,
      link: `/${sm.link}`,
    })),
  }));

  const menuItems = (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        border: "none",
        fontSize: "0.92rem",
        gap: "3%",
        marginLeft: "3%",
      }}
    >
      {menus.map((item) => (
        <Menu.SubMenu key={item.key} title={item.label}>
          {item.children.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key}>
              <Link to={subMenuItem.link}>{subMenuItem.label}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );

  return (
    <Header className="flex bg-white sticky top-0 z-10 my-2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginInline: "2%",
          width: "10%",
        }}
      >
        <Link to="/">
          <img
            src="./sheva_transparent.png"
            style={{ padding: "0", minWidth: "120px", width: "60%" }}
            alt="logo"
          />
        </Link>
      </div>
      {windowWidth > 900 ? (
        <Menu
          theme="none"
          mode="horizontal"
          className="flex-grow mx-0 px-0 flex justify-between"
        >
          {menuItems}
          {/* <div
            style={{
              marginTop: "0.5em",
              fontSize: "1rem",
              marginInline: "none",
              fontSize: "0.92rem",
            }}
          >
            <Link to="/bangabandhu-corner" element={<Bangabandhu />}>
              Bangabandhu Corner
            </Link>
          </div> */}
        </Menu>
      ) : (
        <Button
          onClick={toggleDrawer}
          style={{ marginLeft: "auto", marginBlock: "auto" }}
        >
          <MenuOutlined style={{ fontSize: "24px" }} />
        </Button>
      )}
      <Drawer
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        visible={visible}
        width={200}
        style={{ fontSize: "0.92rem" }}
      >
        {menuItems}
        {/* <div className="ml-5">
          <Link to="/bangabandhu-corner" element={<Bangabandhu />}>
            Bangabandhu Corner
          </Link>
        </div> */}
      </Drawer>
      {loading && (
        <div
          style={{ alignItems: "center", margin: "0", marginBlock: "1.5em" }}
        >
          <TailSpin
            visible={true}
            height="30"
            width="30"
            color="#000"
            ariaLabel="tail-spin-loading"
            radius="1.5"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </Header>
  );
}

export default Navbar;
