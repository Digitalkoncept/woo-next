import React from 'react'
import Head from 'next/head';
import MyAccountNav from './MyAccountNav';
import { useRouter } from 'next/router';
const UserAccount = () => {
    const router = useRouter();
    let activeTab = 'dashboard';

     if (router.pathname.startsWith('/my-account/dashboard')) {
        activeTab = 'dashboard';
      }
     else if (router.pathname.startsWith('/my-account/orders')) {
        activeTab = 'orders';
      }
      else if (router.pathname.startsWith('/my-account/download')) {
        activeTab = 'download';
      }
     else if (router.pathname.startsWith('/my-account/paymentmethod')) {
        activeTab = 'payment-method';
      }
      else if (router.pathname.startsWith('/my-account/address')) {
        activeTab = 'address';
      }
      if (router.pathname.startsWith('/my-account/account')) {
        activeTab = 'account-details';
      }

  return (
    <div>
    <Head>
    <link rel="stylesheet" href="/dashboard.css" />
  </Head>
  <>
{/* wrapper */}
<div className="pb-24 mt-16">
<div className="container">
<div id="shoptab" className="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5">
  <div className="col-span-12 lg:col-span-4">
    <MyAccountNav activeTab={activeTab} />
  </div>
  <div className="col-span-12 lg:col-span-8">
    <div>
    <div id="account" className="shop-tab-content active">
<div className="p-8 border border-gray-600">
<h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
  Account Details
</h3>
<form action="#">
  <div className="grid grid-cols-12 gap-x-5">
    <div className="col-span-12 lg:col-span-6 mb-5">
      <input
        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
        id="first-name"
        placeholder="First Name"
        type="text"
      />
    </div>
    <div className="col-span-12 lg:col-span-6 mb-5">
      <input
        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
        id="last-name"
        placeholder="Last Name"
        type="text"
      />
    </div>
    <div className="col-span-12 mb-5">
      <input
        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
        id="display-name"
        placeholder="Display Name"
        type="text"
      />
    </div>
    <div className="col-span-12 mb-5">
      <input
        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
        id="email"
        placeholder="Email Address"
        type="email"
      />
    </div>
    <div className="col-span-12 mb-5">
      <h4 className="font-semibold text-base capitalize">
        Password change
      </h4>
    </div>
    <div className="col-span-12 mb-5">
      <input
        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
        id="current-pwd"
        placeholder="Current Password"
        type="password"
      />
    </div>
    <div className="col-span-12 lg:col-span-6 mb-5">
      <input
        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
        id="new-pwd"
        placeholder="New Password"
        type="password"
      />
    </div>
    <div className="col-span-12 lg:col-span-6 mb-5">
      <input
        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
        id="confirm-pwd"
        placeholder="Confirm Password"
        type="password"
      />
    </div>
    <div className="col-span-12">
      <button
        className="inline-block leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange"
        aria-label="Save Changes"
      >
        Save Changes
      </button>
    </div>
  </div>
</form>
</div>
</div>

     
    </div>
  </div>
</div>
</div>
</div>

{/* ./wrapper */}
</>

</div>
  )
}

export default UserAccount
