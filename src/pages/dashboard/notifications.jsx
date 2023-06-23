import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Progress,
  } from "@material-tailwind/react";
import RadialBarChart from '../../components/RadialChart';
import EmployeeSlide from '../../components/EmployeeSlide';
import HorizontalChart from '../../components/HorizontalChart';
import DonutChart from "../../components/DonutChart";

import "../../../public/css/main.css"
import React, { useEffect, useState } from "react";

import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import CardMedia from '@mui/material/CardMedia';

import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { StatisticsChart } from "@/widgets/charts";

import {
  totalCardsData,
  statisticsCardsData,
  historicChartsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
  spendingTableData,
  
  
} from "@/data";
export function Notifications() {
  const chartData=[70]
  const data = [
    { label: 'Petrol Allowance', value: 60 },
    { label: 'Marketing Tools', value: 40 },
    { label: 'Flexi Benefits', value: 90 },
    { label: 'Health & Gym', value: 30 },
  ];

  const donutData = {
    series: [27, 18, 41, 14],
    labels: ['Petrol Allowance', 'Marketing Tools', 'Flexi Benefits', 'Health & Gym']
  };

  const [showSlide, setshowSlide] = useState(false);

  const handleSlideMenu = () => {
    setshowSlide(true)
    console.log("run handle")
  };

  const setSlideFalse = () => {
    setshowSlide(false)
    console.log("run false handle")
  }
  
  return (
    <>
    
      <h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Employee details - Khairul Nazran</h1>

      {/* Top card */}
      <div>
        <div className="flex flex-col pt-8 items-stretch pr-20">
          <div className="flex space-x-8">
            <div className="w-1/3 border border-[#5C97F0]  rounded-lg">
              <div className="flex flex-col p-3">
                <div className="flex">
                  <div className="w-1/3 pr-4">
                  <img src="/img/nazran.jpg"></img>
                  </div>
                  <div>
                  <p className="text-xl font-bold">Khairul Nazran</p>
                  <div className="text-xs pt-4 text-blue-gray-600">
                    
                    <p>Engineering</p>
                    <p>Corporate Banking</p>

                    <p className="pt-3">Employee since</p>
                    <p>21 October 2021</p>

                    <p className="font-bold text-sm pt-4 text-black">Benefit Type: Flexi Level 2</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-2/3 bg-[#5C97F0]  rounded-lg pr-8">
              <div className="flex flex-col p-3">
                <div className="flex">
                  <div>
                    <p className="text-white font-bold text-xl">Basic EmpowerCard</p>


                    <div className="flex flex-col pr-3 text-white">
                      <div className="flex">
                      <div className="text-sm pt-4 pr-4">
                        <p>Card Number</p>
                        <p className="font-thin">1234 1234 1234 1234</p>

                        <div className="pt-8">
                        <p>Expired</p>
                        <p className="font-thin">07/28</p>
                        </div>

                      </div>

                      <div className="pt-4 text-sm">
                        <div>
                          <p>Utilized</p>
                          <p className="font-thin">RM 321.00</p>
                        </div>

                        <div className="pt-8">
                        <p>Card Limit</p>
                        <p className="font-thin">RM 1000.00</p>
                        </div> 

                      </div>
                      </div>                    
                    </div>
                  </div>
                  <div className="">
                    <RadialBarChart chartData={chartData} label='% Utilized' color='#2B69F5' height="200"/>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <div className=" flex flex-col pt-8 items-stretch">
        <div className="flex">
          <div className="w-1/2"> 
            <p className="font-bold text-xl">Utilization Breadown</p>
            <div className="pr-8">
              <HorizontalChart data={data}/>
            </div>
           

          </div>

          <div>
            <p className="font-bold text-xl">Spending Limits</p>
            <p className="font-bold pt-2">Benefit Type: Flexi Level 2</p>
            <div className="pl-6">
              <DonutChart data={donutData} />
            </div>

            <div className="mt-5 inline-block w-full">
              <button onClick={handleSlideMenu} className='bg-[#1965BF] text-white py-1 px-3 font-bold w-fit rounded-xl float-right' >Edit Spending Limit</button>
            </div>
          </div>
        </div>
      </div>

     

    

          <div className="flex flex-col">
                <div className="flex pt-8">
                  <div className="w-1/2">
                    <p className="font-bold text-xl">Recent Transactions</p>

                    <div className="flex flex-col pt-4">
                      <div className="flex">
                        <div className="text-md pr-12">
                          <div>
                            <p>Celebrity Fitness</p>
                            <p className="text-xs">9:41P.M.</p>
                          </div>

                          <div className="pt-8">
                            <p>Shell Petrol</p>
                            <p className="text-xs">10:14A.M.</p>
                          </div>

                          <div className="pt-8">
                            <p>Netflix</p>
                            <p className="text-xs">2:14PP.M.</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="pr-12">
                            <div className="">
                              <p className="text-md text-white"><span className="bg-[#56ccf2] rounded-md pt-1 pb-1 pl-2 pr-2">Gym Allowance</span></p>
                              <p className="text-md text-white pt-12"><span className="bg-[#56ccf2] rounded-md p-1">Petrol Allowance</span></p>
                              <p className="text-md text-white pt-12"><span className="bg-[#56ccf2] rounded-md pt-1 pb-1 pl-2 pr-2">Flexi Allowance</span></p>
                            </div>
                          </div>
                        </div>

                        <div className="flex">
                          <div className=" text-red-500">
                            <p>- RM23.10</p>
                            <p className="pt-11">- RM23.10</p>
                            <p className="pt-12">- RM23.10</p>
                          </div>
                        </div>
                      </div>
                      

                    </div>
                  </div>
                  

                  <div className="w-1/2 ">
                    <p className="font-bold text-xl pb-4">Recent Claims and Requests</p>
                      <div className="flex flex-col border border-[#5C97F0] rounded-lg p-4">
                        <div className="flex">
                          <div>
                            <p>Limit Increase Request</p>
                            <p className="text-xs pt-2">23 June 2023</p>
                          </div>

                          <div className="flex w-1/2 justify-end font-bold">
                            <p>RM 300.00</p>
                          </div>
                        </div>

                        

                        
                      </div>
                  </div>
                </div>
              
                
             
      
          </div>
      
        <EmployeeSlide
          open={showSlide}
          onCloseGiven={setSlideFalse}
          chartDataGiven={donutData}
        />
    </>
    
  );
}

export default Notifications;
