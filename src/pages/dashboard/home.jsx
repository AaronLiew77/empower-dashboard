import React, { useState } from "react";
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

import { StatisticsChart } from "@/widgets/charts";
import {
  totalCardsData,
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

export function Home() {
  const [isFundsBelowThreshold, setIsFundsBelowThreshold] = useState(false);

  const handleAvailableFundsClick = () => {
    setIsFundsBelowThreshold(true);
    const updatedTotalCardsData = [...totalCardsData];
    updatedTotalCardsData[0].value = "RM2800.40";
    setTotalCardsData(updatedTotalCardsData);
  };

  if(isFundsBelowThreshold){
    document.getElementById("card1").childNodes[1].style.backgroundColor="#FBB786";
  }

  return (
    <div className="mt-12">
      <div className="flex">
        <div className="mb-12 max-w-lg mr-4">
          {/* Card 1 */}
          <div className="p-4" id="card1" onClick={handleAvailableFundsClick}> {/* Add onClick event handler to the wrapper div */}
            <TotalCard
              key={totalCardsData[0].title}
              {...totalCardsData[0]}
              title={totalCardsData[0].title}
              icon={React.createElement(totalCardsData[0].icon, {
                className: "w-8 h-8 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={totalCardsData[1].footer.color}>
                    {totalCardsData[1].footer.value}
                  </strong>
                  &nbsp;{totalCardsData[1].footer.label}
                </Typography>
              }
              // className={`max-w-lg ${isFundsBelowThreshold ? "bg-orange-500" : ""}`}
            />
            {isFundsBelowThreshold && (
              <Typography className="text-red-500 mt-2">
                Your available funds are below the threshold. Please top up to prevent disruptions of corporate cards and benefits.
              </Typography>
            )}
          </div>
        </div>

        {/* Card 2 */}
        <div className="mb-12 max-w-lg">
          <div className="p-4">
            <TotalCard
              key={totalCardsData[1].title}
              {...totalCardsData[1]}
              title={totalCardsData[1].title}
              icon={React.createElement(totalCardsData[1].icon, {
                className: "w-8 h-8 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={totalCardsData[1].footer.color}>
                    {totalCardsData[1].footer.value}
                  </strong>
                  &nbsp;{totalCardsData[1].footer.label}
                </Typography>
              }
              className="max-w-lg"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="mb-12 max-w-lg">
          <div className="p-4 custom-card">
            <TotalCard
              key={totalCardsData[2].title}
              {...totalCardsData[2]}
              title={totalCardsData[2].title}
              icon={React.createElement(totalCardsData[2].icon, {
                className: "w-8 h-8 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={totalCardsData[2].footer.color}>
                    {totalCardsData[2].footer.value}
                  </strong>
                  &nbsp;{totalCardsData[2].footer.label}
                </Typography>
              }
              className="max-w-lg"
            />
          </div>
        </div>



</div>

<h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Quick Actions</h1>
  <br></br>
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
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