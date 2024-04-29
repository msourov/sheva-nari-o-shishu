import { useState, useEffect, useContext, useRef } from "react";
import { HomepageContext } from "../pages/Homepage";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

function Hero() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const itemsFromContext = useContext(HomepageContext);
	// console.log(itemsFromContext);
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(itemsFromContext.hero);
	}, []);

	const fadeInUp = {
		opacity: 0,
		y: 20, // Initial state with some opacity and slight upward position
		transition: { duration: 0.5 }, // Animation duration
	};

	const fadeInUpVisible = {
		opacity: 1,
		y: 0, // Animate to full opacity and original position
	};

	if (!items.length) {
		// Check for empty array
		return <p>Loading Hero Content...</p>; // More informative message
	}

	const { title, description, image } = items[0] || {}; // Check for empty array
	const descriptionText = description.split(" ");
	return (
		<motion.div
			initial={{
				opacity: 0,
				// if odd index card,slide from right instead of left
				x: 50,
			}}
			whileInView={{
				opacity: 1,
				x: 0, // Slide in to its original position
				transition: {
					duration: 1, // Animation duration
				},
			}}
			viewport={{ once: true }}
			className="py-32 border-2 border-gray-300 overflow-hidden bg-cover bg-center outline-red-700"
			style={{
				backgroundImage: `url(http://192.168.60.35:1336${image?.url})`,
				// overflow: "scroll",
			}} // Optional chaining for image.url
		>
			<h1 className="text-left ml-8  text-orange-500 text-3xl ">{title}</h1>
			<p className=" text-white text-left w-2/5 ml-8 mt-16 text-xl">
				{descriptionText.map((el, i) => (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.25,
							delay: i / 10,
						}}
						key={i}
					>
						{el}{" "}
					</motion.span>
				))}
			</p>
		</motion.div>
	);
}

export default Hero;
