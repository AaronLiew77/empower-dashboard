import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  CreditCardIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";


export const projectsTableData = [
  {
    img: "/img/petronas-logo-png.png",
    name: "PETRONAS Jalan Ampang",
    members: [
      { img: "/img/team-1.jpeg", name: "Romina Hadid" },
      
    ],
    budget: "Petrol Allowance",
    completion: 60,
    action: TrashIcon,

  },
  {
    img: "/img/logo-atlassian.svg",
    name: "Gym Membership Pavilion",
    members: [
      { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
      
    ],
    budget: "Gym Membership",
    completion: 10,
    action: TrashIcon,

  },
  {
    img: "/img/petronas-logo-png.png",
    name: "PETRONAS Jalan Bunga",
    members: [
      { img: "/img/team-3.jpeg", name: "Jessica Doe" },
    ],
    budget: "Petrol Allowance",
    completion: 100,
    action: TrashIcon,

  },
  {
    img: "/img/logo-spotify.svg",
    name: "Spotify Premium",
    members: [
      { img: "/img/team-4.jpeg", name: "Alexander Smith" },
     
    ],
    budget: "Entertainment",
    completion: 50,
    action: TrashIcon,

  },
  {
    img: "/img/logo-jira.svg",
    name: "Add the New Pricing Page",
    members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
    budget: "Flexi",
    completion: 25,
    action: TrashIcon,

  },
  {
    img: "/img/logo-invision.svg",
    name: "Redesign New Online Shop",
    members: [
      { img: "/img/team-1.jpeg", name: "Romina Hadid" },
    ],
    budget: "Flexi",
    completion: 40,
    action: TrashIcon,
  },
];

export default projectsTableData;
