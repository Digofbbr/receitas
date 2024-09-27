import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<FooterStyle>
			<div>
				<LogoWrapper to={"/"}>
					<GiKnifeFork />
					<Logo>Delicious</Logo>
				</LogoWrapper>
			</div>
			<div>
				<p>
					Copyright {year} page by Rodrigo B.
					<a href="https://github.com/Digofbbr" target="_blank">
						<span>
							<FaGithub />
						</span>
					</a>
				</p>
			</div>
		</FooterStyle>
	);
};

const FooterStyle = styled.footer`
	padding: 30px 0px;
	border-top: 1px solid #9ca3af;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 500px) {
		flex-direction: column;
		gap: 30px;
	}

	p {
		font-size: 14px;
		display: flex;
		gap: 15px;
		align-items: center;
	}

	span {
		font-size: 18px;
	}
`;

const LogoWrapper = styled(Link)`
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	gap: 5px;
`;

const Logo = styled.div`
	text-decoration: none;
	font-size: 1.2rem;
	font-weight: 400;
	font-family: "Roboto", cursive;
`;

export default Footer;
