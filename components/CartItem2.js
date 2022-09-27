import { useState } from 'react';
import { v4 } from "uuid";
import { getUpdatedItems } from "../src/functions";
import {Cross, Loading} from "../src/components/icons";

const CartItem2 = ( {
	                   item,
	                   products,
					   updateCartProcessing, 
	                   handleRemoveProductClick,
	                   updateCart,
                   } ) => {

	const [productCount, setProductCount] = useState( item.qty );

	/*
	 * When user changes the qty from product input update the cart in localStorage
	 * Also update the cart in global context
	 *
	 * @param {Object} event event
	 *
	 * @return {void}
	 */
	const handleQtyChange = ( event, cartKey ) => {

		if ( process.browser ) {

			event.stopPropagation();

			// If the previous update cart mutation request is still processing, then return.
			if ( updateCartProcessing ) {
				return;
			}

			// If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
			const newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;

			// Set the new qty in state.
			setProductCount( newQty );

			if ( products.length ) {

				const updatedItems = getUpdatedItems( products, newQty, cartKey );

				updateCart( {
					variables: {
						input: {
							clientMutationId: v4(),
							items: updatedItems
						}
					},
				} );
			}

		}
	};


	return (   
        <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/4">
                                            <img src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt className="w-full h-full object-center object-cover" />
                                        </div>
                                        <div className="md:pl-3 md:w-3/4">
                                            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <p className="text-base font-black leading-none text-gray-800">{item.name}</p>
                                                <div className='woo-next-cart-element woo-next-cart-qty'>
                                                <input
                                                type="number"
                                                min="1"
                                                data-cart-key={ item.cartKey }
                                                className={ `woo-next-cart-qty-input form-control ${ updateCartProcessing ? 'opacity-25 cursor-not-allowed' : '' } ` }
                                                value={ productCount }
                                                onChange={ ( event ) => handleQtyChange( event, item.cartKey ) }
                                            /></div>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                            <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                            <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                            <div className="flex items-center justify-between pt-5 pr-6">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={ ( event ) => handleRemoveProductClick( event, item.cartKey, products ) } >Remove</p>
                                                    
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">₹{ ( 'string' !== typeof item.price ) ? item.price.toFixed( 2 ) : item.price }</p>
                                            </div>
                                        </div>
        </div>
     
	)
};

export default CartItem2;
