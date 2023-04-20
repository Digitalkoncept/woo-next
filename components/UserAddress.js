import React from 'react'
import Head from 'next/head';
import MyAccountNav from '/components/MyAccountNav';
import { useRouter } from 'next/router';
const UserAddress = () => {
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
      <div id="address" className="shop-tab-content">
        <div className="p-8 border border-gray-600">
          <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
            Billing Address
          </h3>
          <address className="not-italic">
            <p>
              <strong>Alex Tuntuni</strong>
            </p>
            <p>
              1355 Market St, Suite 900 <br />
              San Francisco, CA 94103
            </p>
            <p>Mobile: (123) 456-7890</p>
          </address>
          <a href="#" className="transition-all hover:text-orange">
            Edit Address
          </a>
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

export default UserAddress
