import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav>
					<LogoWrapper>
						<GiKnifeFork />
						<Logo to={"/"}>Delicious</Logo>
					</LogoWrapper>
					<Search />
				</Nav>
				{/* <Search /> */}
				<Category />
				<Pages />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Logo = styled(Link)`
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 400;
	font-family: "Roboto", cursive;
`;
const Nav = styled.div`
	padding: 4rem 0rem 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	svg {
		font-size: 2rem;
	}
`;

export default App;
