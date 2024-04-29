import { useContext } from "react";
import { Card, Row } from "antd";
import { HomepageContext } from "../pages/Homepage";

const Partner = () => {
	const { partner } = useContext(HomepageContext);
	// console.log("partner", partner);
	return (
		partner && (
			<div
				style={{
					overflow: "hidden",
				}}
			>
				<h1 className="text-center text-orange-500 text-3xl my-8">
					{partner[0].title}
				</h1>
				<Row
					gutter={16}
					justify="center"
					align="middle"
					style={{ marginBottom: "1em" }}
				>
					{partner?.slice(1, partner.length)?.map((item) => (
						<Card style={{ width: 300, background: "none" }}>
							<img
								style={{ width: "240px", height: "160px" }}
								src={`http://192.168.60.35:1336${item.image.url}`}
							/>
							{/* <p className="font-medium text-center">{item.about}</p> */}
						</Card>
					))}
				</Row>
			</div>
		)
	);
};

export default Partner;
