import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import DonutChart from "./DonutChart";

export default function EmployeeSlide({open, onCloseGiven, chartDataGiven}) {
  const [dropDown, setdropDown] = useState(false)

  function dropButton(){
    setdropDown(!dropDown)

    let menu = document.getElementById("dropDownMenu")

    if(dropDown){
        menu.style.display = "display"
    }else{
        menu.style.display = "none"
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCloseGiven}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={onCloseGiven}
                      >
                        <span className="sr-only">Close panel</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-3xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Edit Spending Limit
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <p className="font-bold">Benefit Type:
                            <span className="ml-5">
                            <select name="Category" id="" className="border rounded-lg pl-2 w-fit h-7 text-sm" style={{borderColor: "#2B69F5"}}>
                              <option value="Flexi Level 2">Flexi Level 2</option>
                              <option value="Flexi Level 1">Flexi Level 1</option>
                              <option value="Manager - WFO ">Manager - WFO</option>
                              <option value="Manager - WFH ">Manager - WFH</option>
                              <option value="Custom ">Custom</option>
                            </select>
                            </span>
                        </p>

 
                        

                        <div className="">
                          <DonutChart data={chartDataGiven} />
                        </div>

                        <div className="mt-8">
                            <p className=' text-[#1965BF] inline-block'>Simple label</p>
                            <input defaultValue="RM 300" className="border rounded-lg text-lg inline-block float-right px-1" style={{borderColor: "#2B69F5"}} type="text" />
                        </div>
                        <div className="mt-8">
                            <p className=' text-[#1965BF] inline-block'>Marketing Tool</p>
                            <input defaultValue="RM 300" className="border rounded-lg text-lg inline-block float-right px-1" style={{borderColor: "#2B69F5"}} type="text" />
                        </div>
                        <div className="mt-8">
                            <p className=' text-[#1965BF] inline-block'>Flexi Benefits</p>
                            <input defaultValue="RM 300" className="border rounded-lg text-lg inline-block float-right px-1" style={{borderColor: "#2B69F5"}} type="text" />
                        </div>
                        <div className="mt-8">
                            <p className=' text-[#1965BF] inline-block'>Health & Gym</p>
                            <input defaultValue="RM 300" className="border rounded-lg text-lg inline-block float-right px-1" style={{borderColor: "#2B69F5"}} type="text" />
                        </div>
                        <div className="mt-8">
                            <p className=' text-[#1965BF] inline-block'>Health & Gym</p>
                            <input defaultValue="RM 300" className="border rounded-lg text-lg inline-block float-right px-1" style={{borderColor: "#2B69F5"}} type="text" />
                        </div>

                        <div className="mt-5 inline-block w-full">
                          <button onClick={onCloseGiven} className='bg-[#1965BF] text-white py-1 px-3 font-bold w-fit rounded-xl float-right'>Edit Spending Limit</button>
                        </div>

                      
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}