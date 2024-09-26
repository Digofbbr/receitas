import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FcClock } from "react-icons/fc";
import { FaRegStar } from "react-icons/fa";

function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
		console.log(params);
	}, [params.type]);

	const getCuisine = async (name) => {
		let data;
		if (name === "dessert") {
			data = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${name}&number=12&addRecipeInformation=true`
			);
		} else {
			data = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12&addRecipeInformation=true`
			);
		}
		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	return (
		<>
			<Wrapper>
				<h3>Cuisine: {params.type}</h3>
				<Grid
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{cuisine.map((item) => {
						return (
							<Card key={item.id}>
								{console.log(item)}
								<Link to={"/recipe/" + item.id}>
									<img src={item.image} alt="" className="meal-image" />
									<div className="meal-content">
										<div className="meal-tags">
											{item.vegetarian && (
												<span className="tag tag--vegetarian">Vegetarian</span>
											)}
											{item.vegan && (
												<span className="tag tag--vegan">Vegan</span>
											)}
										</div>
										<p className="meal-title">
											<p>{item.title}</p>
										</p>
										<ul className="meal-attributes">
											<li className="meal-attribute">
												<FcClock />
												<span>
													<strong>{item.readyInMinutes}</strong> minutes
												</span>
											</li>
											<li className="meal-attribute star-wrapper">
												<FaRegStar className="star" />
												<span>
													Spoon Score:{" "}
													<strong>{item.spoonacularScore.toFixed(2)}</strong>
												</span>
											</li>
										</ul>
									</div>
								</Link>
							</Card>
						);
					})}
				</Grid>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	grid-gap: 3rem;
`;

// const Card = styled.div`
//     img{
//         width: 100%;
//         border-radius: 2rem;
//     }
//     a{
//         text-decoration: none;
//     }
//     h4{
//         text-align: center;
//         padding: 1rem;
//     }
// `

const Card = styled.div`
	border-radius: 2rem;
	min-height: 25rem;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	background-color: white;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
	&:hover {
		background: aliceblue;
		.meal-image {
			scale: 1.05;
		}
	}

	a {
		text-decoration: none !important;
	}

	.meal-image {
		width: 100%;
		height: 225px;
		object-fit: cover;
		transition: scale 0.5s ease-in-out;
	}

	.meal-content {
		padding: 32px 16px;
	}

	.meal-tags {
		margin-bottom: 1.2rem;
		display: flex;
		gap: 0.4rem;
	}

	.tag {
		display: inline-block;
		padding: 0.4rem 0.8rem;
		font-size: 9px;
		text-transform: uppercase;
		background-color: #51cf66;
		color: #333;
		border-radius: 100px;
		font-weight: 600;
	}

	.tag--vegetarian {
		background-color: #51cf66;
	}

	.tag--vegan {
		background-color: #94d82d;
	}

	.meal-title {
		font-size: 20px;
		line-height: 32px;
		color: #333;
		font-weight: 600;
		margin-bottom: 3rem;
	}

	.meal-attributes {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.meal-attribute {
		font-size: 16px;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.meal-icon {
		height: 2.4rem;
		width: 2.4rem;
		color: #e67e22;
	}

	svg {
		font-size: 25px;
	}

	.star-wrapper {
		svg {
			color: gold;
		}
	}
`;

export default Cuisine;
