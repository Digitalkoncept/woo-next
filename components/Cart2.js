import React, { useState,useContext } from "react";
import { AppContext } from "../src/components/context/AppContext";
import { getFormattedCart, getUpdatedItems } from '../src/functions';
import { v4 } from 'uuid';
import { useMutation, useQuery } from '@apollo/client';
import UPDATE_CART from "../src/mutations/update-cart";
import GET_CART from "../src/queries/get-cart";
import CartItem2 from "./CartItem2"
import CLEAR_CART_MUTATION from "../src/mutations/clear-cart";
import Link from "next/link"
import {isEmpty} from 'lodash'
function Index({show,setShow,cartRemovetoast}) {


    const [ cart, setCart ] = useContext( AppContext );
	const [requestError, setRequestError] = useState( null );
	

	// Get Cart Data.
	const { loading, error, data, refetch } = useQuery( GET_CART, {
		notifyOnNetworkStatusChange: true,
		onCompleted: () => {

			// Update cart in the localStorage.
			const updatedCart = getFormattedCart( data );
			localStorage.setItem( 'woo-next-cart', JSON.stringify( updatedCart ) );

			// Update cart data in React Context.
			setCart( updatedCart );
		}
	} );

	// Update Cart Mutation.
	const [updateCart, { data: updateCartResponse, loading: updateCartProcessing, error: updateCartError }] = useMutation( UPDATE_CART, {
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
				const errorMessage = error?.graphQLErrors?.[ 0 ]?.message ? error.graphQLErrors[ 0 ].message : '';
				setRequestError( errorMessage );
			}
		}
	} );

	// Update Cart Mutation.
	const [clearCart, { data: clearCartRes, loading: clearCartProcessing, error: clearCartError }] = useMutation( CLEAR_CART_MUTATION, {
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
				const errorMessage = ! isEmpty(error?.graphQLErrors?.[ 0 ]) ? error.graphQLErrors[ 0 ]?.message : '';
				setRequestError( errorMessage );
			}
		}
	} );

	/*
	 * Handle remove product click.
	 *
	 * @param {Object} event event
	 * @param {Integer} Product Id.
	 *
	 * @return {void}
	 */
	const handleRemoveProductClick = ( event, cartKey, products ) => {

		event.stopPropagation();
		if ( products.length ) {

			// By passing the newQty to 0 in updateCart Mutation, it will remove the item.
			const newQty = 0;
			const updatedItems = getUpdatedItems( products, newQty, cartKey );

			updateCart( {
				variables: {
					input: {
						clientMutationId: v4(),
						items: updatedItems
					}
				},
			} );
			cartRemovetoast();
		}
	};

	// Clear the entire cart.
	const handleClearCart = ( event ) => {

		event.stopPropagation();

		if ( clearCartProcessing ) {
			return;
		}

		clearCart( {
			variables: {
				input: {
					clientMutationId: v4(),
					all: true
				}
			},
		} );
	}


    console.log();
    return (
        <>
            <div>
             {/* <div className="flex items-center justify-center py-8">
                    <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
                        Open Modal
                    </button>
                </div> */}
                {show && (
                    <div className="w-full h-full bg-black z-50 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                        <p className="text-sm pl-2 leading-none">Back</p>
                                    </div>
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                                  {cart ? (<div>
                                    { cart.products.length && (
									cart.products.map( item => (
                                        <CartItem2
                                        key={ item.productId }
											item={ item }
											updateCartProcessing={ updateCartProcessing }
											products={ cart.products }
											handleRemoveProductClick={ handleRemoveProductClick }
											updateCart={ updateCart }
                                        />
                                    	) )
                                        ) }
                                   </div>):(<div className="container mx-auto my-32 px-4 xl:px-0 xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
					<h2 className="text-2xl mb-5">No items in the cart</h2>
					<Link href="/">
						<button className="bg-purple-600 text-white px-5 py-3 rounded-sm">
							<span className="woo-next-cart-checkout-txt">Add New Products</span>
							<i className="fas fa-long-arrow-alt-right"/>
						</button>
					</Link>
				</div>)}
                                </div>
                               {cart ? (<div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping</p>
                                                <p className="text-base leading-none text-gray-800">$30</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax</p>
                                                <p className="text-base leading-none text-gray-800">$35</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</p>
                                            </div>
                                            <Link href={'/checkout'}>
                                            <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>): ("") }
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Index;
