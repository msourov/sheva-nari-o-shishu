import { useContext } from "react";
import { Card, Row } from "antd";
import { HomepageContext } from "../pages/Homepage";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const Foundation = () => {
	const { Foundation } = useContext(HomepageContext);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		Foundation && (
			<div
				style={{
					overflow: "hidden",
				}}
			>
				<h1 className="text-center text-orange-500 text-3xl py-16 font-medium">
					{Foundation[0].title}
				</h1>
				<Row
					gutter={16}
					justify="space-evenly"
					align="middle"
					style={{ marginBottom: "1em" }}
				>
					{Foundation?.slice(1, Foundation.length)?.map((item, index) => (
						<div
							style={{
								background: "none",
								display: "flex",
								flexDirection: "column",
								// gap: "1em",
								justifyContent: "space-between",
								alignItems: "center",
								// height: "240px",
								// width: "30%",
								// outline: "auto",
								overflow: "hidden",
							}}
							key={`fd${index}`}
						>
							<img
								style={{ width: "240px", height: "180px", overflow: "hidden" }}
								src={`http://192.168.60.35:1336${item.image.url}`}
							/>
							<p
								className="font-bold text-center max-w-full w-2/5 bg-white h-46 flex-1"
								style={{ alignSelf: "center" }}
							>
								{item.about}
							</p>
						</div>
					))}
				</Row>
			</div>
		)
	);
};

export default Foundation;
