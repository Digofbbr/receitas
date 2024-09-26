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

	const [similarRecipes, setSimilarRecipes] = useState({});

	let params = useParams();

	const fetchDetails = async () => {
		//const similar = await fetch(
		//	`https://api.spoonacular.com/recipes/${params.id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=2`
		//);
		//const similarData = await similar.json();
		//await setSimilarRecipes(similarData);
		//console.log(similarRecipes);
		// const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true&addWinePairing=true&addTasteData=true`)
		// const detailData = await data.json()
		// await setDetails(detailData)
		// console.log(details)
	};

	const test = {
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		dairyFree: true,
		veryHealthy: false,
		cheap: false,
		veryPopular: false,
		sustainable: false,
		lowFodmap: false,
		weightWatcherSmartPoints: 1,
		gaps: "no",
		preparationMinutes: null,
		cookingMinutes: null,
		aggregateLikes: 2,
		healthScore: 2,
		creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		license: "CC BY 3.0",
		sourceName: "Foodista",
		pricePerServing: 57.38,
		extendedIngredients: [
			{
				id: 12151,
				aisle: "Nuts",
				image: "pistachios.jpg",
				consistency: "SOLID",
				name: "pistachios",
				nameClean: "pistachio nuts",
				original: "½ cup pistachios, hulled",
				originalName: "pistachios, hulled",
				amount: 0.5,
				unit: "cup",
				meta: ["hulled"],
				measures: {
					us: {
						amount: 0.5,
						unitShort: "cups",
						unitLong: "cups",
					},
					metric: {
						amount: 61.5,
						unitShort: "g",
						unitLong: "grams",
					},
				},
			},
			{
				id: 12179,
				aisle: "Baking",
				image: "shredded-coconut.jpg",
				consistency: "SOLID",
				name: "coconut",
				nameClean: "sweetened shredded coconut",
				original: "½ cup sweetened shredded coconut",
				originalName: "sweetened shredded coconut",
				amount: 0.5,
				unit: "cup",
				meta: ["shredded", "sweetened"],
				measures: {
					us: {
						amount: 0.5,
						unitShort: "cups",
						unitLong: "cups",
					},
					metric: {
						amount: 45,
						unitShort: "g",
						unitLong: "grams",
					},
				},
			},
			{
				id: 19165,
				aisle: "Baking",
				image: "cocoa-powder.png",
				consistency: "SOLID",
				name: "cocoa powder",
				nameClean: "cacao powder",
				original: "¼ cup cocoa powder",
				originalName: "cocoa powder",
				amount: 0.25,
				unit: "cup",
				meta: [],
				measures: {
					us: {
						amount: 0.25,
						unitShort: "cups",
						unitLong: "cups",
					},
					metric: {
						amount: 21.5,
						unitShort: "g",
						unitLong: "grams",
					},
				},
			},
			{
				id: 2047,
				aisle: "Spices and Seasonings",
				image: "salt.jpg",
				consistency: "SOLID",
				name: "salt",
				nameClean: "table salt",
				original:
					"¼ - ½ teaspoon salt, start with ¼ teaspoon and add more to taste",
				originalName:
					"teaspoon salt, start with ¼ teaspoon and add more to taste",
				amount: 0.25,
				unit: "",
				meta: ["with ¼ teaspoon and add more to taste"],
				measures: {
					us: {
						amount: 0.25,
						unitShort: "",
						unitLong: "",
					},
					metric: {
						amount: 0.25,
						unitShort: "",
						unitLong: "",
					},
				},
			},
			{
				id: 1052050,
				aisle: "Baking",
				image: "vanilla.jpg",
				consistency: "SOLID",
				name: "vanilla",
				nameClean: "vanilla",
				original: "1 teaspoon vanilla",
				originalName: "vanilla",
				amount: 1,
				unit: "teaspoon",
				meta: [],
				measures: {
					us: {
						amount: 1,
						unitShort: "tsp",
						unitLong: "teaspoon",
					},
					metric: {
						amount: 1,
						unitShort: "tsp",
						unitLong: "teaspoon",
					},
				},
			},
			{
				id: 9421,
				aisle: "Produce",
				image: "dates.jpg",
				consistency: "SOLID",
				name: "medjool dates",
				nameClean: "medjool dates",
				original: "14 medjool dates, pitted",
				originalName: "medjool dates, pitted",
				amount: 14,
				unit: "",
				meta: ["pitted"],
				measures: {
					us: {
						amount: 14,
						unitShort: "",
						unitLong: "",
					},
					metric: {
						amount: 14,
						unitShort: "",
						unitLong: "",
					},
				},
			},
			{
				id: 19904,
				aisle: "Sweet Snacks",
				image: "dark-chocolate-pieces.jpg",
				consistency: "SOLID",
				name: "chocolate",
				nameClean: "dark chocolate",
				original:
					"Dark chocolate (mixed with a touch of coconut oil), cocoa powder, and shredded coconut for topping",
				originalName:
					"Dark chocolate (mixed with a touch of coconut oil), cocoa powder, and shredded coconut for topping",
				amount: 15,
				unit: "servings",
				meta: [
					"mixed",
					"dark",
					"shredded",
					"with a touch of coconut oil), cocoa powder, and  coconut for topping",
				],
				measures: {
					us: {
						amount: 15,
						unitShort: "servings",
						unitLong: "servings",
					},
					metric: {
						amount: 15,
						unitShort: "servings",
						unitLong: "servings",
					},
				},
			},
		],
		id: 639165,
		title: "Chocolate Pistachio Energy Bites",
		readyInMinutes: 45,
		servings: 15,
		sourceUrl:
			"https://www.foodista.com/recipe/47KCTH7P/chocolate-pistachio-energy-bites",
		image: "https://img.spoonacular.com/recipes/639165-556x370.jpg",
		imageType: "jpg",
		nutrition: {
			nutrients: [
				{
					name: "Calories",
					amount: 110.14,
					unit: "kcal",
					percentOfDailyNeeds: 5.51,
				},
				{
					name: "Fat",
					amount: 3.58,
					unit: "g",
					percentOfDailyNeeds: 5.51,
				},
				{
					name: "Saturated Fat",
					amount: 1.53,
					unit: "g",
					percentOfDailyNeeds: 9.58,
				},
				{
					name: "Carbohydrates",
					amount: 20.67,
					unit: "g",
					percentOfDailyNeeds: 6.89,
				},
				{
					name: "Net Carbohydrates",
					amount: 17.98,
					unit: "g",
					percentOfDailyNeeds: 6.54,
				},
				{
					name: "Sugar",
					amount: 16.8,
					unit: "g",
					percentOfDailyNeeds: 18.66,
				},
				{
					name: "Cholesterol",
					amount: 0.03,
					unit: "mg",
					percentOfDailyNeeds: 0.01,
				},
				{
					name: "Sodium",
					amount: 8.65,
					unit: "mg",
					percentOfDailyNeeds: 0.38,
				},
				{
					name: "Alcohol",
					amount: 0.09,
					unit: "g",
					percentOfDailyNeeds: 100,
				},
				{
					name: "Alcohol %",
					amount: 0.36,
					unit: "%",
					percentOfDailyNeeds: 100,
				},
				{
					name: "Caffeine",
					amount: 4.1,
					unit: "mg",
					percentOfDailyNeeds: 1.37,
				},
				{
					name: "Protein",
					amount: 1.68,
					unit: "g",
					percentOfDailyNeeds: 3.36,
				},
				{
					name: "Manganese",
					amount: 0.26,
					unit: "mg",
					percentOfDailyNeeds: 13.24,
				},
				{
					name: "Copper",
					amount: 0.22,
					unit: "mg",
					percentOfDailyNeeds: 10.8,
				},
				{
					name: "Fiber",
					amount: 2.7,
					unit: "g",
					percentOfDailyNeeds: 10.79,
				},
				{
					name: "Magnesium",
					amount: 28.02,
					unit: "mg",
					percentOfDailyNeeds: 7.01,
				},
				{
					name: "Vitamin B6",
					amount: 0.14,
					unit: "mg",
					percentOfDailyNeeds: 6.79,
				},
				{
					name: "Potassium",
					amount: 237.37,
					unit: "mg",
					percentOfDailyNeeds: 6.78,
				},
				{
					name: "Phosphorus",
					amount: 50.8,
					unit: "mg",
					percentOfDailyNeeds: 5.08,
				},
				{
					name: "Iron",
					amount: 0.74,
					unit: "mg",
					percentOfDailyNeeds: 4.1,
				},
				{
					name: "Vitamin B1",
					amount: 0.05,
					unit: "mg",
					percentOfDailyNeeds: 3.29,
				},
				{
					name: "Zinc",
					amount: 0.37,
					unit: "mg",
					percentOfDailyNeeds: 2.5,
				},
				{
					name: "Vitamin B3",
					amount: 0.47,
					unit: "mg",
					percentOfDailyNeeds: 2.36,
				},
				{
					name: "Vitamin B5",
					amount: 0.23,
					unit: "mg",
					percentOfDailyNeeds: 2.31,
				},
				{
					name: "Calcium",
					amount: 21.68,
					unit: "mg",
					percentOfDailyNeeds: 2.17,
				},
				{
					name: "Folate",
					amount: 6.15,
					unit: "µg",
					percentOfDailyNeeds: 1.54,
				},
				{
					name: "Selenium",
					amount: 1.06,
					unit: "µg",
					percentOfDailyNeeds: 1.52,
				},
				{
					name: "Vitamin B2",
					amount: 0.03,
					unit: "mg",
					percentOfDailyNeeds: 1.48,
				},
				{
					name: "Vitamin A",
					amount: 50.78,
					unit: "IU",
					percentOfDailyNeeds: 1.02,
				},
			],
			properties: [
				{
					name: "Glycemic Index",
					amount: 2.73,
					unit: "",
				},
				{
					name: "Glycemic Load",
					amount: 0.21,
					unit: "",
				},
				{
					name: "Inflammation Score",
					amount: -2,
					unit: "",
				},
				{
					name: "Nutrition Score",
					amount: 3.677391303136297,
					unit: "%",
				},
			],
			flavonoids: [
				{
					name: "Cyanidin",
					amount: 0.3,
					unit: "mg",
				},
				{
					name: "Petunidin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Delphinidin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Malvidin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Pelargonidin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Peonidin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Catechin",
					amount: 1.08,
					unit: "mg",
				},
				{
					name: "Epigallocatechin",
					amount: 0.08,
					unit: "mg",
				},
				{
					name: "Epicatechin",
					amount: 2.85,
					unit: "mg",
				},
				{
					name: "Epicatechin 3-gallate",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Epigallocatechin 3-gallate",
					amount: 0.02,
					unit: "mg",
				},
				{
					name: "Theaflavin",
					amount: 0,
					unit: "",
				},
				{
					name: "Thearubigins",
					amount: 0,
					unit: "",
				},
				{
					name: "Eriodictyol",
					amount: 0,
					unit: "",
				},
				{
					name: "Hesperetin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Naringenin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Apigenin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Luteolin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Isorhamnetin",
					amount: 0,
					unit: "",
				},
				{
					name: "Kaempferol",
					amount: 0,
					unit: "",
				},
				{
					name: "Myricetin",
					amount: 0,
					unit: "mg",
				},
				{
					name: "Quercetin",
					amount: 0.2,
					unit: "mg",
				},
				{
					name: "Theaflavin-3,3'-digallate",
					amount: 0,
					unit: "",
				},
				{
					name: "Theaflavin-3'-gallate",
					amount: 0,
					unit: "",
				},
				{
					name: "Theaflavin-3-gallate",
					amount: 0,
					unit: "",
				},
				{
					name: "Gallocatechin",
					amount: 0,
					unit: "mg",
				},
			],
			ingredients: [
				{
					id: 12151,
					name: "pistachios",
					amount: 0.03,
					unit: "cup",
					nutrients: [
						{
							name: "Vitamin B12",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.05,
						},
						{
							name: "Vitamin B3",
							amount: 0.05,
							unit: "mg",
							percentOfDailyNeeds: 2.36,
						},
						{
							name: "Carbohydrates",
							amount: 1.13,
							unit: "g",
							percentOfDailyNeeds: 6.89,
						},
						{
							name: "Calcium",
							amount: 4.3,
							unit: "mg",
							percentOfDailyNeeds: 2.17,
						},
						{
							name: "Vitamin D",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Manganese",
							amount: 0.05,
							unit: "mg",
							percentOfDailyNeeds: 13.24,
						},
						{
							name: "Saturated Fat",
							amount: 0.23,
							unit: "g",
							percentOfDailyNeeds: 9.58,
						},
						{
							name: "Fat",
							amount: 1.86,
							unit: "g",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Selenium",
							amount: 0.29,
							unit: "µg",
							percentOfDailyNeeds: 1.52,
						},
						{
							name: "Vitamin E",
							amount: 0.09,
							unit: "mg",
							percentOfDailyNeeds: 0.76,
						},
						{
							name: "Phosphorus",
							amount: 20.09,
							unit: "mg",
							percentOfDailyNeeds: 5.08,
						},
						{
							name: "Copper",
							amount: 0.05,
							unit: "mg",
							percentOfDailyNeeds: 10.8,
						},
						{
							name: "Sodium",
							amount: 0.04,
							unit: "mg",
							percentOfDailyNeeds: 0.38,
						},
						{
							name: "Sugar",
							amount: 0.31,
							unit: "g",
							percentOfDailyNeeds: 18.66,
						},
						{
							name: "Vitamin C",
							amount: 0.23,
							unit: "mg",
							percentOfDailyNeeds: 0.3,
						},
						{
							name: "Net Carbohydrates",
							amount: 0.71,
							unit: "g",
							percentOfDailyNeeds: 6.54,
						},
						{
							name: "Folic Acid",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Iron",
							amount: 0.16,
							unit: "mg",
							percentOfDailyNeeds: 4.1,
						},
						{
							name: "Potassium",
							amount: 42.03,
							unit: "mg",
							percentOfDailyNeeds: 6.78,
						},
						{
							name: "Vitamin A",
							amount: 17.02,
							unit: "IU",
							percentOfDailyNeeds: 1.02,
						},
						{
							name: "Mono Unsaturated Fat",
							amount: 0.98,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B5",
							amount: 0.02,
							unit: "mg",
							percentOfDailyNeeds: 2.31,
						},
						{
							name: "Vitamin B2",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 1.48,
						},
						{
							name: "Zinc",
							amount: 0.09,
							unit: "mg",
							percentOfDailyNeeds: 2.5,
						},
						{
							name: "Poly Unsaturated Fat",
							amount: 0.56,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B6",
							amount: 0.07,
							unit: "mg",
							percentOfDailyNeeds: 6.79,
						},
						{
							name: "Caffeine",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.37,
						},
						{
							name: "Trans Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 3,
						},
						{
							name: "Cholesterol",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.01,
						},
						{
							name: "Magnesium",
							amount: 4.96,
							unit: "mg",
							percentOfDailyNeeds: 7.01,
						},
						{
							name: "Fiber",
							amount: 0.42,
							unit: "g",
							percentOfDailyNeeds: 10.79,
						},
						{
							name: "Fluoride",
							amount: 0.14,
							unit: "mg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Folate",
							amount: 2.09,
							unit: "µg",
							percentOfDailyNeeds: 1.54,
						},
						{
							name: "Calories",
							amount: 23.04,
							unit: "kcal",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Vitamin B1",
							amount: 0.04,
							unit: "mg",
							percentOfDailyNeeds: 3.29,
						},
						{
							name: "Alcohol",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 100,
						},
						{
							name: "Protein",
							amount: 0.83,
							unit: "g",
							percentOfDailyNeeds: 3.36,
						},
					],
				},
				{
					id: 12179,
					name: "coconut",
					amount: 0.03,
					unit: "cup",
					nutrients: [
						{
							name: "Vitamin B12",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.05,
						},
						{
							name: "Vitamin B3",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 2.36,
						},
						{
							name: "Carbohydrates",
							amount: 1.43,
							unit: "g",
							percentOfDailyNeeds: 6.89,
						},
						{
							name: "Calcium",
							amount: 0.45,
							unit: "mg",
							percentOfDailyNeeds: 2.17,
						},
						{
							name: "Vitamin D",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Manganese",
							amount: 0.07,
							unit: "mg",
							percentOfDailyNeeds: 13.24,
						},
						{
							name: "Vitamin K",
							amount: 0.01,
							unit: "µg",
							percentOfDailyNeeds: 0.69,
						},
						{
							name: "Saturated Fat",
							amount: 0.94,
							unit: "g",
							percentOfDailyNeeds: 9.58,
						},
						{
							name: "Choline",
							amount: 0.58,
							unit: "mg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Fat",
							amount: 1.06,
							unit: "g",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Selenium",
							amount: 0.5,
							unit: "µg",
							percentOfDailyNeeds: 1.52,
						},
						{
							name: "Vitamin E",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 0.76,
						},
						{
							name: "Phosphorus",
							amount: 3.21,
							unit: "mg",
							percentOfDailyNeeds: 5.08,
						},
						{
							name: "Copper",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 10.8,
						},
						{
							name: "Sodium",
							amount: 7.86,
							unit: "mg",
							percentOfDailyNeeds: 0.38,
						},
						{
							name: "Sugar",
							amount: 1.3,
							unit: "g",
							percentOfDailyNeeds: 18.66,
						},
						{
							name: "Vitamin C",
							amount: 0.02,
							unit: "mg",
							percentOfDailyNeeds: 0.3,
						},
						{
							name: "Net Carbohydrates",
							amount: 1.3,
							unit: "g",
							percentOfDailyNeeds: 6.54,
						},
						{
							name: "Folic Acid",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Iron",
							amount: 0.06,
							unit: "mg",
							percentOfDailyNeeds: 4.1,
						},
						{
							name: "Potassium",
							amount: 10.11,
							unit: "mg",
							percentOfDailyNeeds: 6.78,
						},
						{
							name: "Vitamin A",
							amount: 0,
							unit: "IU",
							percentOfDailyNeeds: 1.02,
						},
						{
							name: "Lycopene",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Mono Unsaturated Fat",
							amount: 0.05,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B5",
							amount: 0.02,
							unit: "mg",
							percentOfDailyNeeds: 2.31,
						},
						{
							name: "Vitamin B2",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.48,
						},
						{
							name: "Zinc",
							amount: 0.05,
							unit: "mg",
							percentOfDailyNeeds: 2.5,
						},
						{
							name: "Poly Unsaturated Fat",
							amount: 0.01,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B6",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 6.79,
						},
						{
							name: "Caffeine",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.37,
						},
						{
							name: "Cholesterol",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.01,
						},
						{
							name: "Magnesium",
							amount: 1.5,
							unit: "mg",
							percentOfDailyNeeds: 7.01,
						},
						{
							name: "Fiber",
							amount: 0.14,
							unit: "g",
							percentOfDailyNeeds: 10.79,
						},
						{
							name: "Folate",
							amount: 0.24,
							unit: "µg",
							percentOfDailyNeeds: 1.54,
						},
						{
							name: "Calories",
							amount: 15.03,
							unit: "kcal",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Vitamin B1",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 3.29,
						},
						{
							name: "Alcohol",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 100,
						},
						{
							name: "Protein",
							amount: 0.09,
							unit: "g",
							percentOfDailyNeeds: 3.36,
						},
					],
				},
				{
					id: 19165,
					name: "cocoa powder",
					amount: 0.02,
					unit: "cup",
					nutrients: [
						{
							name: "Vitamin B12",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.05,
						},
						{
							name: "Vitamin B3",
							amount: 0.03,
							unit: "mg",
							percentOfDailyNeeds: 2.36,
						},
						{
							name: "Carbohydrates",
							amount: 0.83,
							unit: "g",
							percentOfDailyNeeds: 6.89,
						},
						{
							name: "Calcium",
							amount: 1.83,
							unit: "mg",
							percentOfDailyNeeds: 2.17,
						},
						{
							name: "Vitamin D",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Manganese",
							amount: 0.05,
							unit: "mg",
							percentOfDailyNeeds: 13.24,
						},
						{
							name: "Vitamin K",
							amount: 0.04,
							unit: "µg",
							percentOfDailyNeeds: 0.69,
						},
						{
							name: "Saturated Fat",
							amount: 0.12,
							unit: "g",
							percentOfDailyNeeds: 9.58,
						},
						{
							name: "Choline",
							amount: 0.17,
							unit: "mg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Fat",
							amount: 0.2,
							unit: "g",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Selenium",
							amount: 0.2,
							unit: "µg",
							percentOfDailyNeeds: 1.52,
						},
						{
							name: "Vitamin E",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.76,
						},
						{
							name: "Phosphorus",
							amount: 10.52,
							unit: "mg",
							percentOfDailyNeeds: 5.08,
						},
						{
							name: "Copper",
							amount: 0.05,
							unit: "mg",
							percentOfDailyNeeds: 10.8,
						},
						{
							name: "Sodium",
							amount: 0.3,
							unit: "mg",
							percentOfDailyNeeds: 0.38,
						},
						{
							name: "Sugar",
							amount: 0.03,
							unit: "g",
							percentOfDailyNeeds: 18.66,
						},
						{
							name: "Vitamin C",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.3,
						},
						{
							name: "Net Carbohydrates",
							amount: 0.3,
							unit: "g",
							percentOfDailyNeeds: 6.54,
						},
						{
							name: "Folic Acid",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Iron",
							amount: 0.2,
							unit: "mg",
							percentOfDailyNeeds: 4.1,
						},
						{
							name: "Potassium",
							amount: 21.79,
							unit: "mg",
							percentOfDailyNeeds: 6.78,
						},
						{
							name: "Vitamin A",
							amount: 0,
							unit: "IU",
							percentOfDailyNeeds: 1.02,
						},
						{
							name: "Lycopene",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Mono Unsaturated Fat",
							amount: 0.07,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B5",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.31,
						},
						{
							name: "Vitamin B2",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.48,
						},
						{
							name: "Zinc",
							amount: 0.1,
							unit: "mg",
							percentOfDailyNeeds: 2.5,
						},
						{
							name: "Poly Unsaturated Fat",
							amount: 0.01,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B6",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 6.79,
						},
						{
							name: "Caffeine",
							amount: 3.3,
							unit: "mg",
							percentOfDailyNeeds: 1.37,
						},
						{
							name: "Cholesterol",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.01,
						},
						{
							name: "Magnesium",
							amount: 7.15,
							unit: "mg",
							percentOfDailyNeeds: 7.01,
						},
						{
							name: "Fiber",
							amount: 0.53,
							unit: "g",
							percentOfDailyNeeds: 10.79,
						},
						{
							name: "Folate",
							amount: 0.46,
							unit: "µg",
							percentOfDailyNeeds: 1.54,
						},
						{
							name: "Calories",
							amount: 3.27,
							unit: "kcal",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Vitamin B1",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 3.29,
						},
						{
							name: "Alcohol",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 100,
						},
						{
							name: "Protein",
							amount: 0.28,
							unit: "g",
							percentOfDailyNeeds: 3.36,
						},
					],
				},
				{
					id: 2047,
					name: "salt",
					amount: 0.02,
					unit: "",
					nutrients: [
						{
							name: "Vitamin B12",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.05,
						},
						{
							name: "Vitamin B3",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.36,
						},
						{
							name: "Carbohydrates",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 6.89,
						},
						{
							name: "Calcium",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.17,
						},
						{
							name: "Vitamin D",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Manganese",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 13.24,
						},
						{
							name: "Vitamin K",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.69,
						},
						{
							name: "Saturated Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 9.58,
						},
						{
							name: "Choline",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Selenium",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 1.52,
						},
						{
							name: "Vitamin E",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.76,
						},
						{
							name: "Phosphorus",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 5.08,
						},
						{
							name: "Copper",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 10.8,
						},
						{
							name: "Sodium",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.38,
						},
						{
							name: "Sugar",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 18.66,
						},
						{
							name: "Vitamin C",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.3,
						},
						{
							name: "Net Carbohydrates",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 6.54,
						},
						{
							name: "Folic Acid",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Iron",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 4.1,
						},
						{
							name: "Potassium",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 6.78,
						},
						{
							name: "Vitamin A",
							amount: 0,
							unit: "IU",
							percentOfDailyNeeds: 1.02,
						},
						{
							name: "Lycopene",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Mono Unsaturated Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B5",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.31,
						},
						{
							name: "Vitamin B2",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.48,
						},
						{
							name: "Zinc",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.5,
						},
						{
							name: "Poly Unsaturated Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B6",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 6.79,
						},
						{
							name: "Caffeine",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.37,
						},
						{
							name: "Cholesterol",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.01,
						},
						{
							name: "Magnesium",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 7.01,
						},
						{
							name: "Fiber",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 10.79,
						},
						{
							name: "Fluoride",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Folate",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 1.54,
						},
						{
							name: "Calories",
							amount: 0,
							unit: "kcal",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Vitamin B1",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 3.29,
						},
						{
							name: "Alcohol",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 100,
						},
						{
							name: "Protein",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 3.36,
						},
					],
				},
				{
					id: 1052050,
					name: "vanilla",
					amount: 0.07,
					unit: "teaspoon",
					nutrients: [
						{
							name: "Vitamin B12",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.05,
						},
						{
							name: "Vitamin B3",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.36,
						},
						{
							name: "Carbohydrates",
							amount: 0.03,
							unit: "g",
							percentOfDailyNeeds: 6.89,
						},
						{
							name: "Calcium",
							amount: 0.03,
							unit: "mg",
							percentOfDailyNeeds: 2.17,
						},
						{
							name: "Vitamin D",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Manganese",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 13.24,
						},
						{
							name: "Vitamin K",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.69,
						},
						{
							name: "Saturated Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 9.58,
						},
						{
							name: "Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Selenium",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 1.52,
						},
						{
							name: "Vitamin E",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.76,
						},
						{
							name: "Phosphorus",
							amount: 0.02,
							unit: "mg",
							percentOfDailyNeeds: 5.08,
						},
						{
							name: "Copper",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 10.8,
						},
						{
							name: "Sodium",
							amount: 0.02,
							unit: "mg",
							percentOfDailyNeeds: 0.38,
						},
						{
							name: "Sugar",
							amount: 0.03,
							unit: "g",
							percentOfDailyNeeds: 18.66,
						},
						{
							name: "Vitamin C",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.3,
						},
						{
							name: "Net Carbohydrates",
							amount: 0.03,
							unit: "g",
							percentOfDailyNeeds: 6.54,
						},
						{
							name: "Folic Acid",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Iron",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 4.1,
						},
						{
							name: "Potassium",
							amount: 0.39,
							unit: "mg",
							percentOfDailyNeeds: 6.78,
						},
						{
							name: "Vitamin A",
							amount: 0,
							unit: "IU",
							percentOfDailyNeeds: 1.02,
						},
						{
							name: "Lycopene",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Mono Unsaturated Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B5",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.31,
						},
						{
							name: "Vitamin B2",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.48,
						},
						{
							name: "Zinc",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.5,
						},
						{
							name: "Poly Unsaturated Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B6",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 6.79,
						},
						{
							name: "Caffeine",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.37,
						},
						{
							name: "Cholesterol",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.01,
						},
						{
							name: "Magnesium",
							amount: 0.03,
							unit: "mg",
							percentOfDailyNeeds: 7.01,
						},
						{
							name: "Fiber",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 10.79,
						},
						{
							name: "Folate",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 1.54,
						},
						{
							name: "Calories",
							amount: 0.77,
							unit: "kcal",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Vitamin B1",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 3.29,
						},
						{
							name: "Alcohol",
							amount: 0.09,
							unit: "g",
							percentOfDailyNeeds: 100,
						},
						{
							name: "Protein",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 3.36,
						},
					],
				},
				{
					id: 9421,
					name: "medjool dates",
					amount: 0.93,
					unit: "",
					nutrients: [
						{
							name: "Carbohydrates",
							amount: 16.79,
							unit: "g",
							percentOfDailyNeeds: 6.89,
						},
						{
							name: "Calcium",
							amount: 14.34,
							unit: "mg",
							percentOfDailyNeeds: 2.17,
						},
						{
							name: "Vitamin D",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B3",
							amount: 0.36,
							unit: "mg",
							percentOfDailyNeeds: 2.36,
						},
						{
							name: "Manganese",
							amount: 0.07,
							unit: "mg",
							percentOfDailyNeeds: 13.24,
						},
						{
							name: "Vitamin K",
							amount: 0.6,
							unit: "µg",
							percentOfDailyNeeds: 0.69,
						},
						{
							name: "Choline",
							amount: 2.22,
							unit: "mg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Fat",
							amount: 0.03,
							unit: "g",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Phosphorus",
							amount: 13.89,
							unit: "mg",
							percentOfDailyNeeds: 5.08,
						},
						{
							name: "Copper",
							amount: 0.08,
							unit: "mg",
							percentOfDailyNeeds: 10.8,
						},
						{
							name: "Sodium",
							amount: 0.22,
							unit: "mg",
							percentOfDailyNeeds: 0.38,
						},
						{
							name: "Sugar",
							amount: 14.89,
							unit: "g",
							percentOfDailyNeeds: 18.66,
						},
						{
							name: "Vitamin C",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 0.3,
						},
						{
							name: "Net Carbohydrates",
							amount: 15.29,
							unit: "g",
							percentOfDailyNeeds: 6.54,
						},
						{
							name: "Folic Acid",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Iron",
							amount: 0.2,
							unit: "mg",
							percentOfDailyNeeds: 4.1,
						},
						{
							name: "Potassium",
							amount: 155.9,
							unit: "mg",
							percentOfDailyNeeds: 6.78,
						},
						{
							name: "Vitamin A",
							amount: 33.38,
							unit: "IU",
							percentOfDailyNeeds: 1.02,
						},
						{
							name: "Lycopene",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B5",
							amount: 0.18,
							unit: "mg",
							percentOfDailyNeeds: 2.31,
						},
						{
							name: "Vitamin B2",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 1.48,
						},
						{
							name: "Zinc",
							amount: 0.1,
							unit: "mg",
							percentOfDailyNeeds: 2.5,
						},
						{
							name: "Vitamin B6",
							amount: 0.06,
							unit: "mg",
							percentOfDailyNeeds: 6.79,
						},
						{
							name: "Magnesium",
							amount: 12.1,
							unit: "mg",
							percentOfDailyNeeds: 7.01,
						},
						{
							name: "Fiber",
							amount: 1.5,
							unit: "g",
							percentOfDailyNeeds: 10.79,
						},
						{
							name: "Folate",
							amount: 3.36,
							unit: "µg",
							percentOfDailyNeeds: 1.54,
						},
						{
							name: "Vitamin B1",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 3.29,
						},
						{
							name: "Calories",
							amount: 62.05,
							unit: "kcal",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Protein",
							amount: 0.41,
							unit: "g",
							percentOfDailyNeeds: 3.36,
						},
					],
				},
				{
					id: 19904,
					name: "chocolate",
					amount: 1,
					unit: "servings",
					nutrients: [
						{
							name: "Vitamin B12",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0.05,
						},
						{
							name: "Carbohydrates",
							amount: 0.46,
							unit: "g",
							percentOfDailyNeeds: 6.89,
						},
						{
							name: "Calcium",
							amount: 0.73,
							unit: "mg",
							percentOfDailyNeeds: 2.17,
						},
						{
							name: "Vitamin B3",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 2.36,
						},
						{
							name: "Manganese",
							amount: 0.02,
							unit: "mg",
							percentOfDailyNeeds: 13.24,
						},
						{
							name: "Vitamin K",
							amount: 0.07,
							unit: "µg",
							percentOfDailyNeeds: 0.69,
						},
						{
							name: "Saturated Fat",
							amount: 0.24,
							unit: "g",
							percentOfDailyNeeds: 9.58,
						},
						{
							name: "Fat",
							amount: 0.43,
							unit: "g",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Selenium",
							amount: 0.07,
							unit: "µg",
							percentOfDailyNeeds: 1.52,
						},
						{
							name: "Vitamin E",
							amount: 0.01,
							unit: "mg",
							percentOfDailyNeeds: 0.76,
						},
						{
							name: "Phosphorus",
							amount: 3.08,
							unit: "mg",
							percentOfDailyNeeds: 5.08,
						},
						{
							name: "Copper",
							amount: 0.02,
							unit: "mg",
							percentOfDailyNeeds: 10.8,
						},
						{
							name: "Sodium",
							amount: 0.2,
							unit: "mg",
							percentOfDailyNeeds: 0.38,
						},
						{
							name: "Sugar",
							amount: 0.24,
							unit: "g",
							percentOfDailyNeeds: 18.66,
						},
						{
							name: "Net Carbohydrates",
							amount: 0.35,
							unit: "g",
							percentOfDailyNeeds: 6.54,
						},
						{
							name: "Iron",
							amount: 0.12,
							unit: "mg",
							percentOfDailyNeeds: 4.1,
						},
						{
							name: "Potassium",
							amount: 7.15,
							unit: "mg",
							percentOfDailyNeeds: 6.78,
						},
						{
							name: "Vitamin A",
							amount: 0.39,
							unit: "IU",
							percentOfDailyNeeds: 1.02,
						},
						{
							name: "Lycopene",
							amount: 0,
							unit: "µg",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Mono Unsaturated Fat",
							amount: 0.13,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B5",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 2.31,
						},
						{
							name: "Vitamin B2",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 1.48,
						},
						{
							name: "Zinc",
							amount: 0.03,
							unit: "mg",
							percentOfDailyNeeds: 2.5,
						},
						{
							name: "Poly Unsaturated Fat",
							amount: 0.01,
							unit: "g",
							percentOfDailyNeeds: 0,
						},
						{
							name: "Vitamin B6",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 6.79,
						},
						{
							name: "Caffeine",
							amount: 0.8,
							unit: "mg",
							percentOfDailyNeeds: 1.37,
						},
						{
							name: "Trans Fat",
							amount: 0,
							unit: "g",
							percentOfDailyNeeds: 3,
						},
						{
							name: "Cholesterol",
							amount: 0.03,
							unit: "mg",
							percentOfDailyNeeds: 0.01,
						},
						{
							name: "Magnesium",
							amount: 2.28,
							unit: "mg",
							percentOfDailyNeeds: 7.01,
						},
						{
							name: "Fiber",
							amount: 0.11,
							unit: "g",
							percentOfDailyNeeds: 10.79,
						},
						{
							name: "Vitamin B1",
							amount: 0,
							unit: "mg",
							percentOfDailyNeeds: 3.29,
						},
						{
							name: "Calories",
							amount: 5.98,
							unit: "kcal",
							percentOfDailyNeeds: 5.51,
						},
						{
							name: "Protein",
							amount: 0.08,
							unit: "g",
							percentOfDailyNeeds: 3.36,
						},
					],
				},
			],
			caloricBreakdown: {
				percentProtein: 5.53,
				percentFat: 26.5,
				percentCarbs: 67.97,
			},
			weightPerServing: {
				amount: 32,
				unit: "g",
			},
		},
		taste: {
			sweetness: 100,
			saltiness: 10.9,
			sourness: 16.46,
			bitterness: 18.13,
			savoriness: 45.54,
			fattiness: 45.1,
			spiciness: 0,
		},
		summary:
			'Need a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d\'oeuvre</b>? Chocolate Pistachio Energy Bites could be an excellent recipe to try. For <b>57 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. This recipe makes 15 servings with <b>110 calories</b>, <b>2g of protein</b>, and <b>4g of fat</b> each. This recipe from Foodista requires pistachios, medjool dates, cocoa powder, and salt. 2 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. With a spoonacular <b>score of 27%</b>, this dish is rather bad. <a href="https://spoonacular.com/recipes/chocolate-pistachio-energy-bites-1232987">Chocolate Pistachio Energy Bites</a>, <a href="https://spoonacular.com/recipes/cranberry-pistachio-energy-bites-1232989">Cranberry Pistachio Energy Bites</a>, and <a href="https://spoonacular.com/recipes/cranberry-pistachio-energy-bites-1215215">Cranberry Pistachio Energy Bites</a> are very similar to this recipe.',
		cuisines: ["Mexican", "Mexicanasdas", "123123"],
		dishTypes: [
			"antipasti",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre",
		],
		diets: [
			"gluten free",
			"dairy free",
			"paleolithic",
			"lacto ovo vegetarian",
			"primal",
			"vegan",
		],
		occasions: [],
		winePairing: {
			pairedWines: ["sparkling wine", "sparkling rose"],
			pairingText:
				"Antipasti works really well with Sparkling Wine and Sparkling rosé. If you're serving a selection of appetizers, you can't go wrong with these. Both are very food friendly and complement a variety of flavors. You could try Stella Rosa. Il Conte D`Alba - Italian 90 Points. Reviewers quite like it with a 4.7 out of 5 star rating and a price of about 15 dollars per bottle.",
			productMatches: [
				{
					id: 428417,
					title: "Stella Rosa. Il Conte D`Alba - Italian 90 Points",
					description:
						"Fruit and sweetness that is just balanced with the bubbles",
					price: "$14.99",
					imageUrl: "https://img.spoonacular.com/products/428417-312x231.jpg",
					averageRating: 0.9399999976158142,
					ratingCount: 11,
					score: 0.9106,
					link: "https://www.amazon.com/Stella-Rosa-Conte-D%60Alba-Sparkling/dp/B00UNSLUE4?tag=spoonacular-20",
				},
			],
		},
		instructions:
			"INSTRUCTIONS\nSoak the dates in warm water for about 10 minutes. Drain.\nIn your food processor, combine pistachios, shredded coconut, cocoa powder, and salt. Pulse until finely ground.\nAdd in vanilla and the softened mejool dates and pulse until a ball forms.\nRoll into bite sized balls (mine were about  tablespoons) and dip immediately in to cocoa powder, shredded coconut, or my personal favorite dark chocolate that's been melted with a *hint* of coconut oil.\nEnjoy immediately! Store the leftovers in an airtight container in the fridge.\nNOTES\nCocoa powder is extremely bitter, so make sure you like the taste before rolling all of them in cocoa powder. My personal favorites are the shredded coconut or dark chocolate! :)",
		analyzedInstructions: [
			{
				name: "",
				steps: [
					{
						number: 1,
						step: "Soak the dates in warm water for about 10 minutes.",
						ingredients: [
							{
								id: 9087,
								name: "dates",
								localizedName: "dates",
								image: "dates.jpg",
							},
							{
								id: 14412,
								name: "water",
								localizedName: "water",
								image: "water.png",
							},
						],
						equipment: [],
						length: {
							number: 10,
							unit: "minutes",
						},
					},
					{
						number: 2,
						step: "Drain.",
						ingredients: [],
						equipment: [],
					},
					{
						number: 3,
						step: "In your food processor, combine pistachios, shredded coconut, cocoa powder, and salt. Pulse until finely ground.",
						ingredients: [
							{
								id: 0,
								name: "shredded coconut",
								localizedName: "shredded coconut",
								image: "shredded-coconut.jpg",
							},
							{
								id: 19165,
								name: "cocoa powder",
								localizedName: "cocoa powder",
								image: "cocoa-powder.png",
							},
							{
								id: 12151,
								name: "pistachio nuts",
								localizedName: "pistachio nuts",
								image: "pistachios.jpg",
							},
							{
								id: 2047,
								name: "salt",
								localizedName: "salt",
								image: "salt.jpg",
							},
						],
						equipment: [
							{
								id: 404771,
								name: "food processor",
								localizedName: "food processor",
								image:
									"https://spoonacular.com/cdn/equipment_100x100/food-processor.png",
							},
						],
					},
					{
						number: 4,
						step: "Add in vanilla and the softened mejool dates and pulse until a ball forms.",
						ingredients: [
							{
								id: 1052050,
								name: "vanilla",
								localizedName: "vanilla",
								image: "vanilla.jpg",
							},
							{
								id: 9087,
								name: "dates",
								localizedName: "dates",
								image: "dates.jpg",
							},
						],
						equipment: [],
					},
					{
						number: 5,
						step: "Roll into bite sized balls (mine were about  tablespoons) and dip immediately in to cocoa powder, shredded coconut, or my personal favorite dark chocolate that's been melted with a *hint* of coconut oil.",
						ingredients: [
							{
								id: 0,
								name: "shredded coconut",
								localizedName: "shredded coconut",
								image: "shredded-coconut.jpg",
							},
							{
								id: 19904,
								name: "dark chocolate",
								localizedName: "dark chocolate",
								image: "dark-chocolate-pieces.jpg",
							},
							{
								id: 19165,
								name: "cocoa powder",
								localizedName: "cocoa powder",
								image: "cocoa-powder.png",
							},
							{
								id: 4047,
								name: "coconut oil",
								localizedName: "coconut oil",
								image: "oil-coconut.jpg",
							},
							{
								id: 0,
								name: "roll",
								localizedName: "roll",
								image: "dinner-yeast-rolls.jpg",
							},
							{
								id: 0,
								name: "dip",
								localizedName: "dip",
								image: "",
							},
						],
						equipment: [],
					},
					{
						number: 6,
						step: "Enjoy immediately! Store the leftovers in an airtight container in the fridge.",
						ingredients: [],
						equipment: [],
					},
					{
						number: 7,
						step: "NOTES",
						ingredients: [],
						equipment: [],
					},
					{
						number: 8,
						step: "Cocoa powder is extremely bitter, so make sure you like the taste before rolling all of them in cocoa powder. My personal favorites are the shredded coconut or dark chocolate! :)",
						ingredients: [
							{
								id: 0,
								name: "shredded coconut",
								localizedName: "shredded coconut",
								image: "shredded-coconut.jpg",
							},
							{
								id: 19904,
								name: "dark chocolate",
								localizedName: "dark chocolate",
								image: "dark-chocolate-pieces.jpg",
							},
							{
								id: 19165,
								name: "cocoa powder",
								localizedName: "cocoa powder",
								image: "cocoa-powder.png",
							},
						],
						equipment: [],
					},
				],
			},
		],
		originalId: null,
		spoonacularScore: 34.168212890625,
		spoonacularSourceUrl:
			"https://spoonacular.com/chocolate-pistachio-energy-bites-639165",
	};

	const similar_test = {
		recipes: [
			{
				vegetarian: false,
				vegan: false,
				glutenFree: false,
				dairyFree: true,
				veryHealthy: false,
				cheap: false,
				veryPopular: false,
				sustainable: false,
				lowFodmap: false,
				weightWatcherSmartPoints: 17,
				gaps: "no",
				preparationMinutes: null,
				cookingMinutes: null,
				aggregateLikes: 16,
				healthScore: 17,
				creditsText: "foodista.com",
				sourceName: "foodista.com",
				pricePerServing: 169.58,
				extendedIngredients: [
					{
						id: 1002030,
						aisle: "Spices and Seasonings",
						image: "pepper.jpg",
						consistency: "SOLID",
						name: "pepper",
						nameClean: "black pepper",
						original: "Freshly-ground black pepper to taste",
						originalName: "Freshly-ground black pepper to taste",
						amount: 6.0,
						unit: "servings",
						meta: ["black", "freshly-ground", "to taste"],
						measures: {
							us: {
								amount: 6.0,
								unitShort: "servings",
								unitLong: "servings",
							},
							metric: {
								amount: 6.0,
								unitShort: "servings",
								unitLong: "servings",
							},
						},
					},
					{
						id: 11124,
						aisle: "Produce",
						image: "sliced-carrot.png",
						consistency: "SOLID",
						name: "carrots",
						nameClean: "carrot",
						original: "2 large carrots, sliced",
						originalName: "carrots, sliced",
						amount: 2.0,
						unit: "large",
						meta: ["sliced"],
						measures: {
							us: {
								amount: 2.0,
								unitShort: "large",
								unitLong: "larges",
							},
							metric: {
								amount: 2.0,
								unitShort: "large",
								unitLong: "larges",
							},
						},
					},
					{
						id: 10111143,
						aisle: "Produce",
						image: "celery.jpg",
						consistency: "SOLID",
						name: "celery stalks",
						nameClean: "celery sticks",
						original: "2 large celery stalks with leaves on, chopped",
						originalName: "celery stalks with leaves on, chopped",
						amount: 2.0,
						unit: "large",
						meta: ["with leaves on, chopped"],
						measures: {
							us: {
								amount: 2.0,
								unitShort: "large",
								unitLong: "larges",
							},
							metric: {
								amount: 2.0,
								unitShort: "large",
								unitLong: "larges",
							},
						},
					},
					{
						id: 5006,
						aisle: "Meat",
						image: "whole-chicken.jpg",
						consistency: "SOLID",
						name: "chicken",
						nameClean: "whole chicken",
						original: "1 5-6 pound chicken",
						originalName: "chicken",
						amount: 5.0,
						unit: "pound",
						meta: [],
						measures: {
							us: {
								amount: 5.0,
								unitShort: "lb",
								unitLong: "pounds",
							},
							metric: {
								amount: 1.089,
								unitShort: "kgs",
								unitLong: "kgs",
							},
						},
					},
					{
						id: 2045,
						aisle: "Spices and Seasonings",
						image: "dill.jpg",
						consistency: "SOLID",
						name: "optional: dill",
						nameClean: "dill",
						original: "Optional: fresh dill or parsley for garnish",
						originalName: "Optional: fresh dill or parsley for garnish",
						amount: 6.0,
						unit: "servings",
						meta: ["fresh", "for garnish"],
						measures: {
							us: {
								amount: 6.0,
								unitShort: "servings",
								unitLong: "servings",
							},
							metric: {
								amount: 6.0,
								unitShort: "servings",
								unitLong: "servings",
							},
						},
					},
					{
						id: 1123,
						aisle: "Milk, Eggs, Other Dairy",
						image: "egg.png",
						consistency: "SOLID",
						name: "eggs",
						nameClean: "egg",
						original: "3 Eggs",
						originalName: "Eggs",
						amount: 3.0,
						unit: "",
						meta: [],
						measures: {
							us: {
								amount: 3.0,
								unitShort: "",
								unitLong: "",
							},
							metric: {
								amount: 3.0,
								unitShort: "",
								unitLong: "",
							},
						},
					},
					{
						id: 2045,
						aisle: "Spices and Seasonings",
						image: "dill.jpg",
						consistency: "SOLID",
						name: "dill",
						nameClean: "dill",
						original: "3 sprigs fresh dill",
						originalName: "fresh dill",
						amount: 3.0,
						unit: "sprigs",
						meta: ["fresh"],
						measures: {
							us: {
								amount: 3.0,
								unitShort: "sprigs",
								unitLong: "sprigs",
							},
							metric: {
								amount: 3.0,
								unitShort: "sprigs",
								unitLong: "sprigs",
							},
						},
					},
					{
						id: 18217,
						aisle: "Baking",
						image: "matzo.jpg",
						consistency: "SOLID",
						name: "matzo meal",
						nameClean: "matzo meal",
						original: "1 cup matzo meal",
						originalName: "matzo meal",
						amount: 1.0,
						unit: "cup",
						meta: [],
						measures: {
							us: {
								amount: 1.0,
								unitShort: "cup",
								unitLong: "cup",
							},
							metric: {
								amount: 140.0,
								unitShort: "ml",
								unitLong: "milliliters",
							},
						},
					},
					{
						id: 11282,
						aisle: "Produce",
						image: "brown-onion.png",
						consistency: "SOLID",
						name: "onion",
						nameClean: "onion",
						original: "1 onion, quartered",
						originalName: "onion, quartered",
						amount: 1.0,
						unit: "",
						meta: ["quartered"],
						measures: {
							us: {
								amount: 1.0,
								unitShort: "",
								unitLong: "",
							},
							metric: {
								amount: 1.0,
								unitShort: "",
								unitLong: "",
							},
						},
					},
					{
						id: 11297,
						aisle: "Produce",
						image: "parsley.jpg",
						consistency: "SOLID",
						name: "parsley",
						nameClean: "parsley",
						original: "3 sprigs parsley",
						originalName: "parsley",
						amount: 3.0,
						unit: "sprigs",
						meta: [],
						measures: {
							us: {
								amount: 3.0,
								unitShort: "sprigs",
								unitLong: "sprigs",
							},
							metric: {
								amount: 3.0,
								unitShort: "sprigs",
								unitLong: "sprigs",
							},
						},
					},
					{
						id: 2047,
						aisle: "Spices and Seasonings",
						image: "salt.jpg",
						consistency: "SOLID",
						name: "salt",
						nameClean: "table salt",
						original: "1/4 teaspoon Salt",
						originalName: "Salt",
						amount: 0.25,
						unit: "teaspoon",
						meta: [],
						measures: {
							us: {
								amount: 0.25,
								unitShort: "tsps",
								unitLong: "teaspoons",
							},
							metric: {
								amount: 0.25,
								unitShort: "tsps",
								unitLong: "teaspoons",
							},
						},
					},
					{
						id: 1102047,
						aisle: "Spices and Seasonings",
						image: "salt-and-pepper.jpg",
						consistency: "SOLID",
						name: "salt and pepper",
						nameClean: "salt and pepper",
						original: "Salt and pepper, to taste",
						originalName: "Salt and pepper, to taste",
						amount: 6.0,
						unit: "servings",
						meta: ["to taste"],
						measures: {
							us: {
								amount: 6.0,
								unitShort: "servings",
								unitLong: "servings",
							},
							metric: {
								amount: 6.0,
								unitShort: "servings",
								unitLong: "servings",
							},
						},
					},
					{
						id: 14121,
						aisle: "Beverages",
						image: "sparkling-water.png",
						consistency: "LIQUID",
						name: "seltzer water",
						nameClean: "sparkling water",
						original: "1/4 cup seltzer water",
						originalName: "seltzer water",
						amount: 0.25,
						unit: "cup",
						meta: [],
						measures: {
							us: {
								amount: 0.25,
								unitShort: "cups",
								unitLong: "cups",
							},
							metric: {
								amount: 59.147,
								unitShort: "ml",
								unitLong: "milliliters",
							},
						},
					},
					{
						id: 4669,
						aisle: "Oil, Vinegar, Salad Dressing",
						image: "vegetable-oil.jpg",
						consistency: "LIQUID",
						name: "vegetable oil",
						nameClean: "vegetable oil",
						original: "4 tablespoons chicken fat or vegetable oil",
						originalName: "chicken fat or vegetable oil",
						amount: 4.0,
						unit: "tablespoons",
						meta: [],
						measures: {
							us: {
								amount: 4.0,
								unitShort: "Tbsps",
								unitLong: "Tbsps",
							},
							metric: {
								amount: 4.0,
								unitShort: "Tbsps",
								unitLong: "Tbsps",
							},
						},
					},
				],
				id: 639616,
				title: "Classic Matzo Ball Soup",
				readyInMinutes: 45,
				servings: 6,
				sourceUrl: "https://www.foodista.com/recipe/7H25S7NF/jewish-penicillin",
				image: "https://img.spoonacular.com/recipes/639616-556x370.jpg",
				imageType: "jpg",
				summary:
					'Classic Matzo Ball Soup is a <b>dairy free</b> recipe with 6 servings. For <b>$1.7 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>39g of protein</b>, <b>39g of fat</b>, and a total of <b>612 calories</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. If you have onion, chicken, celery stalks, and a few other ingredients on hand, you can make it. 16 people found this recipe to be scrumptious and satisfying. It works well as a rather inexpensive main course. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 79%</b>, which is solid. Similar recipes include <a href="https://spoonacular.com/recipes/matzo-ball-soup-1719415">Matzo Ball Soup</a>, <a href="https://spoonacular.com/recipes/matzo-ball-soup-542151">MATZO BALL SOUP</a>, and <a href="https://spoonacular.com/recipes/matzo-ball-soup-1710703">Matzo Ball Soup</a>.',
				cuisines: [],
				dishTypes: ["lunch", "soup", "main course", "main dish", "dinner"],
				diets: ["dairy free"],
				occasions: ["fall", "winter"],
				instructions:
					"<ol><li>Wash the chicken with cold water and place in pot. Cover with water and bring to a simmer (do not boil or your broth won't be clear).</li><li>Skim off bubbling foam as it forms. Add celery, carrots, onion, herbs, salt and pepper and continue to simmer for about 45 minutes.</li><li>Pour soup through strainer and let cool. When broth has completely cooled, remove the chicken meat and skim off the fat and save for the matzo balls.</li><li>In a mixing bowl, mix together 4 eggs and 4 tablespoons chicken fat (or vegetable oil). Stir in the matzo meal and salt. Add 1/4 selter water. Cover and refrigerate for at least 1 hour.</li><li>Form the matzo dough into teaspoon-size balls.</li><li>Bring the chicken broth to a boil. Add the matzo balls, cover, and cook for 20 minutes.</li><li>Serve immediately.</li><li>Garnish with fresh dill or parsley.</li></ol>",
				analyzedInstructions: [
					{
						name: "",
						steps: [
							{
								number: 1,
								step: "Wash the chicken with cold water and place in pot. Cover with water and bring to a simmer (do not boil or your broth won't be clear).Skim off bubbling foam as it forms.",
								ingredients: [
									{
										id: 0,
										name: "chicken",
										localizedName: "chicken",
										image: "whole-chicken.jpg",
									},
									{
										id: 1006615,
										name: "broth",
										localizedName: "broth",
										image: "chicken-broth.png",
									},
									{
										id: 14412,
										name: "water",
										localizedName: "water",
										image: "water.png",
									},
								],
								equipment: [
									{
										id: 404752,
										name: "pot",
										localizedName: "pot",
										image:
											"https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
									},
								],
							},
							{
								number: 2,
								step: "Add celery, carrots, onion, herbs, salt and pepper and continue to simmer for about 45 minutes.",
								ingredients: [
									{
										id: 1102047,
										name: "salt and pepper",
										localizedName: "salt and pepper",
										image: "salt-and-pepper.jpg",
									},
									{
										id: 11124,
										name: "carrot",
										localizedName: "carrot",
										image: "sliced-carrot.png",
									},
									{
										id: 11143,
										name: "celery",
										localizedName: "celery",
										image: "celery.jpg",
									},
									{
										id: 1002044,
										name: "herbs",
										localizedName: "herbs",
										image: "mixed-fresh-herbs.jpg",
									},
									{
										id: 11282,
										name: "onion",
										localizedName: "onion",
										image: "brown-onion.png",
									},
								],
								equipment: [],
								length: {
									number: 45,
									unit: "minutes",
								},
							},
							{
								number: 3,
								step: "Pour soup through strainer and let cool. When broth has completely cooled, remove the chicken meat and skim off the fat and save for the matzo balls.In a mixing bowl, mix together 4 eggs and 4 tablespoons chicken fat (or vegetable oil). Stir in the matzo meal and salt.",
								ingredients: [
									{
										id: 4669,
										name: "vegetable oil",
										localizedName: "vegetable oil",
										image: "vegetable-oil.jpg",
									},
									{
										id: 0,
										name: "chicken meat",
										localizedName: "chicken meat",
										image: "chicken-breasts.png",
									},
									{
										id: 4542,
										name: "chicken fat",
										localizedName: "chicken fat",
										image: "lard.png",
									},
									{
										id: 18217,
										name: "matzo meal",
										localizedName: "matzo meal",
										image: "matzo.jpg",
									},
									{
										id: 1006615,
										name: "broth",
										localizedName: "broth",
										image: "chicken-broth.png",
									},
									{
										id: 10018217,
										name: "matzo",
										localizedName: "matzo",
										image: "matzo.jpg",
									},
									{
										id: 1123,
										name: "egg",
										localizedName: "egg",
										image: "egg.png",
									},
									{
										id: 2047,
										name: "salt",
										localizedName: "salt",
										image: "salt.jpg",
									},
									{
										id: 0,
										name: "soup",
										localizedName: "soup",
										image: "",
									},
								],
								equipment: [
									{
										id: 405907,
										name: "mixing bowl",
										localizedName: "mixing bowl",
										image:
											"https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg",
									},
									{
										id: 405600,
										name: "sieve",
										localizedName: "sieve",
										image:
											"https://spoonacular.com/cdn/equipment_100x100/strainer.png",
									},
								],
							},
							{
								number: 4,
								step: "Add 1/4 selter water. Cover and refrigerate for at least 1 hour.Form the matzo dough into teaspoon-size balls.Bring the chicken broth to a boil.",
								ingredients: [
									{
										id: 6194,
										name: "chicken broth",
										localizedName: "chicken broth",
										image: "chicken-broth.png",
									},
									{
										id: 0,
										name: "dough",
										localizedName: "dough",
										image: "pizza-dough",
									},
									{
										id: 10018217,
										name: "matzo",
										localizedName: "matzo",
										image: "matzo.jpg",
									},
									{
										id: 14412,
										name: "water",
										localizedName: "water",
										image: "water.png",
									},
								],
								equipment: [],
								length: {
									number: 60,
									unit: "minutes",
								},
							},
							{
								number: 5,
								step: "Add the matzo balls, cover, and cook for 20 minutes.",
								ingredients: [
									{
										id: 10018217,
										name: "matzo",
										localizedName: "matzo",
										image: "matzo.jpg",
									},
								],
								equipment: [],
								length: {
									number: 20,
									unit: "minutes",
								},
							},
							{
								number: 6,
								step: "Serve immediately.",
								ingredients: [],
								equipment: [],
							},
							{
								number: 7,
								step: "Garnish with fresh dill or parsley.",
								ingredients: [
									{
										id: 2045,
										name: "fresh dill",
										localizedName: "fresh dill",
										image: "dill.jpg",
									},
									{
										id: 11297,
										name: "parsley",
										localizedName: "parsley",
										image: "parsley.jpg",
									},
								],
								equipment: [],
							},
						],
					},
				],
				originalId: null,
				spoonacularScore: 73.82645416259766,
				spoonacularSourceUrl:
					"https://spoonacular.com/classic-matzo-ball-soup-639616",
			},
			{
				vegetarian: true,
				vegan: false,
				glutenFree: false,
				dairyFree: false,
				veryHealthy: false,
				cheap: false,
				veryPopular: false,
				sustainable: false,
				lowFodmap: false,
				weightWatcherSmartPoints: 24,
				gaps: "no",
				preparationMinutes: null,
				cookingMinutes: null,
				aggregateLikes: 4,
				healthScore: 16,
				creditsText: "Afrolems",
				license: "CC BY 4.0",
				sourceName: "Afrolems",
				pricePerServing: 291.45,
				extendedIngredients: [
					{
						id: 18064,
						aisle: "Bakery/Bread",
						image: "white-bread.jpg",
						consistency: "SOLID",
						name: "bread",
						nameClean: "bread",
						original: "3 Slices of Bread",
						originalName: "Bread",
						amount: 3.0,
						unit: "Slices",
						meta: [],
						measures: {
							us: {
								amount: 3.0,
								unitShort: "slice",
								unitLong: "slices",
							},
							metric: {
								amount: 3.0,
								unitShort: "slice",
								unitLong: "slices",
							},
						},
					},
					{
						id: 1001,
						aisle: "Milk, Eggs, Other Dairy",
						image: "butter-sliced.jpg",
						consistency: "SOLID",
						name: "butter",
						nameClean: "butter",
						original: "tbsp of butter",
						originalName: "butter",
						amount: 1.0,
						unit: "tbsp",
						meta: [],
						measures: {
							us: {
								amount: 1.0,
								unitShort: "Tbsp",
								unitLong: "Tbsp",
							},
							metric: {
								amount: 1.0,
								unitShort: "Tbsp",
								unitLong: "Tbsp",
							},
						},
					},
					{
						id: 1012010,
						aisle: "Spices and Seasonings",
						image: "cinnamon.jpg",
						consistency: "SOLID",
						name: "cinnamon powder",
						nameClean: "ground cinnamon",
						original: "1.5 tablespoons of cinnamon powder",
						originalName: "cinnamon powder",
						amount: 1.5,
						unit: "tablespoons",
						meta: [],
						measures: {
							us: {
								amount: 1.5,
								unitShort: "Tbsps",
								unitLong: "Tbsps",
							},
							metric: {
								amount: 1.5,
								unitShort: "Tbsps",
								unitLong: "Tbsps",
							},
						},
					},
					{
						id: 1123,
						aisle: "Milk, Eggs, Other Dairy",
						image: "egg.png",
						consistency: "SOLID",
						name: "eggs",
						nameClean: "egg",
						original: "2 Large Eggs",
						originalName: "Large Eggs",
						amount: 2.0,
						unit: "",
						meta: [],
						measures: {
							us: {
								amount: 2.0,
								unitShort: "",
								unitLong: "",
							},
							metric: {
								amount: 2.0,
								unitShort: "",
								unitLong: "",
							},
						},
					},
					{
						id: 9431,
						aisle: "Produce",
						image: "mixed-fresh-fruit.jpg",
						consistency: "SOLID",
						name: "fruit",
						nameClean: "mixed fruit",
						original: "Chopped fruit",
						originalName: "Chopped fruit",
						amount: 1.0,
						unit: "serving",
						meta: ["chopped"],
						measures: {
							us: {
								amount: 1.0,
								unitShort: "serving",
								unitLong: "serving",
							},
							metric: {
								amount: 1.0,
								unitShort: "serving",
								unitLong: "serving",
							},
						},
					},
					{
						id: 19296,
						aisle: "Nut butters, Jams, and Honey",
						image: "honey.png",
						consistency: "LIQUID",
						name: "honey",
						nameClean: "honey",
						original: "1.5 tablespoons of Honey",
						originalName: "Honey",
						amount: 1.5,
						unit: "tablespoons",
						meta: [],
						measures: {
							us: {
								amount: 1.5,
								unitShort: "Tbsps",
								unitLong: "Tbsps",
							},
							metric: {
								amount: 1.5,
								unitShort: "Tbsps",
								unitLong: "Tbsps",
							},
						},
					},
					{
						id: 19336,
						aisle: "Baking",
						image: "powdered-sugar.jpg",
						consistency: "SOLID",
						name: "icing sugar",
						nameClean: "powdered sugar",
						original: "1 teaspoon of icing sugar",
						originalName: "icing sugar",
						amount: 1.0,
						unit: "teaspoon",
						meta: [],
						measures: {
							us: {
								amount: 1.0,
								unitShort: "tsp",
								unitLong: "teaspoon",
							},
							metric: {
								amount: 1.0,
								unitShort: "tsp",
								unitLong: "teaspoon",
							},
						},
					},
					{
						id: 1077,
						aisle: "Milk, Eggs, Other Dairy",
						image: "milk.png",
						consistency: "LIQUID",
						name: "milk",
						nameClean: "milk",
						original: "1/4 cup of Milk",
						originalName: "Milk",
						amount: 0.25,
						unit: "cup",
						meta: [],
						measures: {
							us: {
								amount: 0.25,
								unitShort: "cups",
								unitLong: "cups",
							},
							metric: {
								amount: 61.0,
								unitShort: "ml",
								unitLong: "milliliters",
							},
						},
					},
				],
				id: 764752,
				title: "Cinnamon French Toast Sticks",
				readyInMinutes: 45,
				servings: 1,
				sourceUrl:
					"https://www.afrolems.com/2016/05/11/cinnamon-french-toast-sticks/",
				image: "https://img.spoonacular.com/recipes/764752-556x370.jpg",
				imageType: "jpg",
				summary:
					'Cinnamon French Toast Sticks might be a good recipe to expand your breakfast recipe box. This recipe makes 1 servings with <b>695 calories</b>, <b>23g of protein</b>, and <b>26g of fat</b> each. For <b>$2.91 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. A mixture of icing sugar, milk, fruit, and a handful of other ingredients are all it takes to make this recipe so delicious. This recipe from Afrolems has 4 fans. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Not a lot of people really liked this American dish. All things considered, we decided this recipe <b>deserves a spoonacular score of 62%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cinnamon-french-toast-sticks-1346951">Cinnamon French Toast Sticks</a>, <a href="https://spoonacular.com/recipes/cinnamon-french-toast-sticks-989579">Cinnamon French Toast Sticks</a>, and <a href="https://spoonacular.com/recipes/cinnamon-sugar-french-toast-sticks-618676">Cinnamon Sugar French Toast Sticks</a>.',
				cuisines: ["American"],
				dishTypes: ["morning meal", "brunch", "breakfast"],
				diets: ["lacto ovo vegetarian"],
				occasions: [],
				instructions:
					"<p>Slice your bread into smaller rectangular sticksIn a bowl, whisk your egg, milk, 1 tablespoon of honey, 1 tablespoon of cinnamon powder.Dip your bread in the mix, turn on both sides and set asideIn a pan on low heat, heat up your butter and fry your bread sticks.Serve your french toast sticks with the chopped fruits, drizzle the rest of the honey, sprinkle the rest of the cinnamon powder and icing sugar.P:S – If you are having it as a dessert, you can add a scoop of ice-cream to it.</p>",
				analyzedInstructions: [
					{
						name: "",
						steps: [
							{
								number: 1,
								step: "Slice your bread into smaller rectangular sticks",
								ingredients: [
									{
										id: 18064,
										name: "bread",
										localizedName: "bread",
										image: "white-bread.jpg",
									},
								],
								equipment: [],
							},
							{
								number: 2,
								step: "In a bowl, whisk your egg, milk, 1 tablespoon of honey, 1 tablespoon of cinnamon powder.Dip your bread in the mix, turn on both sides and set aside",
								ingredients: [
									{
										id: 1012010,
										name: "ground cinnamon",
										localizedName: "ground cinnamon",
										image: "cinnamon.jpg",
									},
									{
										id: 18064,
										name: "bread",
										localizedName: "bread",
										image: "white-bread.jpg",
									},
									{
										id: 19296,
										name: "honey",
										localizedName: "honey",
										image: "honey.png",
									},
									{
										id: 1077,
										name: "milk",
										localizedName: "milk",
										image: "milk.png",
									},
									{
										id: 0,
										name: "dip",
										localizedName: "dip",
										image: "",
									},
									{
										id: 1123,
										name: "egg",
										localizedName: "egg",
										image: "egg.png",
									},
								],
								equipment: [
									{
										id: 404661,
										name: "whisk",
										localizedName: "whisk",
										image:
											"https://spoonacular.com/cdn/equipment_100x100/whisk.png",
									},
									{
										id: 404783,
										name: "bowl",
										localizedName: "bowl",
										image:
											"https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
									},
								],
							},
							{
								number: 3,
								step: "In a pan on low heat, heat up your butter and fry your bread sticks.",
								ingredients: [
									{
										id: 1001,
										name: "butter",
										localizedName: "butter",
										image: "butter-sliced.jpg",
									},
									{
										id: 18064,
										name: "bread",
										localizedName: "bread",
										image: "white-bread.jpg",
									},
								],
								equipment: [
									{
										id: 404645,
										name: "frying pan",
										localizedName: "frying pan",
										image:
											"https://spoonacular.com/cdn/equipment_100x100/pan.png",
									},
								],
							},
							{
								number: 4,
								step: "Serve your french toast sticks with the chopped fruits, drizzle the rest of the honey, sprinkle the rest of the cinnamon powder and icing sugar.P:S – If you are having it as a dessert, you can add a scoop of ice-cream to it.",
								ingredients: [
									{
										id: 1012010,
										name: "ground cinnamon",
										localizedName: "ground cinnamon",
										image: "cinnamon.jpg",
									},
									{
										id: 19336,
										name: "powdered sugar",
										localizedName: "powdered sugar",
										image: "powdered-sugar.jpg",
									},
									{
										id: 9431,
										name: "fruit",
										localizedName: "fruit",
										image: "mixed-fresh-fruit.jpg",
									},
									{
										id: 1053,
										name: "cream",
										localizedName: "cream",
										image: "fluid-cream.jpg",
									},
									{
										id: 19296,
										name: "honey",
										localizedName: "honey",
										image: "honey.png",
									},
									{
										id: 0,
										name: "sandwich bread",
										localizedName: "sandwich bread",
										image: "white-bread.jpg",
									},
									{
										id: 10014412,
										name: "ice",
										localizedName: "ice",
										image: "ice-cubes.png",
									},
								],
								equipment: [],
							},
						],
					},
				],
				originalId: null,
				spoonacularScore: 19.90522575378418,
				spoonacularSourceUrl:
					"https://spoonacular.com/cinnamon-french-toast-sticks-764752",
			},
		],
	};

	// const test = {
	//     "vegetarian": true,
	//     "vegan": true,
	//     "glutenFree": true,
	//     "dairyFree": true,
	//     "veryHealthy": false,
	//     "cheap": false,
	//     "veryPopular": false,
	//     "sustainable": false,
	//     "lowFodmap": false,
	//     "weightWatcherSmartPoints": 1,
	//     "gaps": "no",
	//     "preparationMinutes": null,
	//     "cookingMinutes": null,
	//     "aggregateLikes": 2,
	//     "healthScore": 2,
	//     "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
	//     "license": "CC BY 3.0",
	//     "sourceName": "Foodista",
	//     "pricePerServing": 57.38,
	//     "extendedIngredients": [
	//         {
	//             "id": 12151,
	//             "aisle": "Nuts",
	//             "image": "pistachios.jpg",
	//             "consistency": "SOLID",
	//             "name": "pistachios",
	//             "nameClean": "pistachio nuts",
	//             "original": "½ cup pistachios, hulled",
	//             "originalName": "pistachios, hulled",
	//             "amount": 0.5,
	//             "unit": "cup",
	//             "meta": [
	//                 "hulled"
	//             ],
	//             "measures": {
	//                 "us": {
	//                     "amount": 0.5,
	//                     "unitShort": "cups",
	//                     "unitLong": "cups"
	//                 },
	//                 "metric": {
	//                     "amount": 61.5,
	//                     "unitShort": "g",
	//                     "unitLong": "grams"
	//                 }
	//             }
	//         },
	//         {
	//             "id": 12179,
	//             "aisle": "Baking",
	//             "image": "shredded-coconut.jpg",
	//             "consistency": "SOLID",
	//             "name": "coconut",
	//             "nameClean": "sweetened shredded coconut",
	//             "original": "½ cup sweetened shredded coconut",
	//             "originalName": "sweetened shredded coconut",
	//             "amount": 0.5,
	//             "unit": "cup",
	//             "meta": [
	//                 "shredded",
	//                 "sweetened"
	//             ],
	//             "measures": {
	//                 "us": {
	//                     "amount": 0.5,
	//                     "unitShort": "cups",
	//                     "unitLong": "cups"
	//                 },
	//                 "metric": {
	//                     "amount": 45,
	//                     "unitShort": "g",
	//                     "unitLong": "grams"
	//                 }
	//             }
	//         },
	//         {
	//             "id": 19165,
	//             "aisle": "Baking",
	//             "image": "cocoa-powder.png",
	//             "consistency": "SOLID",
	//             "name": "cocoa powder",
	//             "nameClean": "cacao powder",
	//             "original": "¼ cup cocoa powder",
	//             "originalName": "cocoa powder",
	//             "amount": 0.25,
	//             "unit": "cup",
	//             "meta": [],
	//             "measures": {
	//                 "us": {
	//                     "amount": 0.25,
	//                     "unitShort": "cups",
	//                     "unitLong": "cups"
	//                 },
	//                 "metric": {
	//                     "amount": 21.5,
	//                     "unitShort": "g",
	//                     "unitLong": "grams"
	//                 }
	//             }
	//         },
	//         {
	//             "id": 2047,
	//             "aisle": "Spices and Seasonings",
	//             "image": "salt.jpg",
	//             "consistency": "SOLID",
	//             "name": "salt",
	//             "nameClean": "table salt",
	//             "original": "¼ - ½ teaspoon salt, start with ¼ teaspoon and add more to taste",
	//             "originalName": "teaspoon salt, start with ¼ teaspoon and add more to taste",
	//             "amount": 0.25,
	//             "unit": "",
	//             "meta": [
	//                 "with ¼ teaspoon and add more to taste"
	//             ],
	//             "measures": {
	//                 "us": {
	//                     "amount": 0.25,
	//                     "unitShort": "",
	//                     "unitLong": ""
	//                 },
	//                 "metric": {
	//                     "amount": 0.25,
	//                     "unitShort": "",
	//                     "unitLong": ""
	//                 }
	//             }
	//         },
	//         {
	//             "id": 1052050,
	//             "aisle": "Baking",
	//             "image": "vanilla.jpg",
	//             "consistency": "SOLID",
	//             "name": "vanilla",
	//             "nameClean": "vanilla",
	//             "original": "1 teaspoon vanilla",
	//             "originalName": "vanilla",
	//             "amount": 1,
	//             "unit": "teaspoon",
	//             "meta": [],
	//             "measures": {
	//                 "us": {
	//                     "amount": 1,
	//                     "unitShort": "tsp",
	//                     "unitLong": "teaspoon"
	//                 },
	//                 "metric": {
	//                     "amount": 1,
	//                     "unitShort": "tsp",
	//                     "unitLong": "teaspoon"
	//                 }
	//             }
	//         },
	//         {
	//             "id": 9421,
	//             "aisle": "Produce",
	//             "image": "dates.jpg",
	//             "consistency": "SOLID",
	//             "name": "medjool dates",
	//             "nameClean": "medjool dates",
	//             "original": "14 medjool dates, pitted",
	//             "originalName": "medjool dates, pitted",
	//             "amount": 14,
	//             "unit": "",
	//             "meta": [
	//                 "pitted"
	//             ],
	//             "measures": {
	//                 "us": {
	//                     "amount": 14,
	//                     "unitShort": "",
	//                     "unitLong": ""
	//                 },
	//                 "metric": {
	//                     "amount": 14,
	//                     "unitShort": "",
	//                     "unitLong": ""
	//                 }
	//             }
	//         },
	//         {
	//             "id": 19904,
	//             "aisle": "Sweet Snacks",
	//             "image": "dark-chocolate-pieces.jpg",
	//             "consistency": "SOLID",
	//             "name": "chocolate",
	//             "nameClean": "dark chocolate",
	//             "original": "Dark chocolate (mixed with a touch of coconut oil), cocoa powder, and shredded coconut for topping",
	//             "originalName": "Dark chocolate (mixed with a touch of coconut oil), cocoa powder, and shredded coconut for topping",
	//             "amount": 15,
	//             "unit": "servings",
	//             "meta": [
	//                 "mixed",
	//                 "dark",
	//                 "shredded",
	//                 "with a touch of coconut oil), cocoa powder, and  coconut for topping"
	//             ],
	//             "measures": {
	//                 "us": {
	//                     "amount": 15,
	//                     "unitShort": "servings",
	//                     "unitLong": "servings"
	//                 },
	//                 "metric": {
	//                     "amount": 15,
	//                     "unitShort": "servings",
	//                     "unitLong": "servings"
	//                 }
	//             }
	//         }
	//     ],
	//     "id": 639165,
	//     "title": "Chocolate Pistachio Energy Bites",
	//     "readyInMinutes": 45,
	//     "servings": 15,
	//     "sourceUrl": "https://www.foodista.com/recipe/47KCTH7P/chocolate-pistachio-energy-bites",
	//     "image": "https://img.spoonacular.com/recipes/639165-556x370.jpg",
	//     "imageType": "jpg",
	//     "summary": "Need a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian hor d'oeuvre</b>? Chocolate Pistachio Energy Bites could be an excellent recipe to try. For <b>57 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. This recipe makes 15 servings with <b>110 calories</b>, <b>2g of protein</b>, and <b>4g of fat</b> each. This recipe from Foodista requires pistachios, medjool dates, cocoa powder, and salt. 2 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. With a spoonacular <b>score of 27%</b>, this dish is rather bad. <a href=\"https://spoonacular.com/recipes/chocolate-pistachio-energy-bites-1232987\">Chocolate Pistachio Energy Bites</a>, <a href=\"https://spoonacular.com/recipes/cranberry-pistachio-energy-bites-1232989\">Cranberry Pistachio Energy Bites</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-pistachio-energy-bites-1215215\">Cranberry Pistachio Energy Bites</a> are very similar to this recipe.",
	//     "cuisines": [],
	//     "dishTypes": [
	//         "antipasti",
	//         "starter",
	//         "snack",
	//         "appetizer",
	//         "antipasto",
	//         "hor d'oeuvre"
	//     ],
	//     "diets": [
	//         "gluten free",
	//         "dairy free",
	//         "paleolithic",
	//         "lacto ovo vegetarian",
	//         "primal",
	//         "vegan"
	//     ],
	//     "occasions": [],
	//     "instructions": "INSTRUCTIONS\nSoak the dates in warm water for about 10 minutes. Drain.\nIn your food processor, combine pistachios, shredded coconut, cocoa powder, and salt. Pulse until finely ground.\nAdd in vanilla and the softened mejool dates and pulse until a ball forms.\nRoll into bite sized balls (mine were about  tablespoons) and dip immediately in to cocoa powder, shredded coconut, or my personal favorite dark chocolate that's been melted with a *hint* of coconut oil.\nEnjoy immediately! Store the leftovers in an airtight container in the fridge.\nNOTES\nCocoa powder is extremely bitter, so make sure you like the taste before rolling all of them in cocoa powder. My personal favorites are the shredded coconut or dark chocolate! :)",
	//     "analyzedInstructions": [
	//         {
	//             "name": "",
	//             "steps": [
	//                 {
	//                     "number": 1,
	//                     "step": "Soak the dates in warm water for about 10 minutes.",
	//                     "ingredients": [
	//                         {
	//                             "id": 9087,
	//                             "name": "dates",
	//                             "localizedName": "dates",
	//                             "image": "dates.jpg"
	//                         },
	//                         {
	//                             "id": 14412,
	//                             "name": "water",
	//                             "localizedName": "water",
	//                             "image": "water.png"
	//                         }
	//                     ],
	//                     "equipment": [],
	//                     "length": {
	//                         "number": 10,
	//                         "unit": "minutes"
	//                     }
	//                 },
	//                 {
	//                     "number": 2,
	//                     "step": "Drain.",
	//                     "ingredients": [],
	//                     "equipment": []
	//                 },
	//                 {
	//                     "number": 3,
	//                     "step": "In your food processor, combine pistachios, shredded coconut, cocoa powder, and salt. Pulse until finely ground.",
	//                     "ingredients": [
	//                         {
	//                             "id": 0,
	//                             "name": "shredded coconut",
	//                             "localizedName": "shredded coconut",
	//                             "image": "shredded-coconut.jpg"
	//                         },
	//                         {
	//                             "id": 19165,
	//                             "name": "cocoa powder",
	//                             "localizedName": "cocoa powder",
	//                             "image": "cocoa-powder.png"
	//                         },
	//                         {
	//                             "id": 12151,
	//                             "name": "pistachio nuts",
	//                             "localizedName": "pistachio nuts",
	//                             "image": "pistachios.jpg"
	//                         },
	//                         {
	//                             "id": 2047,
	//                             "name": "salt",
	//                             "localizedName": "salt",
	//                             "image": "salt.jpg"
	//                         }
	//                     ],
	//                     "equipment": [
	//                         {
	//                             "id": 404771,
	//                             "name": "food processor",
	//                             "localizedName": "food processor",
	//                             "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
	//                         }
	//                     ]
	//                 },
	//                 {
	//                     "number": 4,
	//                     "step": "Add in vanilla and the softened mejool dates and pulse until a ball forms.",
	//                     "ingredients": [
	//                         {
	//                             "id": 1052050,
	//                             "name": "vanilla",
	//                             "localizedName": "vanilla",
	//                             "image": "vanilla.jpg"
	//                         },
	//                         {
	//                             "id": 9087,
	//                             "name": "dates",
	//                             "localizedName": "dates",
	//                             "image": "dates.jpg"
	//                         }
	//                     ],
	//                     "equipment": []
	//                 },
	//                 {
	//                     "number": 5,
	//                     "step": "Roll into bite sized balls (mine were about  tablespoons) and dip immediately in to cocoa powder, shredded coconut, or my personal favorite dark chocolate that's been melted with a *hint* of coconut oil.",
	//                     "ingredients": [
	//                         {
	//                             "id": 0,
	//                             "name": "shredded coconut",
	//                             "localizedName": "shredded coconut",
	//                             "image": "shredded-coconut.jpg"
	//                         },
	//                         {
	//                             "id": 19904,
	//                             "name": "dark chocolate",
	//                             "localizedName": "dark chocolate",
	//                             "image": "dark-chocolate-pieces.jpg"
	//                         },
	//                         {
	//                             "id": 19165,
	//                             "name": "cocoa powder",
	//                             "localizedName": "cocoa powder",
	//                             "image": "cocoa-powder.png"
	//                         },
	//                         {
	//                             "id": 4047,
	//                             "name": "coconut oil",
	//                             "localizedName": "coconut oil",
	//                             "image": "oil-coconut.jpg"
	//                         },
	//                         {
	//                             "id": 0,
	//                             "name": "roll",
	//                             "localizedName": "roll",
	//                             "image": "dinner-yeast-rolls.jpg"
	//                         },
	//                         {
	//                             "id": 0,
	//                             "name": "dip",
	//                             "localizedName": "dip",
	//                             "image": ""
	//                         }
	//                     ],
	//                     "equipment": []
	//                 },
	//                 {
	//                     "number": 6,
	//                     "step": "Enjoy immediately! Store the leftovers in an airtight container in the fridge.",
	//                     "ingredients": [],
	//                     "equipment": []
	//                 },
	//                 {
	//                     "number": 7,
	//                     "step": "NOTES",
	//                     "ingredients": [],
	//                     "equipment": []
	//                 },
	//                 {
	//                     "number": 8,
	//                     "step": "Cocoa powder is extremely bitter, so make sure you like the taste before rolling all of them in cocoa powder. My personal favorites are the shredded coconut or dark chocolate! :)",
	//                     "ingredients": [
	//                         {
	//                             "id": 0,
	//                             "name": "shredded coconut",
	//                             "localizedName": "shredded coconut",
	//                             "image": "shredded-coconut.jpg"
	//                         },
	//                         {
	//                             "id": 19904,
	//                             "name": "dark chocolate",
	//                             "localizedName": "dark chocolate",
	//                             "image": "dark-chocolate-pieces.jpg"
	//                         },
	//                         {
	//                             "id": 19165,
	//                             "name": "cocoa powder",
	//                             "localizedName": "cocoa powder",
	//                             "image": "cocoa-powder.png"
	//                         }
	//                     ],
	//                     "equipment": []
	//                 }
	//             ]
	//         }
	//     ],
	//     "originalId": null,
	//     "spoonacularScore": 34.168212890625,
	//     "spoonacularSourceUrl": "https://spoonacular.com/chocolate-pistachio-energy-bites-639165"
	// }

	// useEffect(() => {
	// 	fetchDetails();
	// 	console.log(details);
	// }, [params.id]);

	return (
		<DetailWrapper
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h2>{test.title}</h2>
			<ImageAndInfo>
				<img src={test.image} alt="" />
				<RecipeInfo>
					<div className="pills-tag">
						{test.vegetarian && (
							<span className="tag tag--vegetarian">Vegetarian</span>
						)}
						{test.vegan && <span className="tag tag--vegan">Vegan</span>}
						{test.glutenFree && (
							<span className="tag tag--glutenFree">Gluten Free</span>
						)}
					</div>
					{test.cuisines.length > 0 && (
						<CuisineSection>
							{test.cuisines.map((cuisine) => (
								<p>{cuisine}</p>
							))}
						</CuisineSection>
					)}

					<ul className="icons-info">
						<li className="meal-attribute">
							<FcClock />
							<span>
								<strong>{test.readyInMinutes}</strong> minutes
							</span>
						</li>
						<li className="meal-attribute star-wrapper">
							<FaRegStar className="star" />
							<span>
								Spoon Score: <strong>{test.spoonacularScore.toFixed(2)}</strong>
							</span>
						</li>
					</ul>
					<WineSection>
						{test.winePairing.pairedWines && (
							<h4>
								Paired Wines <FaWineGlassAlt />
							</h4>
						)}
						<ul className="wine-list">
							{test.winePairing.pairedWines.map((wine) => {
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
						<h3 dangerouslySetInnerHTML={{ __html: test.summary }}></h3>
						<h3 dangerouslySetInnerHTML={{ __html: test.instructions }}></h3>
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
							{test.extendedIngredients?.map((ingredient) => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
						</ul>
					</motion.div>
				)}
			</Info>
			<SimilarRecipes>
				<h3>Outras receitas</h3>
				<div className="similar-recipes">
					{similar_test.recipes.map((similar) => {
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
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: white;
	border: 2px solid black;
	font-weight: 600;
	margin-right: 2rem;
	cursor: pointer;
`;

const Info = styled(motion.div)`
	margin-top: 5rem;
`;

const RecipeInfo = styled.div`
	.pills-tag {
		display: flex;
		gap: 15px;
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

const CuisineSection = styled.div``;

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
