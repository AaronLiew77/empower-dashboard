import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {
    BellIcon,
} from "@heroicons/react/24/solid";

import BenefitCard from "../components/BenefitCard";
import RadialBarChart from '../components/RadialBarChart';




    

export default function DashboardSlider({open, employeeName, onClose}) {
    const [open, setOpen] = useState(true)
    const chartData = [32.1]
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-100" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
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
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col bg-white py-6 shadow-xl rounded-3xl overflow-y-auto">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title style={{ fontSize: '1.5em' }} className="text-base font-semibold leading-6 text-gray-900">
                                                Employee Information
                                            </Dialog.Title>
                                        </div>
                                        <div className="rounded-lg bg-white-200 px-4 py-4 mx-4 mt-4 flex items-center">
                                            <div className="w-24 h-24 rounded-full overflow-hidden ml-4">
                                                <img src="/img/nazran.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
                                            </div>

                                            <div className="mx-4 mt-3">
                                                <h2 className="text-lg font-semibold">Khairul Nazran</h2>
                                                <p className="text-sm text-gray-600">Engineering - Corporate Engineer</p>
                                                <p className="text-sm text-gray-600">Employee since 21 October 2021</p>
                                                <button
                                                    className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-3 rounded-full mt-4 text-sm flex items-center"
                                                    style={{ backgroundColor: '#C297EC' }}
                                                >
                                                    <BellIcon className="w-10 h-10 mr-1" />
                                                    1 Pending request from this employee
                                                </button>
                                            </div>

                                        </div>
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title style={{ fontSize: '1.5em' }} className="text-base font-semibold leading-6 text-gray-900">
                                                Expenses and Benefits Utilization
                                            </Dialog.Title>
                                            <p className='mb-4'>Benefit Type: Flexi Level 2</p>
                                        </div>


                                        <div className='flex px-4 overflow'> {/* Added 'overflow-hidden' class */}
                                            <div className='w-1/2 rounded-xl border border-[#5C97F0]'>
                                                <h3 className='text-md text-center font-bold mt-4 text-[#2B69F5]'>Total Utilization</h3>
                                                <RadialBarChart chartData={chartData} label='% Utilized' color='#2B69F5' />
                                            </div>
                                            <div className='w-1/2 bg-[#9087FB] ml-2 rounded-xl flex flex-col p-4'>
                                                <h3 className='text-white text-sm font-bold'>Utilized</h3>
                                                <h3 className='text-white text-sm'>RM 321.00</h3>
                                                <br></br>
                                                <h3 className='text-white text-sm font-bold'>Card Limit</h3>
                                                <h3 className='text-white text-sm'>RM 1000.00</h3>
                                            </div>
                                        </div>

                                        <div className='flex'>
                                            <div className='w-1/2 rounded-xl border border-[#5C97F0]'>

                                                <BenefitCard chartData={[30]} label="Petrol Allowance" />
                                            </div>
                                            <div className='w-1/2 rounded-xl border border-[#5C97F0]'>

                                                <BenefitCard chartData={[40]} label="Gym Allowance" />
                                            </div>
                                            <div className='w-1/2 rounded-xl border border-[#5C97F0]'>

                                                <BenefitCard chartData={[70]} label="Flexi Benefits" />
                                            </div>
                                        </div>

                                        <div className="px-4 sm:px-6 mt-2">
                                            <Dialog.Title style={{ fontSize: '1.5em' }} className="text-base font-semibold leading-6 text-gray-900 mt-2">
                                                Recent Transactions
                                            </Dialog.Title>
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                    <div class="overflow-hidden">
                                                        <table class="min-w-full text-left text-sm font-light">
                                                            <thead class="border-b font-medium dark:border-neutral-500">
                                                                <tr>
                                                                    <th scope="col" class="px-6 py-4">Transaction</th>
                                                                    <th scope="col" class="px-6 py-4">Category</th>
                                                                    <th scope="col" class="px-6 py-4">Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr
                                                                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                                    <td class="whitespace-nowrap px-6 py-4">Grab Taxi <br></br> <span className='text-sm font-light text-gray-500'>9:14P.M.</span></td>
                                                                    <td class="whitespace-nowrap px-6 py-4">Transport Allowance</td>
                                                                    <td class="whitespace-nowrap px-6 py-4 text-red-500">-RM23.40</td>
                                                                </tr>
                                                                <tr
                                                                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                                    <td class="whitespace-nowrap px-6 py-4">Grab Taxi <br></br> <span className='text-sm font-light text-gray-500'>9:14P.M.</span></td>
                                                                    <td class="whitespace-nowrap px-6 py-4">Transport Allowance</td>
                                                                    <td class="whitespace-nowrap px-6 py-4 text-red-500">-RM23.40</td>
                                                                </tr>
                                                                <tr
                                                                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                                    <td class="whitespace-nowrap px-6 py-4">Grab Taxi <br></br> <span className='text-sm font-light text-gray-500'>9:14P.M.</span></td>
                                                                    <td class="whitespace-nowrap px-6 py-4">Transport Allowance</td>
                                                                    <td class="whitespace-nowrap px-6 py-4 text-red-500">-RM23.40</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
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
