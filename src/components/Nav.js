import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Nav = () => {
	const { loggedIn } = useAuth();
	const [ isMenuVisible, setMenuVisibility ] = useState(false);

	return (
		<nav className="fixed top-0 w-full z-50 bg-[#fb5231] p-4">
			<div className="flex items-center justify-between  flex-wrap container-fluid mx-auto">
				{/*Menu button*/}
				<div className="block lg:hidden">
					<button onClick={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 ">
					{! isMenuVisible ? (<GiHamburgerMenu className="text-white text-2xl"/>) : (<AiOutlineClose className="text-white text-2xl"/>)}
					</button>
				</div>
				<div className="flex items-center text-left item-start flex-shrink-0 text-white mr-20 ">
					<img src="recpaylogo.png" alt="recpay" height={150} width={150} />
					<span className="font-semibold text-xl tracking-tight">
				
					</span>
				</div>
				<div className='lg:hidden'>
				<CartIcon/>
				</div>
				

				{/*MMenu in mobile*/}
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					<div className="text-sm font-medium uppercase lg:flex-grow">
					<Link href="/categories">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Categories
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Women
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Kids
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Home & Living
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Offers
						</a>
					</Link>
					</div>
					{!loggedIn ? 	(<>
					<div className="text-sm font-medium">
					<Link href="/log-in">
					<button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-gray-100 font-medium  text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
						Log In
						</button>
					</Link>
					<Link href="/sign-up">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Sign Up
						</a>
					</Link>
					<CartIcon className="item-center" />
					</div>
					</>):
					(<>
					<div className="text-sm font-medium">
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Wishlist
						</a>
						<CartIcon/>
						<Link href="/log-out">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Log Out
						</a>
					</Link>
					</div>
					</>)}

				</div>

			</div>
		</nav>
	)
};

export default Nav;
