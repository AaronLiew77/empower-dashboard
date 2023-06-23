import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {
    BellIcon,
} from "@heroicons/react/24/solid";

export default function DashboardSlider({ employeeName, onClose }) {
    const [open, setOpen] = useState(true)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                                                onClick={() => onClose}
                                            >
                                                <span className="sr-only">Close panel</span>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-3xl">
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
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-3xl mt-4">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title style={{ fontSize: '1.5em' }} className="text-base font-semibold leading-6 text-gray-900">
                                                    Expenses and Benefits Utilization
                                                </Dialog.Title>
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