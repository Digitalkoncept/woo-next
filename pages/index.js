import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Banner from "../components/Banner"
import Slider from "../components/Slider"
import Slideshow from "../components/Slideshow"
export default function Home(props) {
	console.log(props.productCategories);
	const { products, productCategories, heroCarousel, show, setShow } = props || {};

	return (
		<Layout>
			{/*Hero Carousel*/}
			<HeroCarousel heroCarousel={heroCarousel} />
			<Slideshow />

			<Slider productCategories={productCategories} />
			{/*Categories*/}
			{/* <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
				</div> */}
			{/*Products*/}
			<div className="products container mx-auto my-32 px-4 xl:px-0">
				<h2 className="products-main-title main-title mb-5 text-xl uppercase"><span className="main-title-inner">Products</span></h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{products.length ? (
						products.slice(0, 20).map(product => <Product key={product.id} show={show} setShow={setShow} product={product} />)
					) : ''}
				</div>
			</div>
			<section
				className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
			>
				<div className="p-5 text-2xl text-white bg-purple-300 items-center justify-center bg-opacity-50 rounded-xl">
					<span className="text-rose-500 text-7xl font-bold mx-auto">2022</span>
					<h2 className="text-6xl font-bold text-gray-800 tracking-widest">FASHION TRENDS</h2>
					<h4 className="font-bold text-3xl text-gray-600 tracking-widest">SPECIAL OFFER</h4>
				</div>
			</section>
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
