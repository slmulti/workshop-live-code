# Flex Box
### What is it?

Flexbox is a model introduced into css that helps control the layout of an html document and provides the ability to control more easily the flow or distribution of elements in the document.

### Terminology

|Term| Explanation  |
|--|--|
| Container  | Parent element on which we will set the display property`display: flex;`  |
| Item(s)   | Children of the parent element or container with the flex declaration |
| Main-Axis  | Setting the flex-direction sets the primary direction of the container, which will determine the flow or positioning of its items.  |
| Cross-Axis  | This is the axis perpendicular to the main axis. |
 
 ![Depicts three children elements inside a parent element organised in a row with the caption: Main Axis - flex direction: row](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics1.png)

![Depicts three children elements inside a parent element organised in a column with the caption: Main Axis - flex direction: column](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics2.png)


## Flexbox, Declarations and Properties

    #parentElement {
    display: flex;
    flex-direction: row;
    }
###  Default Behaviour
Now that there is a **flex container**, we can use it to distribute our direct children elements or items more easily.  Here is a quick list of behaviours of items based on initial default values:
-   Items display in a row (the  `flex-direction`  property's default is  `row`).
-   The items start from the start edge of the main axis.
-   The items do not stretch on the main dimension, but can shrink.
-   The items will stretch to fill the size of the cross axis.
-   The  [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)  property is set to  `auto`.
-   The  [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)  property is set to  `nowrap`.

The result of this is that your items will all line up in a row, using the size of the content as their size in the main axis. If there are more items than can fit in the container, they will not wrap but will instead overflow. If some items are taller than others, all items will stretch along the cross axis to fill its full size.

### Justify-content
The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)  **`justify-content`** property defines how the browser distributes space between and around content items along the [main-axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) of a flex container.  Below are some of the values you can use with the justify-content property.  This will be set on the flex container.

![A chart depicting the values that the css property "justify-content" accepts and the resulting effects on the items.](http://www.w3.org/TR/css3-flexbox/images/flex-pack.svg)


### Align-items
The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)  **`align-items`** property sets the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) value on all direct children as a group. In Flexbox, it controls the alignment of items on the [Cross Axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis).  (remember that we set the main axis, which also determines the cross-axis.)  This is the counter-part to the justify-content.
    
![A chart depicting the values that the css property "align-items" accepts and the resulting effects on the items.](https://css-tricks.com/wp-content/uploads/2019/10/flex-align.svg)

### Flex-wrap
The **`flex-wrap`**  [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.