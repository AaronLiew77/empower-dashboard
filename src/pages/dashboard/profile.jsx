import React from "react";
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
import { StatisticsCard } from "@/widgets/cards";
import { TotalCard } from "@/widgets/cards";
import StackedBarChart from '../../components/StackedBarChart';

import { StatisticsChart } from "@/widgets/charts";
import {
  totalCardsData,
  statisticsCardsData,
  historicChartsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
  
  
} from "@/data";

export function Profile() {
  return (

  
    <div className="mt-12">

<h1 style={{ fontSize: '250%', fontWeight: 'bold' }}>Expenses & Benefit</h1>
<h2 style={{ fontSize: '150%', fontWeight: 'bold' }}>Category: All</h2>

<div className="flex">
  <div className="mb-12 max-w-lg mr-4">
    {/* Card 1 */}
    <div className="p-4">
      <TotalCard
        key={totalCardsData[3].title}
        {...totalCardsData[3]}
        title={totalCardsData[3].title}
        icon={React.createElement(totalCardsData[3].icon, {
          className: "w-8 h-8 text-white",
        })}
        footer={
          <Typography className="font-normal text-blue-gray-600">
            <strong className={totalCardsData[3].footer.color}>
              {totalCardsData[3].footer.value}
            </strong>
            &nbsp;{totalCardsData[3].footer.label}
          </Typography>
        }
        // Additional className to adjust card width
        className="max-w-lg"
      />
    </div>
  </div>

  <div className="mb-12 max-w-lg">
    {/* Card 2 */}
    <div className="p-4">
      <TotalCard
        key={totalCardsData[4].title}
        {...totalCardsData[4]}
        title={totalCardsData[4].title}
        icon={React.createElement(totalCardsData[4].icon, {
          className: "w-8 h-8 text-white",
        })}
        footer={
          <Typography className="font-normal text-blue-gray-600">
            <strong className={totalCardsData[4].footer.color}>
              {totalCardsData[4].footer.value}
            </strong>
            &nbsp;{totalCardsData[4].footer.label}
          </Typography>
        }
        // Additional className to adjust card width
        className="max-w-lg"
      />
    </div>
  </div>
  
  <div className="mb-12 max-w-lg">
  {/* Card 3 */}
  <div className="p-4 custom-card">
    <TotalCard
      key={totalCardsData[5].title}
      {...totalCardsData[5]}
      title={totalCardsData[5].title}
      icon={React.createElement(totalCardsData[5].icon, {
        className: "w-8 h-8 text-white",
      })}
      footer={
        <Typography className="font-normal text-blue-gray-600">
          <strong className={totalCardsData[5].footer.color}>
            {totalCardsData[5].footer.value}
          </strong>
          &nbsp;{totalCardsData[5].footer.label}
        </Typography>
      }
      // Additional className to adjust card width
      className="max-w-lg"
    />
  </div>
</div>



</div>



      <h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Historic Trends</h1>
      <br></br>
      <br></br>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* {historicChartsData.map((props) => (
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
        ))} */}
        <div>
      <h1>Historical Trends</h1>
      <StackedBarChart />
      </div>
      </div>

      <h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Recent Transactions in Category</h1>
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
                  {["Transactions", "Employee", "Category", "Amount", "Action"].map(
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
                  ({ img, name, members, budget, completion, action }, key) => {
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
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="cursor-pointer text-xs font-medium text-red-500"
                          >
                            {action}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        
      </div>
    </div>
  );
}

export default Profile;
