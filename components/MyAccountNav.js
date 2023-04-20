import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react';
const MyAccountNav = ({ activeTab }) => {
  return (
    <div>
      <ul className="shop-tab-nav account-nav flex flex-wrap flex-col">
          <li className={`${activeTab === 'dashboard' ? 'active' : ''} cursor-pointer`}>
            <Link href={'/my-account/dashboard'}>
            <span
              className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
            >
              dashboad
            </span>
            </Link>
          </li>
          <li className={`${activeTab === 'orders' ? 'active' : ''} cursor-pointer`}>
            <Link href={'/my-account/orders'}>
            <span
              className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
            >
              orders
            </span>
            </Link>
          </li>
          <li className={`${activeTab === 'download' ? 'active' : ''} cursor-pointer`}>
            <Link href={'/my-account/download'}>
            <span
              className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
            >
              download
            </span>
            </Link>
          </li>
          <li className={`${activeTab === 'payment-method' ? 'active' : ''} cursor-pointer`}>
            <Link href={'/my-account/paymentmethod'}>
            <span
              className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
            >
              payment method
            </span>
            </Link>
          </li>
          <li className={`${activeTab === 'address' ? 'active' : ''} cursor-pointer`}>
            <Link href={'/my-account/address'}>
            <span
              className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
            >
              address
            </span>
            </Link>
          </li>
          <li className={`${activeTab === 'account-details' ? 'active' : ''} cursor-pointer`}>
            <Link href={'/my-account/account'}>
            <span
              className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
            >
              {" "}
              Account Details
            </span>
            </Link>
          </li>
          <li onClick={signOut} className={`${activeTab === 'logout' ? 'active' : ''} cursor-pointer`}>
            <span
              className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-b border-gray-600 block"
            >
              Logout
            </span>
          </li>
        </ul>
    </div>
  )
}

export default MyAccountNav
