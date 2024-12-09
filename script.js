// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;

// Accessibility questions and answers
// 1. Why should you make your HTML accessible?
// Answer: By using structured HTML with semantically rich tags, we can make our web pages more accessible for screen readers to understand the content, regions of the page, and all different elements available for our users.

// 2. What are landmarks in an HTML page and why should you have them?
// Answer: Landmarks are semantic elements used to define different parts of a web page. They help blind users navigate and jump to different parts of the page.

// 3. What are semantic elements and why should you use them?
// Answer: Semantic elements are elements with meanings that help users navigate and interact with a website. Using the correct elements for content in HTML improves accessibility. For example, using the <button> element for buttons instead of a <div>.

// 4. When do you use the role attribute?
// Answer: The role attribute is used to identify the exact function of an element and its children to parsing software, improving accessibility for users.
