import React from 'react'
import Head from 'next/head';
import MyAccountNav from '../../components/MyAccountNav';
import { useRouter } from 'next/router';
const profile = () => {
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
         
          <div id="download" className="shop-tab-content">
            <div className="p-8 border border-gray-600">
              <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                Downloads
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead>
                    <tr>
                      <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                        Product
                      </th>
                      <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                        Date
                      </th>
                      <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                        Expire
                      </th>
                      <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        Mostarizing Oil
                      </td>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        Aug 22, 2018
                      </td>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        Yes
                      </td>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        <a href="#" className="ht-btn black-btn">
                          Download File
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        Katopeno Altuni
                      </td>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        Sep 12, 2018
                      </td>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        Never
                      </td>
                      <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                        <a href="#" className="ht-btn black-btn">
                          Download File
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default profile
