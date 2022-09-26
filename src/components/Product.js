import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ( props ) => {
	const { product } = props;
	const showToastMessage = () => {
        toast.success('Product Added Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			
			<div className="product bg-white mb-5 rounded-md">


				<Link href={ `/product/${ product?.slug }`} >
					<a>
						<Image
							className="object-cover bg-gray-100"
							width="308"
							height="308"
							loading="lazy"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
							defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
							altText={product?.image?.altText ?? product?.slug}
						/>
					</a>
				</Link>
				<div className="product-info">
					<h3 className="product-title h-20 text-xl px-3 mt-3 font-medium text-gray-800">
						{ product.name ? product.name : '' }
					</h3>
					{/* <div className="product-description mx-3 font-semibold text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: (product?.description)}}/> */}
					<div className='flex justify-between items-center mx-2 my-2 mt-2'>
					<Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
					
					<AddToCartButton   showToastMessage={showToastMessage}   product={ product }/>
					</div>
				</div>
				<ToastContainer />
			</div>

		) : (
			''
		)
	);
};

export default Product;
