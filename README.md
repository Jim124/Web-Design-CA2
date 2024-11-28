# Web-Design-CA2

## Team: myHero

web design


## Author
- **Huini Lu** 

## Date
- 25/11/2024


## Table of Contents
- [Basic Project Structure](#basic-project-structure)  
- [Starting a Local Server](#starting-a-local-server)  
- [Reusing navbar.html and footer.html](#reusing-navbarhtml-and-footerhtml)  
- [Replacing the Web Name and Links](#replacing-the-web-name-and-links)  

## Basic Project Structure  
project-root
├── js
│   ├── styles.js
│   ├── index.js
│   ├── example.js
│   └── your_js_file.js
├── css
│   ├── styles.css
│   ├── index.css
│   ├── example.css
│   └── your_css_file.css
├── src - Static resources folder (images, logo, etc.)
├── index.html
├── navabar.html
├── footer.html
├── example.html
├── your_html_file.html
└── readme.md


## Starting a Local Server
- enter the folder where your project is located
	- `cd /path/to/your_project`
- execute commands `python3 -m http.server` in the terminal (command line)
- check the open port
	- e.g., `Serving HTTP on :: port 8000 (http://[::]:8000/) ...`
	- usually, the address is `http://localhost:8000`

## Reusing `navbar.html`, `footer.html`
- import Google Font
- import Google Icon 
- import custom css `css/styles.css`
- import `bootstrap` 
- import `Jquery`
	- import `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>` in the `<head> </head>`
	- make sure there is `js/main.js` in your project
	- import `<script src="js/main.js"></script>`
	,and add this line before the closing body tag
- include a placeholder div in your html where you want
    - Navbar placeholder:
      ```html
      <div id="navbar-placeholder"></div>
      ```
    - Footer placeholder:
      ```html
      <div id="footer-placeholder"></div>
      ```
	- `example.html` is provided as an example of how to use `navbar.html` and `footer.html`. Refer to it if you need guidance on implementation.

## Replacing the Web Name and Links
- enter `js` folder
- open `main.js` file
- replace the default address or name with yours in the lists
	- navMenuItems
	```js
	const navMenuItems = [
	  { name: "Home", href: "index.html" },
	  { name: "Stay", href: "stay.html" },
	  { name: "Food & Drinks", href: "#" },
	  { name: "Outdoor", href: "#" },
	  { name: "Festival & Events", href: "#" }
	];
	```
	- footerMenuItems
	```js
	  // footer menu list
	 const footerMenuItems = [
	  { name: "Home", href: "index.html" },
	  { name: "Where to stay", href: "stay.html"},
	  { name: "Food & Drinks", href: "#"},
	  { name: "Outdoor", href: "#"},
	  { name: "Festival & Events", href: "#"}
	  ];
	// footer legal list
	 const footerLegalItems = [
	  { name: "Terms&conditions"},
	  { name: "Accessibility"},
	  { name: "Cookie policy"},
	  { name: "Privacy Statement"}
	  ];
	```