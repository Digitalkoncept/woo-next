import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import { useState } from 'react';
import AuthModal from '../../components/AuthModal';
import useAuth from '../../hooks/useAuth'
import { useSession, signOut } from 'next-auth/react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Cart2 from "../../components/Cart2"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogOut from '../../pages/log-out';
import Image from 'next/image';
const Nav = () => {
	const { data: session, status } = useSession();
	const user = session?.user;
	console.log(session)
	const isLoadingUser = status === 'loading';
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);
  
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
	const [show, setShow] = useState(false);
	const cartRemovetoast = () => {
        toast.error('Product remove Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

	return (
		<nav className="fixed top-0 w-full z-50 bg-gray-900 py-2 px-4">
			<div className="flex items-center justify-between  flex-wrap container-fluid mx-auto">
				{/*Menu button*/}
				<div className="block lg:hidden">
					<button onClick={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 ">
					{! isMenuVisible ? (<GiHamburgerMenu className="text-white text-2xl"/>) : (<AiOutlineClose className="text-white text-2xl"/>)}
					</button>
				</div>
				<div className="flex items-center text-left item-start flex-shrink-0 text-white lg:mr-20 ">
					<Link href="/">
					<img src="/recpaylogo.png" className='cursor-pointer object-contain w-[130px] sm:w-[150px]' alt="recpay" height={45} width={150} />
					</Link>
					<span className="font-semibold text-xl tracking-tight">
				
					</span>
				</div>
				<div className='lg:hidden'>
				{!user ? (
				<button onClick={openModal} type="button" className=" text-white bg-transparent hover:bg-gray-200  focus:outline-none focus:ring-gray-100 font-bold  text-sm lg:px-6 lg:py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-6 mb-2">
						Log In
				</button>):(<Link href={'/profile'}>
						<div className="shrink-0 mr-10 lg:mt-0 lg:inline-block mt-4 block  items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
						{user?.image?(
							 <Image
							 src={user?.image}
							 alt={user?.name || 'Avatar'}
							 layout="fill"
						   />)
						   :(
						<span href="#responsive-header" className="block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</span>
						   )}
						</div>
						</Link>)
			}
				<CartIcon show={show} setShow={setShow}/>
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
					{!user ? 	(<>
						<div className="text-sm font-medium lg:mr-12">
						<button onClick={openModal} type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-gray-100 font-medium  text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
						Log In
						</button>
						
					{/* <Link href="/sign-up">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Sign Up
						</a>
					</Link> */}
					<div className='block'>
					<CartIcon show={show} setShow={setShow}  className="block item-center " />
					</div>
						</div>
					</>):
					(<>
					<div className="text-sm font-medium">
						<Link href={'/my-account/dashboard'}>
						<div className="shrink-0 hidden cursor-pointer  mr-10 lg:mt-0 lg:inline-block mt-3   items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
						{user?.image?(
							 <Image
							 src={user?.image}
							 alt={user?.name || 'Avatar'}
							 layout="fill"
						   />)
						   :(
						<span href="#responsive-header" className="block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</span>
						   )}
						</div>
						</Link>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Wishlist
						</a>
						<div className='hidden lg:inline-block '>
						<CartIcon    show={show} setShow={setShow} onClick={() => setShow(!show)} />
						</div>
						
						<a onClick={signOut} className=" cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
							Log Out
						</a>
					
					</div>
					</>)}

				</div>

			</div>
			<AuthModal show={showModal} onClose={closeModal} />
			<Cart2 cartRemovetoast={cartRemovetoast} show={show} setShow={setShow} />
		</nav>
	)
};
export default Nav;
