import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth'
const Nav = () => {
	const { loggedIn } = useAuth();
	const [ isMenuVisible, setMenuVisibility ] = useState(false);

	return (
		<nav className="fixed top-0 w-full z-50 bg-[#fb5231] p-4">
			<div className="flex items-center justify-between flex-wrap container-fluid mx-auto">

				<div className="flex items-center flex-shrink-0 text-white mr-20">
					<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
					<span className="font-semibold text-xl tracking-tight">
					<Link href="/">
					<a className="">WooNext</a>
					</Link>
					</span>
				</div>

				{/*Menu Button*/}
				<div className="block lg:hidden">
					<Button onClick={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 border rounded text-white border-black hover:text-white hover:border-black">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</Button>
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
					<Button type="Button" className="text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-gray-100 font-medium  text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
						Log In
						</Button>
					</Link>
					<Link href="/sign-up">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Sign Up
						</a>
					</Link>
					<CartIcon/>
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
