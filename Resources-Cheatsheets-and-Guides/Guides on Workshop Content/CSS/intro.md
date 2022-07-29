### Fundamental Concepts
Cascading - How CSS resolves conflicts
1. The Source Order
	- last definition (all else being equal) will be taken
2. The Specificity
	- the more specific rule will be taken (for example - a rule for paragraphs and a rule for the id of a particular paragraph: the id will be taken)
3. Inheritance
	- HTML is a tree-structure (parent and children elements): certain properties are inheritable. If I style my element with a font colour, decendants will inherit this property. Not all properties are inheritable

### Syntax & Selectors
Syntax
![Image showing the structure of a ccs rule.](https://www.w3schools.com/css/img_selector.gif)

A CSS rule consists of a selector and a declaration block.  A declaration block is denoted by {} and can contain more than one declaration.   A declaration consists of a property and a value in this format: `property: value;`
  
### Properties
1.  **Colours**

| type | value |
|--------|--------|
| pre-defined names| red |
| hexadecimal| #FF0000 |
| rgb| rgb(255,0,0) |

3. **Background Colours**
	- Same principles as colours
4. **Background Images**
	- background-image: url()
	- other properties for these exist including "background-repeat" and "background-size". Others to explore as well.
5. **Font Family**

6. **Text Align**

7. **Text Decoration**

  
 
### Length Units

1. Absolute Lengths

- px

2. Relative Lengths

- em and rem

  

### Box Model

![A display of the CSS box model depicting the different edges of content, padding, border and margin from smallest to largest.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model/boxmodel-%283%29.png)
1. Content
	- The "real" content of the element.  For example, text, image or video player.
2. Padding
	-  Extends, or "pads" the content area out from the content's edge.
3. Border
	- Surrounds the content and padding area to create a border, and can be explicitly styled via css properties.
4. Margin
	- Extends an area past the border, which governs its interactions with neighbouring elements.  Be mindful of [Margin Collapsing.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)