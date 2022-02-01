const menu = [
  {
    heading: "Dashboards",
    icon: "dashboard",
    subMenu: [
      {
        icon: "dashlite",
        text: "Default Dashboard",
        link: "/",
      },
      {
        icon: "bag-fill",
        text: "Ecommerce Dashboard",
        link: "/ecommerce",
      },
      {
        icon: "bitcoin-cash",
        text: "Crypto Dashboard",
        link: "/crypto",
      },
      {
        icon: "bag-fill",
        text: "Sales Dashboard",
        link: "/sales",
      },
      {
        icon: "growth",
        text: "Analytic Dashboard",
        link: "/analytic",
      },
    ],
  },
  {
    heading: "Applications",
    icon: "menu-circled",
    subMenu: [
      {
        text: "Messages",
        icon: "chat-fill",
        link: "/app-messages",
      },
      {
        text: "Chats / Messenger",
        icon: "chat-circle-fill",
        link: "/app-chat",
      },
      {
        text: "Calendar",
        icon: "calender-date-fill",
        link: "/app-calender",
      },
    ],
  },
  {
    heading: "Pages",
    icon: "files",
    subMenu: [
      {
        icon: "tile-thumb",
        text: "Projects",
        active: false,
        subMenu: [
          {
            text: "Project Cards",
            link: "/project-card",
          },
          {
            text: "Project List",
            link: "/project-list",
          },
        ],
      },
      {
        icon: "users",
        text: "User Manage",
        active: false,
        subMenu: [
          {
            text: "User List - Regular",
            link: "/user-list-regular",
          },
          {
            text: "User List - Compact",
            link: "/user-list-compact",
          },
          {
            text: "User Details - Regular",
            link: "/user-details-regular/1",
          },
          {
            text: "User Profile - Regular",
            link: "/user-profile-regular",
          },
          {
            text: "User Contact - Card",
            link: "/user-contact-card",
          },
        ],
      },
      {
        icon: "file-docs",
        text: "AML / KYCs",
        active: false,
        subMenu: [
          {
            text: "KYC List - Regular",
            link: "/kyc-list-regular",
          },
          {
            text: "KYC Details - Regular",
            link: "/kyc-details-regular/UD01544",
          },
        ],
      },
      {
        icon: "tranx",
        text: "Transaction",
        active: false,
        subMenu: [
          {
            text: "Trans List - Basic",
            link: "/transaction-basic",
          },
          {
            text: "Trans List - Crypto",
            link: "/transaction-crypto",
          },
        ],
      },
      {
        text: "Products",
        icon: "card-view",
        active: false,
        subMenu: [
          {
            text: "Product List",
            link: "/product-list",
          },
          {
            text: "Product Card",
            link: "/product-card",
          },
          {
            text: "Product Details",
            link: "/product-details/0",
          },
        ],
      },
      {
        text: "Invoice",
        icon: "file-docs",
        active: false,
        subMenu: [
          {
            text: "Invoice List",
            link: "/invoice-list",
          },
          {
            text: "Invoice Details",
            link: "/invoice-details/1",
          },
        ],
      },
      {
        text: "Pricing Table",
        icon: "view-col-fill",
        link: "/pricing-table",
      },
      {
        text: "Image Gallery",
        icon: "img-fill",
        link: "/image-gallery",
      },
      {
        text: "Blank / Startup",
        icon: "file-fill",
        link: "/_blank",
      },
      {
        text: "Faqs / Help",
        icon: "file-fill",
        link: "/pages/faq",
      },
      {
        text: "Terms / Policy",
        icon: "file-fill",
        link: "/pages/terms-policy",
      },
      {
        text: "Regular Page - v1",
        icon: "file-fill",
        link: "/pages/regular-v1",
      },
      {
        text: "Regular Page - v2",
        icon: "file-fill",
        link: "/pages/regular-v2",
      },
    ],
  },
  {
    heading: "Misc Pages",
    icon: "server",
    subMenu: [
      {
        text: "Login / Signin",
        link: "/auth-login",
        newTab: true,
      },
      {
        text: "Register / Signup",
        link: "/auth-register",
        newTab: true,
      },
      {
        text: "Forgot Password",
        link: "/auth-reset",
        newTab: true,
      },
      {
        text: "Success / Confirm",
        link: "/auth-success",
        newTab: true,
      },
    ],
  },
  {
    heading: "Error Pages",
    icon: "alert-c",
    subMenu: [
      {
        text: "404 Classic",
        link: "/errors/404-classic",
        newTab: true,
      },
      {
        text: "504 Classic",
        link: "/errors/504-classic",
        newTab: true,
      },
      {
        text: "404 Modern",
        link: "/errors/404-modern",
        newTab: true,
      },
      {
        text: "504 Modern",
        link: "/errors/504-modern",
        newTab: true,
      },
    ],
  },
  {
    heading: "Components",
    icon: "layers",
    subMenu: [
      {
        text: "Ui Elements",
        icon: "layers",
        active: false,
        subMenu: [
          {
            text: "Component List",
            link: "/components",
          },
          {
            text: "Alerts",
            link: "/components/alerts",
          },
          {
            text: "Accordions",
            link: "/components/accordions",
          },
          {
            text: "Badges",
            link: "/components/badges",
          },
          {
            text: "Buttons",
            link: "/components/buttons",
          },
          {
            text: "Button Group",
            link: "/components/button-group",
          },
          {
            text: "Breadcrumbs",
            link: "/components/breadcrumbs",
          },
          {
            text: "Cards",
            link: "/components/cards",
          },
          {
            text: "Carousel",
            link: "/components/carousel",
          },
          {
            text: "Dropdowns",
            link: "/components/dropdowns",
          },
          {
            text: "Modals",
            link: "/components/modals",
          },
          {
            text: "Pagination",
            link: "/components/pagination",
          },
          {
            text: "Popovers",
            link: "/components/popovers",
          },
          {
            text: "Progress",
            link: "/components/progress",
          },
          {
            text: "Spinner",
            link: "/components/spinner",
          },
          {
            text: "Tabs",
            link: "/components/tabs",
          },
          {
            text: "Toast",
            link: "/components/toast",
          },
          {
            text: "Tooltips",
            link: "/components/tooltips",
          },
          {
            text: "Utilities",
            active: false,
            subMenu: [
              {
                text: "Borders",
                link: "/components/util-border",
              },
              {
                text: "Colors",
                link: "/components/util-colors",
              },
              {
                text: "Display",
                link: "/components/util-display",
              },
              {
                text: "Embeded",
                link: "/components/util-embeded",
              },
              {
                text: "Flex",
                link: "/components/util-flex",
              },
              {
                text: "Text",
                link: "/components/util-text",
              },
              {
                text: "Sizing",
                link: "/components/util-sizing",
              },
              {
                text: "Spacing",
                link: "/components/util-spacing",
              },
              {
                text: "Others",
                link: "/components/util-others",
              },
            ],
          },
        ],
      },
      {
        text: "Crafted icons",
        active: false,
        icon: "dot-box-fill",
        subMenu: [
          {
            text: "SVG Icon - Exclusive",
            link: "/svg-icons",
          },
          {
            text: "Nioicon - HandCrafted",
            link: "/nioicon",
          },
        ],
      },
      {
        text: "Tables",
        active: false,
        icon: "table-view-fill",
        subMenu: [
          {
            text: "Basic Tables",
            link: "/table-basic",
          },
          {
            text: "Special Tables",
            link: "/table-special",
          },
        ],
      },
      {
        text: "Forms",
        active: false,
        icon: "todo-fill",
        subMenu: [
          {
            text: "Form Elements",
            link: "/components/form-elements",
          },
          {
            text: "Form Layouts",
            link: "/components/form-layouts",
          },
          {
            text: "Form Validation",
            link: "/components/form-validation",
          },
          {
            text: "Date Time Picker",
            link: "/components/datetime-picker",
          },
        ],
      },
      {
        text: "Charts",
        active: false,
        icon: "pie-fill",
        subMenu: [
          {
            text: "Chart Js",
            link: "/charts/chartjs",
          },
        ],
      },
      {
        text: "Email Template",
        icon: "template-fill",
        link: "/email-template",
        active: "false",
      },
    ],
  },
];
export default menu;
