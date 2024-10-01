import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import { FcClock } from "react-icons/fc";
import { FaRegStar } from "react-icons/fa";

function Veggie() {
	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		const check = localStorage.getItem("veggie");

		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
			);
			const data = await api.json();
			localStorage.setItem("veggie", JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};

	return (
		<div>
			<Wrapper>
				<h3>Escolhas Vegetarianas</h3>
				<Splide
					options={{
						perPage: 3,
						arrows: true,
						pagination: false,
						drag: "free",
						gap: "5rem",
						breakpoints: {
							900: {
								perPage: 2,
								gap: "2rem",
								padding: { left: "5%", right: "5%" },
							},
							580: {
								perPage: 1,
							},
						},
					}}
				>
					{veggie.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<Card>
									<Link to={"/recipe/" + recipe.id}>
										<img
											className="meal-image"
											src={recipe.image}
											alt={recipe.title}
										/>
										<div className="meal-content">
											<div className="meal-tags">
												{recipe.vegetarian && (
													<span className="tag tag--vegetarian">
														Vegetarian
													</span>
												)}
												{recipe.vegan && (
													<span className="tag tag--vegan">Vegan</span>
												)}
											</div>
											<p className="meal-title">
												<p>{recipe.title}</p>
											</p>
											<ul className="meal-attributes">
												<li className="meal-attribute">
													<FcClock />
													<span>
														<strong>{recipe.readyInMinutes}</strong> minutes
													</span>
												</li>
												{recipe.spoonacularScore && (
													<li className="meal-attribute star-wrapper">
														<FaRegStar className="star" />
														<span>
															Spoon Score:{" "}
															<strong>
																{recipe.spoonacularScore.toFixed(2)}
															</strong>
														</span>
													</li>
												)}
											</ul>
										</div>
									</Link>
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;

	@media (max-width: 768px) {
		h3 {
			text-align: center;
		}
	}
`;

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

const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
