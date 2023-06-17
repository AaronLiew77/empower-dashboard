import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  CreditCardIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [

 


  {
    color: "blue",
    icon: UserPlusIcon,
    title: "",
    value: "Add New\nEmployee",
    footer: {
      color: "text-green-500",
      value: "",
      label: "",
    },
  },
  {
    color: "pink",
    icon: CreditCardIcon,
    title: "",
    value: "Add New Card",
    footer: {
      color: "text-green-500",
      value: "",
      label: "",
    },
  },
  {
    color: "red",
    icon: PencilIcon,
    title: "",
    value: "Adjust Benefits",
    footer: {
      color: "text-red-500",
      value: "",
      label: "",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "",
    value: "Top-up funds",
    footer: {
      color: "",
      value: "",
      label: "",
    },
  },
];


export default statisticsCardsData;
