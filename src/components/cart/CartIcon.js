import { useContext,useState } from 'react';
import { AppContext } from "../context/AppContext";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';

const CartIcon = ({show , setShow}) => {
	const [ cart ] = useContext( AppContext );
	const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
	const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';

	return (
		<>
		<style jsx>
			{
			`
			.navbar-link {
				&:link,
				&:visited {
				  display: inline-block;
				  text-decoration: none;
				  font-size: 1.8rem;
				  font-weight: 500;
				  text-transform: uppercase;
				  color: ${({ theme }) => theme.colors.black};
				  transition: color 0.3s linear;
				}
				&:hover,
				&:active {
				  color: ${({ theme }) => theme.colors.helper};
				}
			  }
			}
			.cart-trolley--link {
				position: relative;
				.cart-trolley {
				  position: relative;
				  font-size: 3.2rem;
				}
				.cart-total--item {
					width: 2.4rem;
					height: 2.4rem;
					position: absolute;
					background-color: #000;
					color: #000;
					border-radius: 50%;
					display: grid;
					place-items: center;
					top: -20%;
					left: 70%;
					background-color: #ffff;
				  }
				}
				
				.cart-total--item {
					width: 4.2rem;
					height: 4.2rem;
					font-size: 2rem;
				  }
			`
			}
		</style>
		{/* // <Link href="/cart"> */}
		 
			<a onClick={() => setShow(!show)} className="navbar-link cursor-pointer cart-trolley--link right-3 top-4 lg:top-5  absolute ">
				<FiShoppingCart className="cart-trolley text-white text-[2rem] relative" />
				{ productsCount ? <span className="ml-1 cart-total--item text-white grid  h-[1.4rem] w-[1.4rem] items-center text-sm absolute -top-4 left-2 rounded-full bg-red-500   text-center">{ productsCount }</span> : '' }
				{/*{ totalPrice ? <span>{ totalPrice }</span> : '' }*/}
			</a>
			
		{/* // </Link> */}
		</>
	)
};

export default CartIcon;
