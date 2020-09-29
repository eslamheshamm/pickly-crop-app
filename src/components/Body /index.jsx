import React from "react";
const Body = () => {
	return (
		<div>
			<nav ClassName="z-depth-0 grey lighten-4">
				<div ClassName="nav-wrapper container">
					<a href="#" ClassName="brand-logo">
						<img src="img/logo.svg" style="width: 180px; margin-top: 10px;" />
					</a>
					<ul id="nav-mobile" ClassName="right hide-on-med-and-down">
						<li ClassName="logged-in">
							<a
								href="#"
								ClassName="grey-text modal-trigger"
								data-target="modal-account"
							>
								Account
							</a>
						</li>
						<li ClassName="logged-in">
							<a href="#" ClassName="grey-text" id="logout">
								Logout
							</a>
						</li>
						<li ClassName="logged-in">
							<a
								href="#"
								ClassName="grey-text modal-trigger"
								data-target="modal-create"
							>
								Create Guide
							</a>
						</li>
						<li ClassName="logged-out">
							<a
								href="#"
								ClassName="grey-text modal-trigger"
								data-target="modal-login"
							>
								Login
							</a>
						</li>
						<li ClassName="logged-out">
							<a
								href="#"
								ClassName="grey-text modal-trigger"
								data-target="modal-signup"
							>
								Sign up
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<div id="modal-signup" ClassName="modal">
				<div ClassName="modal-content">
					<h4>Sign up</h4>
					<br />
					<form id="signup-form">
						<div ClassName="input-field">
							<input type="email" id="signup-email" required />
							<label for="signup-email">Email address</label>
						</div>
						<div ClassName="input-field">
							<input type="password" id="signup-password" required />
							<label for="signup-password">Choose password</label>
						</div>
						<button ClassName="btn yellow darken-2 z-depth-0">Sign up</button>
					</form>
				</div>
			</div>

			<div id="modal-login" ClassName="modal">
				<div ClassName="modal-content">
					<h4>Login</h4>
					<br />
					<form id="login-form">
						<div ClassName="input-field">
							<input type="email" id="login-email" required />
							<label for="login-email">Email address</label>
						</div>
						<div ClassName="input-field">
							<input type="password" id="login-password" required />
							<label for="login-password">Your password</label>
						</div>
						<button ClassName="btn yellow darken-2 z-depth-0">Login</button>
					</form>
				</div>
			</div>

			<div id="modal-account" ClassName="modal">
				<div ClassName="modal-content center-align">
					<h4>Account details</h4>
					<br />
					<div ClassName="account-details"></div>
				</div>
			</div>

			<div id="modal-create" ClassName="modal">
				<div ClassName="modal-content">
					<h4>Create Guide</h4>
					<br />
					<form id="create-form">
						<div ClassName="input-field">
							<input type="text" id="title" required />
							<label for="title">Guide Title</label>
						</div>
						<div ClassName="input-field">
							<textarea
								id="content"
								ClassName="materialize-textarea"
								required
							></textarea>
							<label for="content">Guide Content</label>
						</div>
						<button ClassName="btn yellow darken-2 z-depth-0">Create</button>
					</form>
				</div>
			</div>

			<div ClassName="container" style="margin-top: 40px;">
				<ul ClassName="collapsible z-depth-0 guides" style="border: none;">
					<li>
						<div ClassName="collapsible-header grey lighten-4">Guide title</div>
						<div ClassName="collapsible-body white">
							Lorem ipsum dolor sit amet.
						</div>
					</li>
					<li>
						<div ClassName="collapsible-header grey lighten-4">Guide title</div>
						<div ClassName="collapsible-body white">
							<span>Lorem ipsum dolor sit amet.</span>
						</div>
					</li>
					<li>
						<div ClassName="collapsible-header grey lighten-4">Guide title</div>
						<div ClassName="collapsible-body white">
							<span>Lorem ipsum dolor sit amet.</span>
						</div>
					</li>
					<li>
						<div ClassName="collapsible-header grey lighten-4">Guide title</div>
						<div ClassName="collapsible-body white">
							<span>Lorem ipsum dolor sit amet.</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Body;
