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

export function Notifications() {
  return (
    <>
      <h1 style={{ fontSize: '150%', fontWeight: 'bold' }}>Employee details - Khairul Nazran</h1>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar 
                src="/img/nazran.jpg"
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Khairul Nazran
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Engineering - Coorporate Banking
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs> 
            </div>
          </div>  
          
          <Card className="mt-6 w-96" style={{ backgroundColor: '#72A8F9', width: '50%', height: '30%' }}>
            <CardBody>
              <div className="flex">
                <div>
                  <Typography variant="h5" color="white" className="mb-2">
                    Basic Empower Card
                  </Typography>
                  <Typography color="white">
                    Card Number: 0000-3333-2222-1234
                    <br />
                    Expiry Date: 07/29
                    <br />
                    Utilized: RM321.00
                    <br />
                    Card Limit: RM1000.00
                  </Typography>
                </div>
                <div>
                <img src="/img/radialgraph.png" alt="Radial Chart"/>
                </div>
              </div>
            </CardBody>
          
          </Card>

        </CardBody>
      </Card>
      
    </>
    
  );
}

export default Notifications;
