import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

export default function Contact() {
	return (
		<footer className="contact--icons">
			<img src={twitter} alt="twitter" />
			<img src={facebook} alt="facebook" />
			<img src={instagram} alt="instagram" />
			<img src={github} alt="github" />
		</footer>
	);
}
