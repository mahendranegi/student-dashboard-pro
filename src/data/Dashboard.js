import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";

export const dashboardData = {
  totalStudents: 1248,
  totalTeachers: 52,
  totalClasses: 18,
  totalNotice: 9,
  attendance: "94%",
  pendingTasks: 14,
};

export const cards = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹12,45,800",
    description: "Revenue generated this month",
    percentage: "+18.5%",
    status: "up",
    // icon: <CurrencyRupeeIcon  />,
    icon: "💰",
  },
  {
    id: 2,
    title: "Total Orders",
    value: "2,486",
    description: "Orders received this month",
    percentage: "+12.3%",
      icon: <ShoppingCartIcon  />,
    status: "up",
  },
  {
    id: 3,
    title: "New Customers",
    value: "845",
      icon: <PeopleIcon  />,
    description: "Customers joined this month",
    percentage: "+8.2%",
    status: "up",
  },
  {
    id: 4,
    title: "Pending Orders",
    value: "124",
    description: "Orders waiting for shipment",
    percentage: "-4.1%",
    status: "down",
    // icon: <ShoppingCartIcon  />,
    icon: "🚚",
  },
  
];