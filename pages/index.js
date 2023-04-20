import Layout from "../src/components/Layout";
import { useState } from "react";
import Product from "../src/components/Product";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Slider from "../components/Slider"
import Slideshow from "../components/Slideshow"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart2 from "../components/Cart2"
export default function Home(props) {
	
	const { products, productCategories, heroCarousel } = props || {};
	const [show, setShow] = useState(false);
	const cartAddedtoast = () => {
        toast.success('Product Added Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
	const cartRemovetoast = () => {
        toast.error('Product remove Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

	return (
		<Layout>
			{/*Hero Carousel*/}
			<HeroCarousel heroCarousel={heroCarousel} />
			<Slideshow />
			{/* slideshow end */}

			
			{/*Categories*/}
			{/* <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
				</div> */}
			{/*Products*/}
			<div className="container lg:px-20 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded relative text-center transform transition duration-500 hover:scale-105" >
				<img src="mensimage.jpg" className="object-contain " alt="" />
				<div className="absolute flex top-0 items-center justify-end h-full w-full px-20">
					<div>
					<span className="text-red-600 font-bold text-2xl">save 30%</span>
					<h2 className="font-bold text-5xl text-gray-800">MEN</h2>
					</div>					
				</div>
				</div>	
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded  relative  text-center transform transition duration-500 hover:scale-105 " >
					<img src="womenimage.jpg" className="object-contain " alt="" />
					<div className="absolute flex top-0 items-center justify-end h-full w-full px-20">
					<div>
					<span className="text-red-600 font-bold text-2xl">save 60%</span>
					<h2 className="font-bold text-5xl text-gray-800">WOMEN</h2>
					</div>					
				</div>
				</div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [  ] to remove dotted border */}
            </div>
			<Slider productCategories={productCategories} />
			<section
				className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
			>
				<div className="p-5 text-2xl text-white bg-purple-300 items-center justify-center bg-opacity-50 rounded-xl">
					<span className="text-rose-500 text-7xl font-bold mx-auto">2022</span>
					<h2 className="text-6xl font-bold text-gray-800 tracking-widest">FASHION TRENDS</h2>
					<h4 className="font-bold text-3xl text-gray-600 tracking-widest">SPECIAL OFFER</h4>
				</div>
			</section>
			<div className="products container mx-auto my-32 px-4 xl:px-0">
				<h2 className="products-main-title main-title mb-5 text-xl uppercase"><span className="main-title-inner">Products</span></h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{products.length ? (
						products.slice(0, 8).map(product => <Product   cartAddedtoast={cartAddedtoast}  key={product.id} show={show} setShow={setShow} product={product} />)
					) : ''}
				</div>
			</div>
			<ToastContainer />
			<Cart2 cartRemovetoast={cartRemovetoast} show={show} setShow={setShow} />
		</Layout>
	)
};

export async function getStaticProps() {

	const { data } = await client.query({
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	});

	return {
		props: {
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
