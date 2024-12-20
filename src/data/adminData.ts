import {
  BookingIcon,
  ContainerIcon,
  CustomerIcon,
  DashboardIcon,
  DeliveryIcon,
  EmployeeIcon,
  LogoutIcon,
  MessageIcon,
  NotificationIcon,
  OrdersIcon,
  ReportIcon,
  SettingsIcon,
  TrackingIcon,
} from "@/assets";

export const bookingData = [
  {
    bookingId: "CN241100",
    containerId: "",
    bookingDate: "10-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "25-11-2024",
    productLocation: "House 1, Beijing, China ",
    status: "Pending",
    senderContactNumber: "+8801330000121",
  },
];

export const ordersData = [
  {
    bookingId: "CN241100",
    containerId: "L0001",
    bookingDate: "10-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "25-11-2024",
    productLocation: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    senderContactNumber: "+8801330000121",
  },
];

export const customerData = [
  {
    userName: "User A",
    emailPhone: "+325100121",
    status: "Online",
  },
  {
    userName: "User B",
    emailPhone: "mail@gmail.com",
    status: "Offline",
  },
];

export const containersData = [
  {
    containerId: "L0001",
    currentProductLocation: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    empContactNumber: "+325100121",
  },
];

export const shipperData = {
  name: "Md. Irfan Ahamad",
  company: "RL Logistics",
  address: "Yuan li Avenue",
  country: "China",
  city: "Guanagzhou",
  state: "Guanagzhou",
  postalCode: 1059,
  phone: "+8801705-9615987",
  email: "helloman@gmail.com",
};

export const receiverData = {
  name: "Nafiul Islam Jim",
  company: "Aetherzen IT",
  address: "Dhanmondi 27, Dhaka",
  country: "Bangladesh",
  city: "Dhaka",
  state: "Dhaka",
  postalCode: 1209,
  phone: "+8801705-9615987",
  email: "helloman@gmail.com",
};

export const shipperInformation = {
  Origin: "China",
  Product: "Books",
  "Payment Mode": "Cash",
  Package: 12,
  "Weight (kg)": 1000,
  "Expected Delivery Date": "2025-01-23",
  "Product Location": "China Warehouse ",
  "Width (cm)": 12,
  "Departure Time": "18:00 pm",
  Destination: "Bayzid Traders, Ctg  ",
  "Height (cm)": "06",
  "Pick-up Date": "2025-02-22",
  Carrier: "RL Logistic",
  Qty: 120,
  "Pick-up Time": "19:00 pm",
  "Type of Shipment": "Air Freight/ship ",
  "Delivery Method": "Cash on Delivery",
  Comments: "It will receive soon, our ship will on the way",
};

export const additionalInfo = [
  {
    totalFreight: "1200",
    containerId: "1001",
    bookingId: "CN241100",
    paymentStatus: "Paid",
  },
];

export const trackingInfo = [
  {
    date: "28-11-2024",
    time: "11:30",
    location: "China Warehouse ",
    status: "Arrived",
    updatedBy: "Md Irfan Ahmad",
    remarks: "",
  },
];

export const reportsData = [
  {
    totalDelivered: 1250,
    totalPending: 12451,
    totalRejected: 150,
    revenue: "2012548$",
  },
];

export const deliveryData = [
  {
    bookingId: "CN241100",
    containerId: "L0001",
    bookingDate: "10-11-2024",
    senderCountry: "China",
    receiverCountry: "Bangladesh",
    deliveryDate: "25-11-2024",
    productLocation: "China Warehouse",
    updatedBy: "Md Irfan Ahmad",
    receiverContactNumber: "+8801330000121",
  },
];

export const settingsData = [
  {
    empName: "User A",
    phone: "+325100121",
    country: "China",
  },
];

export const statsData = [
  {
    title: "Total Shipment",
    percentage: 75,
    image: "/images/coins_image.png",
    className: "bg-primary text-white",
    circleTopColor: "#FFFFFF",
    circleBackColor: "rgba(0, 110, 211, 0.4)",
    circleTextColor: "#FFFFFF",
  },
  {
    title: "Pending",
    percentage: 25,
    image: "/images/cubes_image.png",
    className: "bg-secondary text-primary",
    circleTopColor: "#FF131D",
    circleBackColor: "#006ED3",
    circleTextColor: "#006ED3",
  },
];

export const additionalStats = [
  {
    title: "Delivery",
    percentage: 30,
    className: "bg-primary text-white",
    circleTopColor: "",
    circleBackColor: "",
    circleTextColor: "",
  },
  {
    title: "Return",
    percentage: 30,
    className: "bg-primary text-white",
    circleTopColor: "",
    circleBackColor: "",
    circleTextColor: "",
  },
];

export const servicesNavs = [
  {
    title: "Dashboard",
    url: "/dashboard",
    Icon: DashboardIcon,
  },
  {
    title: "Tracking",
    url: "/track-order",
    Icon: TrackingIcon,
  },
  {
    title: "Booking",
    url: "/booking",
    Icon: BookingIcon,
  },
  {
    title: "Containers",
    url: "/containers",
    Icon: ContainerIcon,
  },
  {
    title: "All Orders",
    url: "/orders",
    Icon: OrdersIcon,
  },
  {
    title: "For Delivery",
    url: "/delivery",
    Icon: DeliveryIcon,
  },
];

export const informationsNavs = [
  {
    title: "Reports",
    url: "/reports",
    Icon: ReportIcon,
  },
  {
    title: "Messages",
    url: "/messages",
    Icon: MessageIcon,
  },
  {
    title: "Notifications",
    url: "/notifications",
    Icon: NotificationIcon,
  },
  {
    title: "Customers",
    url: "/customers",
    Icon: CustomerIcon,
  },
];

export const settingsNavs = [
  {
    title: "All Employee",
    url: "/employee",
    Icon: EmployeeIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    Icon: SettingsIcon,
  },
  {
    title: "Log Out",
    url: "/login",
    Icon: LogoutIcon,
  },
];

export const messagesData = [
  {
    name: "Mr Robiul Alom",
    email: "jondo@gmail.com",
    phone: "+254215422",
    subject: "How Can I book a product",
    message:
      "I recently booked a parcel with RL Logistics, and I would like to inquire about its current status.",
  },
];

export const notificationsData = [
  {
    containerId: "L0001",
    currentProductLocation: "China Airport",
    updatedBy: "Md Irfan Ahmad",
    updatedTime: "12:30",
  },
];
