import React from "react"
import { Dialog, Transition } from "@headlessui/react"
import Spinner from "common/icons/spinner"

const BackDrop = ({isOpen}) => {
    const noop = () => {}
  return (
    <Transition show={isOpen}>
      <Dialog onClose={noop} className="relative z-[100]">
        <Transition.Child
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  flex-col bg-transparent bg-opacity-100 flex items-center justify-center">
          <div className='text-4xl bebas py-2 font-bold'> ATTILA HOMES</div> 
            <Spinner size={24} />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default BackDrop