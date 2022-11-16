import React from "react";
//These are Third party packages for smooth slideshow
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
	//Array of Images  
	const images = [
			{
			url: 'images/banner-24.png',
			caption: 'New Winter',
			caption2:'Collections 2022'
			},
			{
			url: 'images/banner-25.png',
			caption: 'New Winter',
			caption2:'Collections 2022'
			},
			{
			url: 'images/banner-26.png',
			caption: 'New Winter',
			caption2:'Collections 2022'
			},
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		 prevArrow:false,
		  //(
		// 	<div className="hidden" style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			viewBox="0 0 512 512"
		// 			fill="#2e2e2e"
		// 		>
		// 			<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
		// 		</svg>
		// 	</div>
		// ),
		 nextArrow:false 
         //(
		// 	<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			viewBox="0 0 512 512"
		// 			fill="#2e2e2e"
		// 		>
		// 			<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
		// 		</svg>
		// 	</div>
		// ),update slideshow
	};
	return (
		<div className="py-6 lg:mt-8">
			<Slide >
				{images.map((item, index) => (
					<div key={index} className="flex relative justify-center w-full h-[500px]">
						<img
							className="w-full h-[500px] object-cover  md:object-contain  rounded-lg shadow-xl"
							src={item.url}
						/>
						<div className="absolute space-y-3 lg:bottom-24 md:bottom-20 bottom-20  md:px-10 lg:left-20 md:left-10 left-6 px-4 ">
                <div className="lg:text-6xl leading-3 md:text-2xl text-2xl font-bold  text-black " dangerouslySetInnerHTML={{ __html: item.caption }}>  
                </div>
				<div className="lg:text-6xl leading-3 md:text-2xl text-2xl font-bold  text-black " dangerouslySetInnerHTML={{ __html: item.caption2 }}>
                  
				  </div>
                <p className="text-gray-600 text-lg font-bold py-4 italic">there's nothing like trend</p>
                
              </div>
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Slideshow;