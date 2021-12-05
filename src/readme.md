# Why is the App.JS file used? 🤔

## Behaviors within JS 😝

**Within the codes in React, the JSX syntax, it is very common to see always dealing very simply with the HTML and JavaScript code already together in the same page!
HTML always being used only with component modules made in other folders and JS function codes defined already in tag calls...**

**JavaScript in react is quite simple, so that you will always treat it as an object and very simply make your life easier when building dynamic functions inside the code, differentiating only from the rendering that is done by the library itself.**

## Rendering 💻

**Rendering is a very heavy method, and it needs to be well managed and cannot be put in the developer's hands by simply calling the render()!**

**It will call the function, but it won't update the screen dynamically, for that we'll use React! Usually what the render does in these cases is to use the virtual DOM, which is a copy of the HTML elements tree inside an Api, it can update this information, but it can only render dynamically in a web page if it is finally being managed .**


This is always the final part of the code, and the one that the developer always uses to do at the end, and which should always be in the hands of the library to make the function, the developer itself makes the logical function, but the graphics are more left. to the library itself ;)

Always use the App.JS file to do this component rendering function dynamically.