import React from "react";
import profilePhoto from "../images/profile.jpeg";
import emailPhoto from "../images/email.png";
import linkedinPhoto from "../images/linkedin.png";

export default function Info() {
	return (
		<div className="info--container">
			<img className="profile--photo" src={profilePhoto} alt="profile" />
			<h1 className="profile--title">Talha Sheikh</h1>
			<h3 className="profile--occupation">Software Engineer</h3>
			<h4 className="profile--website">talhasheikh.com</h4>
			<div className="profile--contact--buttons">
				<button className="email--button">
					<img src={emailPhoto} />
					Email
				</button>
				<button className="linkedin--button">
					<img src={linkedinPhoto} />
					LinkedIn
				</button>
			</div>
		</div>
	);
}
