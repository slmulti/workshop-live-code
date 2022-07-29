## CSS Selectors & Combinators
### Basic Selectors
|Selector Type| Description  |
|--|--|
| Element| This selector requires no leading character.  It can be used to select HTML element tags.  `eg  p, a, body, h1` |
| Class | This selector requires a full-stop character (.) followed by the class name.  This also requires class names to be set in the html document using the class attribute.  `<div class="myClassName" ></div>` |
| Id | This selector requires a hash character (#) followed by the idname.  This also requires id name to be set in the html document using the class attribute.  `<div id="myIdName" ></div>` |
|Attribute| Any attribute assigned to an html element can be selected using square brackets []  eg **html** `<body text="something"></>`   **css** `[text] {}`  |
|Universal| The universal selector, represented by a *, will select all elements.|


Declarations can be shared using the grouping selector:
#### Without Grouping
    h1 {  
    text-align:  center;  
    color:  red;  
    }  
      
    h2 {  
    text-align:  center;  
    color:  red;  
    }
#### With Grouping

    h1, h2 {  
    text-align:  center;  
    color:  red;  
    }

### Combinators
Different ways to combine selectors to target different combination of elements.
| Example | Separator | Selects |
|--|--|--|
| tag.class | no space  | will select elements with **both** tag and .class|
| tag .class | (space) | selects element with .class whose ancestor matches tag |
|tag, .class | , |element with either tag **or** .class  (see grouping above)  |
| tag > .class | > | element with .class who's parent (direct ancestor) matches tag |


### Pseudo-classes
There are many more of these, but here are some of the more commonly used.
|Example| Selects  |
|--|--|
| tag:first-child| the first element within it's container and matches the tag (must be the first element |
| tag:last-child | the last element within it's container and matches the tag (must be the last element|
| tag:first-of-type | the first element within it's container that matches the tag (does not have to be the first element of its parent |
|tag: last-of-type|the last element within it's container that matches the tag (does not have to be the last element of its parent |