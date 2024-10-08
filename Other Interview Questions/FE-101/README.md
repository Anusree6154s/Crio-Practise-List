## Interview Questions

### From classes 
- [Interview questions with crio answers](https://docs.google.com/document/d/18lR8iVW2g4zXvaafUYlOFu6g6Ry1YKVSYksg0CHEM-U/edit?addon_store)

### Grading Quiz Week 1

1. What are the differences between HTML and HTML5?
2. What are the differences between semantic and non-semantic HTML tags?
3. What is the purpose of the 'doctype' declaration in HTML documents?
4. What are the differences between block elements, inline elements and inline-block elements?
5. Explain CSS selectors and their types.

### Grading Quiz Week 2

1. What is CSS Box Model?
2. What is CSS selector specificity and how does it work?
3. What does `* { box-sizing: border-box; }` do?
4. What is the difference between absolute and relative length units in CSS? Provide examples.

### Grading Quiz Week 3

1. What is CSS Flexbox?
2. What are the differences between CSS Grids and Flexbox?
3. What are the different CSS position property values?
4. What is z-index in CSS?
5. What is responsive web design?
6. What is Bootstrap?
7. What are the differences between semantic and non-semantic HTML tags?
8. What are the differences between block elements, inline elements and inline-block elements?
9. What is CSS Box Model?
10. What is the difference between absolute and relative length units in CSS? Provide examples.

## Answers

### Grading Quiz Week 1

1. What are the differences between HTML and HTML5?
    - HTML (HyperText Markup Language)
        - Standard language for creating web pages.
        - Uses tags and attributes to define elements.
        - Elements are enclosed within angle brackets, e.g., `<p>Content here</p>.`
        - Structures content like headings, paragraphs, links, and images.
        - Forms the backbone of all web pages.
        - Allows browsers to interpret and display content correctly.
    - HTML5
        - Latest version of HTML, introduced for modern web development.
        - Adds semantic elements like `<header>, <footer>,` and `<article>.`
        - Supports multimedia elements like `<audio> and <video>` natively.
        - Introduces new form input types, e.g., email, date.
        - Includes powerful APIs like Canvas for graphics and Geolocation.
        - Enhances web functionality, accessibility, and development efficiency.

    | Feature                   | HTML                             | HTML5                                 | Example                                 |
    |---------------------------|----------------------------------|---------------------------------------|-----------------------------------------|
    | **Semantic Elements**     | Uses generic tags like `<div>`   | Introduces semantic tags like `<header>`, `<footer>`, `<article>` | `<article>Content here<article>`       |
    | **Multimedia Support**    | Requires plugins (e.g., Flash)   | Native support for audio and video    | `<video src="video.mp4" controls></video>` |
    | **APIs and Features**     | Limited built-in functionality   | New APIs like Canvas, Geolocation, Web Storage | `<canvas id="myCanvas"></canvas>`       |
    | **Form Enhancements**     | Basic form elements              | New input types like `date`, `email`, `range` | `<input type="email">`                   |


2. What are the differences between semantic and non-semantic HTML tags?
    -  Semantic HTML Tags
        - **Meaning**: Clearly describe their meaning and purpose.
        - **Examples**:
            - **`<header>`**: Defines the header section of a document or section.
            - **`<nav>`**: Defines a set of navigation links.
            - **`<article>`**: Represents a self-contained piece of content.
            - **`<section>`**: Groups related content together.
            - **`<aside>`**: Contains content aside from the main content.
            - **`<footer>`**: Defines the footer section of a document or section.
            - **`<main>`**: Represents the main content of the document.
        - **Benefits**:
            - Improves content structure.
            - Enhances accessibility and SEO.
            - Increases code readability and maintainability.

    -  Non-Semantic HTML Tags
        - **Meaning**: Do not provide any information about their content.
        - **Examples**:
            - **`<div>`**: A block-level element used for layout and grouping.
            - **`<span>`**: An inline element used for styling parts of text.
        - **Usage**:
            - Often rely on class or id attributes to convey meaning.
            - Commonly used for general-purpose styling and layout tasks.
        - **Drawbacks**:
            - Less informative and harder to understand without additional context.
            - Do not inherently enhance accessibility or SEO.
3. What is the purpose of the 'doctype' declaration in HTML documents?
    - **Defines Document Type**: Specifies the HTML version being used, informing the browser about the document type.
    - **Ensures Standards Mode**: Triggers standards mode in browsers, ensuring consistent rendering across different browsers.
    - **Prevents Quirks Mode**: Helps avoid quirks mode, where browsers emulate older, non-standard behavior for compatibility.
    - **Enhances Performance**: Improves browser performance by allowing it to use modern rendering and optimization techniques.
    - **Syntax**: Typically declared as `<!DOCTYPE html>` for HTML5, indicating the document follows HTML5 standards.
    - **Position**: Placed at the very beginning of the HTML document, before the `<html>` tag.
4. What are the differences between block elements, inline elements and inline-block elements?
    - Block Elements
        - **Display**: Occupy the full width available, starting on a new line.
        - **Examples**: `<div>`, `<p>`, `<h1>`, `<ul>`, `<li>`.
        - **Behavior**:
            - Takes up the entire width of the parent container.
            - Stacks vertically, one after another.
            - Can contain other block elements and inline elements.
        - **Styling**: Width and height properties can be set; margin and padding affect layout.
        - **Usage**: Used for larger sections of content and structural elements.

    - Inline Elements
        - **Display**: Occupy only the necessary width, staying on the same line.
        - **Examples**: `<span>`, `<a>`, `<em>`, `<strong>`, `<img>`.
        - **Behavior**:
            - Takes up only as much width as necessary.
            - Does not start on a new line.
            - Cannot contain block elements, only other inline elements.
        - **Styling**: Width and height properties generally do not apply; margin and padding affect layout horizontally.
        - **Usage**: Used for styling and structuring small pieces of content within block elements.

    - Inline-Block Elements
        - **Display**: Similar to inline elements but can have width and height set.
        - **Examples**: `<img>`, `<button>`, `<input>`.
        - **Behavior**:
            - Takes up only as much width as necessary but allows setting width and height.
            - Stays on the same line as other inline elements.
            - Can contain other inline elements and content.
        - **Styling**: Width and height properties apply; margin and padding affect layout both horizontally and vertically.
        - **Usage**: Used for elements that need to be styled like block elements but displayed inline, such as buttons or form inputs.
5. Explain CSS selectors and their types.
    -  CSS Selectors
        - CSS selectors are patterns used to select and style HTML elements. They define which elements the CSS rules apply to.

    - Types of CSS Selectors
        1. **Universal Selector** (`*`)
            - Selects all elements.
            - Example: `* { margin: 0; }`

        2. **Type Selector** (Element Selector)
            - Selects all instances of a given element.
            - Example: `p { color: blue; }`

        3. **Class Selector** (`.`)
            - Selects elements with a specific class attribute.
            - Example: `.myClass { font-size: 14px; }`

        4. **ID Selector** (`#`)
            - Selects an element with a specific id attribute.
            - Example: `#myId { background-color: yellow; }`

        5. **Attribute Selector**
            - Selects elements based on attribute and value.
            - Example: `[type="text"] { border: 1px solid #000; }`

        6. **Pseudo-class Selector**
            - Selects elements based on their state.
            - Example: `a:hover { color: red; }`

        7. **Pseudo-element Selector**
            - Selects and styles parts of elements.
            - Example: `p::first-line { font-weight: bold; }`

        8. **Descendant Selector** (Space)
            - Selects elements that are descendants of a specified element.
            - Example: `div p { margin: 10px; }`

        9. **Child Selector** (`>`)
            - Selects direct child elements of a specified element.
            - Example: `ul > li { list-style-type: none; }`

        10. **Adjacent Sibling Selector** (`+`)
                - Selects an element that is immediately preceded by a specified element.
                - Example: `h1 + p { margin-top: 0; }`

        11. **General Sibling Selector** (`~`)
                - Selects all sibling elements of a specified element.
                - Example: `h1 ~ p { color: gray; }`


### Grading Quiz Week 2

1. What is CSS Box Model?
    - CSS Box Model
        - The CSS Box Model describes the layout and sizing of elements in web pages. It consists of four components:
        1. **Content**: The actual content of the element, such as text or images.
        2. **Padding**: Transparent space around the content, controlled by `padding` property.
        3. **Border**: A border surrounding the content and padding, controlled by `border` property.
        4. **Margin**: Space outside the border, creating distance between elements, controlled by `margin` property.
        - Example : A <div> element with width 200px, padding 20px, border 2px, and margin 20px, forming a rectangular box around its content.

2. What is CSS selector specificity and how does it work?
    - CSS Selector Specificity
        - CSS selector specificity determines which CSS rule takes precedence when multiple rules target the same element. Specificity is calculated based on the types of selectors used in a rule.

    - Working:
        1. **Inline Styles**: Highest specificity, directly applied to an element.
        2. **ID Selectors**: Higher specificity than classes or tag selectors.
        3. **Class and Attribute Selectors**: Moderate specificity, applies to multiple elements.
        4. **Tag Selectors**: Lowest specificity, applies broadly to elements.

    - Example:
        - If a rule targets an element with an ID (`#myElement`), it overrides a rule targeting the same element with a class (`.myClass`).
3. What does `* { box-sizing: border-box; }` do?
    - **Defines Box Sizing**: Sets the sizing behavior for all elements in the document.
    - **Border-Box Model**: Ensures that the total width and height of an element include padding and border, not just content.
    - **Prevents Layout Issues**: Prevents unexpected resizing of elements when padding or border is added, improving layout consistency.
    - **Easier to Manage**: Simplifies layout management by ensuring predictable sizing behavior across elements.
    - **Example**: If a `<div>` has width 200px and padding 20px, with `box-sizing: border-box;`, the total width remains 200px, including padding.
4. What is the difference between absolute and relative length units in CSS? Provide examples.
    - Absolute Length Units
        - **Fixed Sizes**: Maintain a constant size regardless of screen size or parent element.
        - **Examples**: `px` (pixels), `pt` (points), `in` (inches), `cm` (centimeters).
        - **Usage**: Ideal for precise control over element dimensions, like borders or font sizes.
        - **Example**: Setting `width: 200px;` ensures an element is always 200 pixels wide, irrespective of screen size or parent container.

    - Relative Length Units
        - **Relative to Other Factors**: Sizing based on the context of the element or the device.
        - **Examples**: `em`, `rem`, `%`, `vw` (viewport width), `vh` (viewport height).
        - **Usage**: Offers flexibility and scalability, adapting to different screen sizes and resolutions.
        - **Example**: Setting `width: 50%;` makes an element occupy 50% of its parent container's width, facilitating responsiveness.

### Grading Quiz Week 3

1. What is CSS Flexbox?
    - **Layout Model**: CSS Flexbox is a layout model that allows flexible arrangement of elements within a container.
    - **Main Axis**: Elements can be laid out horizontally or vertically along the main axis of the container.
    - **Alignment**: Supports alignment of items both along the main axis and cross axis.
    - **Responsive Design**: Facilitates responsive design by dynamically adjusting the layout based on available space.
    - **Examples**: Creating navigation bars, grids, or card layouts with dynamic spacing and alignment using properties like `display: flex`, `flex-direction`, `justify-content`, and `align-items`.
2. What are the differences between CSS Grids and Flexbox?
    - **Layout Approach**: Grids are two-dimensional layouts, while Flexbox is one-dimensional.
    - **Axis Control**: Grids control rows and columns independently, Flexbox controls items along a single axis.
    - **Item Order**: Flexbox allows flexible item order, while Grids follow a strict row-column structure.
    - **Alignment**: Flexbox excels at aligning items along a single axis, Grids offer more control for complex layouts.
    - **Usage**: Flexbox is ideal for small-scale layouts like navigation bars, while Grids are better suited for larger, complex layouts such as website grids or card layouts.
3. What are the different CSS position property values?
    1. **Static**: 
        - Default positioning, elements flow in document order.
        - Example: `position: static;`

    2. **Relative**: 
        - Positioned relative to its normal position, allows offsetting using `top`, `right`, `bottom`, `left`.
        - Example: `position: relative; top: 10px;`

    3. **Absolute**: 
        - Positioned relative to the nearest positioned ancestor, ignores surrounding elements.
        - Example: `position: absolute; top: 0; left: 0;`

    4. **Fixed**: 
        - Positioned relative to the viewport, stays fixed even when scrolling.
        - Example: `position: fixed; top: 0; left: 0;`

    5. **Sticky**: 
        - Acts like `relative` until it reaches a specified scroll position, then behaves like `fixed`.
        - Example: `position: sticky; top: 0;`
4. What is z-index in CSS?
    - **Layering Property**: Determines the stacking order of positioned elements along the z-axis.
    - **Higher Values**: Elements with a higher z-index value appear on top of elements with lower values.
    - **Default**: Elements have a default z-index of `auto`, stacking according to their document order.
    - **Usage**: Useful for controlling the visibility and overlapping of elements, especially in complex layouts.
    - **Example**: An element with `z-index: 2;` appears above another element with `z-index: 1;`, even if the latter comes later in the HTML document.
5. What is responsive web design?
    - **Adaptable Layout**: Ensures web pages display optimally on various devices and screen sizes.
    - **Fluid Grids**: Use relative units and flexible layouts to adjust proportionally to different screen sizes.
    - **Media Queries**: Apply CSS styles based on device characteristics like screen width, height, and orientation.
    - **Flexible Images**: Resize images proportionally to prevent distortion on different devices.
    - **Example**: A website that rearranges its layout and content to fit seamlessly on desktops, tablets, and mobile phones, providing a consistent user experience across devices.
6. What is Bootstrap?
    - **Front-end Framework**: Open-source toolkit for building responsive web pages and web applications.
    - **Pre-built Components**: Offers ready-to-use UI components like buttons, forms, navigation bars, and more.
    - **Grid System**: Flexible grid layout system for creating responsive designs across various screen sizes.
    - **Customizable**: Easily customizable with Sass variables and mixins, allowing developers to modify styles.
    - **Example**: Using Bootstrap's grid system to create a responsive layout with rows and columns, and incorporating Bootstrap's pre-styled components like buttons and cards to enhance the design and functionality of a website.
7. What are the differences between semantic and non-semantic HTML tags?
    -  Semantic HTML Tags
        - **Meaning**: Clearly describe their meaning and purpose.
        - **Examples**:
            - **`<header>`**: Defines the header section of a document or section.
            - **`<nav>`**: Defines a set of navigation links.
            - **`<article>`**: Represents a self-contained piece of content.
            - **`<section>`**: Groups related content together.
            - **`<aside>`**: Contains content aside from the main content.
            - **`<footer>`**: Defines the footer section of a document or section.
            - **`<main>`**: Represents the main content of the document.
        - **Benefits**:
            - Improves content structure.
            - Enhances accessibility and SEO.
            - Increases code readability and maintainability.

    -  Non-Semantic HTML Tags
        - **Meaning**: Do not provide any information about their content.
        - **Examples**:
            - **`<div>`**: A block-level element used for layout and grouping.
            - **`<span>`**: An inline element used for styling parts of text.
        - **Usage**:
            - Often rely on class or id attributes to convey meaning.
            - Commonly used for general-purpose styling and layout tasks.
        - **Drawbacks**:
            - Less informative and harder to understand without additional context.
            - Do not inherently enhance accessibility or SEO.
8. What are the differences between block elements, inline elements and inline-block elements?
    - Block Elements
        - **Display**: Occupy the full width available, starting on a new line.
        - **Examples**: `<div>`, `<p>`, `<h1>`, `<ul>`, `<li>`.
        - **Behavior**:
            - Takes up the entire width of the parent container.
            - Stacks vertically, one after another.
            - Can contain other block elements and inline elements.
        - **Styling**: Width and height properties can be set; margin and padding affect layout.
        - **Usage**: Used for larger sections of content and structural elements.

    - Inline Elements
        - **Display**: Occupy only the necessary width, staying on the same line.
        - **Examples**: `<span>`, `<a>`, `<em>`, `<strong>`, `<img>`.
        - **Behavior**:
            - Takes up only as much width as necessary.
            - Does not start on a new line.
            - Cannot contain block elements, only other inline elements.
        - **Styling**: Width and height properties generally do not apply; margin and padding affect layout horizontally.
        - **Usage**: Used for styling and structuring small pieces of content within block elements.

    - Inline-Block Elements
        - **Display**: Similar to inline elements but can have width and height set.
        - **Examples**: `<img>`, `<button>`, `<input>`.
        - **Behavior**:
            - Takes up only as much width as necessary but allows setting width and height.
            - Stays on the same line as other inline elements.
            - Can contain other inline elements and content.
        - **Styling**: Width and height properties apply; margin and padding affect layout both horizontally and vertically.
        - **Usage**: Used for elements that need to be styled like block elements but displayed inline, such as buttons or form inputs.
9. What is CSS Box Model?
    - The CSS Box Model describes the layout and sizing of elements in web pages. It consists of four components:   
        1. **Content**: The actual content of the element, such as text or images.
        2. **Padding**: Transparent space around the content, controlled by `padding` property.
        3. **Border**: A border surrounding the content and padding, controlled by `border` property.
        4. **Margin**: Space outside the border, creating distance between elements, controlled by `margin` property.
        - Example : A <div> element with width 200px, padding 20px, border 2px, and margin 20px, forming a rectangular box around its content.
10. What is the difference between absolute and relative length units in CSS? Provide examples.
    - Absolute Length Units
        - **Fixed Sizes**: Maintain a constant size regardless of screen size or parent element.
        - **Examples**: `px` (pixels), `pt` (points), `in` (inches), `cm` (centimeters).
        - **Usage**: Ideal for precise control over element dimensions, like borders or font sizes.
        - **Example**: Setting `width: 200px;` ensures an element is always 200 pixels wide, irrespective of screen size or parent container.

    - Relative Length Units
        - **Relative to Other Factors**: Sizing based on the context of the element or the device.
        - **Examples**: `em`, `rem`, `%`, `vw` (viewport width), `vh` (viewport height).
        - **Usage**: Offers flexibility and scalability, adapting to different screen sizes and resolutions.
        - **Example**: Setting `width: 50%;` makes an element occupy 50% of its parent container's width, facilitating responsiveness.
