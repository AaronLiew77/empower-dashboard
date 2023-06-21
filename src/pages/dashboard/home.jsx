import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { TotalCard } from "@/widgets/cards";

import { StatisticsChart } from "@/widgets/charts";
import {
  totalCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

import {
  UserPlusIcon,
  ChartBarIcon,
  CreditCardIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

export function Home() {
  const [isFundsBelowThreshold, setIsFundsBelowThreshold] = useState(false);
  const [availableFunds, setAvailableFunds] = useState("RM 20,800.40");
  const [cardBackgroundColor, setCardBackgroundColor] = useState("bg-[#2B69F5]");


  const handleAvailableFundsClick = () => {
    setIsFundsBelowThreshold(true);
    // const updatedTotalCardsData = [...totalCardsData];
    // updatedTotalCardsData[0].value = "RM2800.40";
    // setTotalCardsData(updatedTotalCardsData);

    setAvailableFunds("RM 2800.40");
    setCardBackgroundColor("bg-[#FBB786]")

  };

  if(isFundsBelowThreshold){
    document.getElementById("card1").childNodes[1].style.backgroundColor="#FBB786";
  }

  return (
    <div className="mt-12">
      <div className="flex w-3/5 my-8 items-stretch">
        <div className="w-2/3 pr-8">
          {/* Blue card */}
          <div className={`flex flex-col ${cardBackgroundColor} p-8 rounded-lg`} onClick={handleAvailableFundsClick}>
            <div className="flex">
            <div className="w-1/2">
              <p className="text-white text-xl font-bold">Available Funds</p>
              <p className="text-white text-3xl font-bold mt-3">{availableFunds}</p>
            </div>
            <div className="w-1/2">
              <p className="text-white text-xl font-bold">Expense & Benefits Claimed This Month </p>
              <p className="text-white text-3xl font-bold mt-3">RM 10,300.90</p>
            </div>
            </div>
            <div>
            {isFundsBelowThreshold && (
              <Typography className="text-red-500 mt-2">
                Your available funds are below the threshold. Please top up to prevent disruptions of corporate cards and benefits.
              </Typography>
            )}
            </div>
          </div>
        </div>
        {/* Purple card */}
        <div className="w-1/3 pr-8">
          <div className="flex flex-col justify-center items-center bg-[#C297EC] p-8 rounded-lg">
            <p className="text-white text-3xl font-bold">2</p>
            <p className="text-white text-xl font-bold mt-3">Available Request</p>
            <button className="px-4 py-2 bg-[#2B69F5] text-white text-sm rounded-full mt-6">See Pending Request</button>
          </div>
        </div>
      </div>

<h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Quick Actions</h1>
  <br></br>
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-[#D8F1FF] flex p-6 rounded-lg">
          <div className="w-1/5"> 
          <UserPlusIcon className="h-6 w-6 text-[#1965BF]" />
          </div>
          <div className="w-4/5">
            <p className="text-[#1965BF] font-semibold">Add New Employee</p>
          </div>

        </div>

        <div className="bg-[#D8F1FF] flex p-6 rounded-lg">
          <div className="w-1/5"> 
          <CreditCardIcon className="h-6 w-6 text-[#1965BF]" />
          </div>
          <div className="w-4/5">
            <p className="text-[#1965BF] font-semibold">Add New Card</p>
          </div>

        </div>

        <Link to='/dashboard/notifactions'>
        <div className="bg-[#D8F1FF] flex p-6 rounded-lg">
          <div className="w-1/5"> 
          <PencilIcon className="h-6 w-6 text-[#1965BF]" />
          </div>
          <div className="w-4/5">
            <p className="text-[#1965BF] font-semibold">Adjust Benefits</p>
          </div>

        </div>
          </Link>
        

        <div className="bg-[#D8F1FF] flex p-6 rounded-lg">
          <div className="w-1/5"> 
          <ChartBarIcon className="h-6 w-6 text-[#1965BF]" />
          </div>
          <div className="w-4/5">
            <p className="text-[#1965BF] font-semibold">Top Up Funds</p>
          </div>

        </div>
      </div>

      <h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Charts & Analysis</h1>
      <br></br>
      <br></br>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>

      <h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Recent Transactions</h1>
      <br></br>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Real-time transactions
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
                <strong>Latest transactions</strong> updated 5s ago
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Transactions", "Employee", "Category", "Amount"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              RM{completion}
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;