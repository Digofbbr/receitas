import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FcClock } from "react-icons/fc";
import { FaRegStar } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaWineBottle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Recipe() {
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");
	const [loading, setLoading] = useState(true);

	const [similarRecipes, setSimilarRecipes] = useState({});

	let params = useParams();

	useEffect(() => {
		const fetchDetails = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true&addWinePairing=true&addTasteData=true`
			);
			const detailData = await data.json();
			setDetails(detailData);
			console.log(details);

			const similar = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=2`
			);
			const similarData = await similar.json();
			setSimilarRecipes(similarData);
			console.log(similarRecipes);

			setLoading(false);
		};

		fetchDetails();
	}, []);

	if (loading) {
		return (
			<div style={{ marginBottom: "50px", textAlign: "center" }}>
				Carregando...
			</div>
		);
	}

	return (
		<DetailWrapper
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h2>{details.title}</h2>
			<ImageAndInfo>
				<img src={details.image} alt="" />
				<RecipeInfo>
					<div className="pills-tag">
						{details.vegetarian && (
							<span className="tag tag--vegetarian">Vegetarian</span>
						)}
						{details.vegan && <span className="tag tag--vegan">Vegan</span>}
						{details.glutenFree && (
							<span className="tag tag--glutenFree">Gluten Free</span>
						)}
					</div>
					{details.cuisines.length > 0 && (
						<CuisineSectionWrapper>
							<h5>Cuisines:</h5>
							<CuisineSection>
								{details.cuisines.map((cuisine) => (
									<p>{cuisine}</p>
								))}
							</CuisineSection>
						</CuisineSectionWrapper>
					)}

					<ul className="icons-info">
						<li className="meal-attribute">
							<FcClock />
							<span>
								<strong>{details.readyInMinutes}</strong> minutes
							</span>
						</li>
						<li className="meal-attribute star-wrapper">
							<FaRegStar className="star" />
							<span>
								Spoon Score:{" "}
								<strong>{details.spoonacularScore.toFixed(2)}</strong>
							</span>
						</li>
					</ul>
					<WineSection>
						{details.winePairing.pairedWines && (
							<h4>
								Paired Wines <FaWineGlassAlt />
							</h4>
						)}
						<ul className="wine-list">
							{details.winePairing.pairedWines.map((wine) => {
								return (
									<li className="wine-name">
										<FaWineBottle />
										{wine}
									</li>
								);
							})}
						</ul>
					</WineSection>
				</RecipeInfo>
			</ImageAndInfo>
			<Info
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 0.5, delay: 1 }}
			>
				<Button
					className={activeTab === "instructions" ? "active" : ""}
					onClick={() => setActiveTab("instructions")}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === "ingredients" ? "active" : ""}
					onClick={() => setActiveTab("ingredients")}
				>
					Ingredients
				</Button>
				{activeTab === "instructions" && (
					<motion.div
						animate={{ y: 0, opacity: 1 }}
						initial={{ y: 50, opacity: 0 }}
						exit={{ y: -50, opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
						<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
					</motion.div>
				)}
				{activeTab === "ingredients" && (
					<motion.div
						animate={{ y: 0, opacity: 1 }}
						initial={{ y: 50, opacity: 0 }}
						exit={{ y: -50, opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<ul>
							{details.extendedIngredients?.map((ingredient) => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
						</ul>
					</motion.div>
				)}
			</Info>
			<SimilarRecipes>
				<h3>Outras receitas</h3>
				<div className="similar-recipes">
					{similarRecipes.recipes.map((similar) => {
						return (
							<Link to={"/recipe/" + similar.id} className="card-similar">
								<h3>{similar.title}</h3>
								<img src={similar.image} alt="" />
							</Link>
						);
					})}
				</div>
			</SimilarRecipes>
		</DetailWrapper>
	);
}

const DetailWrapper = styled(motion.div)`
	margin-top: 4rem;
	margin-bottom: 5rem;
	display: flex;
	flex-direction: column;

	h2 {
		margin-bottom: 2rem;
	}

	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}
	img {
		border-radius: 10px;
		object-fit: cover;
		max-width: 50%;
		align-self: flex-start;

		@media (max-width: 600px) {
			width: clamp(260px, 60%, 400px);
			max-width: none;
		}
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
		padding-left: 20px;
	}
`;
const ImageAndInfo = styled.div`
	display: flex;
	gap: 5rem;

	@media (max-width: 1024px) {
		gap: 2rem;
	}

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: white;
	border: 2px solid black;
	font-weight: 600;
	margin-right: 2rem;
	cursor: pointer;

	@media (max-width: 400px) {
		&:first-child {
			margin-bottom: 30px;
		}
	}
`;

const Info = styled(motion.div)`
	margin-top: 5rem;

	@media (max-width: 600px) {
		margin-top: 2rem;

		h3 {
			font-size: clamp(1rem, 50%, 2rem);
		}
	}
`;

const RecipeInfo = styled.div`
	.pills-tag {
		display: flex;
		gap: 15px;

		@media (max-width: 768px) {
			gap: 10px;
		}
	}

	.tag {
		display: inline-block;
		padding: 0.4rem 0.8rem;
		font-size: 12px;
		text-transform: uppercase;
		background-color: #51cf66;
		color: #333;
		border-radius: 100px;
		font-weight: 600;

		@media (max-width: 768px) {
			display: flex;
			align-items: center;
		}
	}

	.tag--vegetarian {
		background-color: #51cf66;
	}

	.tag--vegan {
		background-color: #94d82d;
	}

	.tag--glutenFree {
		background-color: #98fb98;
	}

	.icons-info {
		display: flex;
		gap: 30px;
		list-style: none;
		padding: 0;

		@media (max-width: 1024px) {
			li {
				font-size: 1rem;
			}
		}

		.meal-attribute {
			display: flex;
			align-items: center;
			gap: 8px;
			svg {
				font-size: 25px;
			}
			&.star-wrapper {
				svg {
					color: gold;
				}
			}
		}
	}
`;

const CuisineSectionWrapper = styled.div`
	margin-top: 24px;
	margin-bottom: 10px;
	h5 {
		font-size: 16px;
	}
`;

const CuisineSection = styled.div`
	margin-top: 5px;
	display: flex;
	gap: 15px;
	p {
		font-size: 14px;
		font-style: italic;
	}
`;

const WineSection = styled.div`
	margin-top: 2rem;
	h4 {
		font-size: 24px;
		color: #800020;
	}

	.wine-list {
		margin-top: 0;
		color: #800020;
		list-style: none;
		gap: 5px;
		padding: 0;
	}

	.wine-name {
		text-transform: capitalize;
		color: black;
		display: flex;
		align-items: center;
		gap: 8px;
	}
`;

const SimilarRecipes = styled.div`
	.similar-recipes {
		display: flex;
		gap: 25px;
		flex-wrap: wrap;
	}
	.card-similar {
		max-width: 300px;
		border-radius: 10px;
		position: relative;
		h3 {
			font-size: 15px;
			position: absolute;
			bottom: -15px;
			background: white;
			padding-inline: 10px;
			border-radius: 0px 10px 10px 0px;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			max-width: none;
		}
	}
`;

export default Recipe;
