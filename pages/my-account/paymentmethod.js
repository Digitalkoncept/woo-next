import React from 'react'
import Head from 'next/head';
import MyAccountNav from '../../components/MyAccountNav';
import { useRouter } from 'next/router';
const paymentmethod = () => {
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
          <div id="payment-method" className="shop-tab-content">
            <div className="p-8 border border-gray-600">
              <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                Payment Method
              </h3>
              <p className="font-medium p-4">
                You Can't Saved Your Payment Method yet.{" "}
              </p>
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

export default paymentmethod
