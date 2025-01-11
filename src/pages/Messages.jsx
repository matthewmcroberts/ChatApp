import { ChatList, MessageInbox, Sidebar } from '../section/chat'
import React from 'react'

export default function Messages() {
  return (
    <div className='h-screen overflow-hidden'>
        <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex'>
            {/* Sidebar */}
            <Sidebar />
            {/* ChatList */}
            <ChatList />
            {/* Inbox */}
            <MessageInbox />
        </div>
    </div>
  )
}
