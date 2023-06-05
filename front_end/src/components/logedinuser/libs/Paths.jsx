
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { useParams } from "react-router-dom";

export const getDashboardSidebarLinks = (id) => {
  return [
    {
      key: "dashboard",
      label: "Dashboard",
      path: `/dashboard/${id}`,
      icon: <HiOutlineViewGrid />,
    },
    {
      key: "products",
      label: "Products",
      path: `/dashboard/${id}/products`,
      icon: <HiOutlineCube />,
    },
    {
      key: "orders",
      label: "Orders",
      path: `/dashboard/${id}/orders`,
      icon: <HiOutlineShoppingCart />,
    },
  ];
};

export const getDashboardSidebarBottomLinks = (id) => {
  return [
    {
      key: "settings",
      label: "Settings",
      path: `/dashboard/${id}/settings`,
      icon: <HiOutlineCog />,
    },
    {
      key: "support",
      label: "Help & Support",
      path: `/dashboard/${id}/support`,
      icon: <HiOutlineQuestionMarkCircle />,
    },
  ];
};


