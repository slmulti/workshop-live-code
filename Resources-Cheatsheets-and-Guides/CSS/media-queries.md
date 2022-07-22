
# CSS Media Queries

## Why Media Queries?

Given the number of devices, be it desktop monitors or mobile screens, developing a website that is well suited to all screens has become a big challenge for developers.  Non-responsive designs are 'brittle' and can create a poor user experience.

## Responsive Design
A solution would be to design screens for different sizes.  But how many different designs should we create?  How will the device know which version to use?

## Before you start
### What is The Viewport?
The viewport is the user's visible area of a web page.
The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.
Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.
Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.
This was not perfect!! But a quick fix.
Setting The Viewport
HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.

You should include the following <meta> viewport element in all your web pages:

<meta name="viewport" content="width=device-width, initial-scale=1.0">
This gives the browser instructions on how to control the page's dimensions and scaling.

The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.


## @media rule
@media rule to the rescue.  The @media rule allows us to query the device loading our website and use the information to construct rules based on this.

## Anatomy of the @media query    

| @media  |   screen   | (min-width: 300px) |    and   | (max-width: 768px) |
|---------|------------|--------------------|----------|--------------------|
| at rule | media type |   media feature    | operator |   media feature    |


#### @media rule

First part of a media query, the @media does what it says on the tin - targets the device media
#### media type

Although screen is usually expected here, there are other types we can query including 'print' and 'speech', for print preview views and screenreaders respectively.
#### media feature

Features we can query include width, height, orientation and many many more!

## Using min- and max- to create ranges

Querying for a screen width of 500px wouldn't be very useful if we were only able to target screens **exactly** 500px wide.  Instead we can prefix certain properties with min- and max- to create ranges for our rules.

    @media (min-width: 30em) and (max-width: 80em) {
      body {
        background-color: purple;
      }
    }



### Here is some boiler-plate css media rules that attempt to group various device-types and orientations.

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen 
    and (min-device-width : 320px) 
    and (max-device-width : 480px) {
    /* Styles */
    }

    /* Smartphones (landscape) ----------- */
    @media only screen 
    and (min-width : 321px) {
    /* Styles */
    }

    /* Smartphones (portrait) ----------- */
    @media only screen 
    and (max-width : 320px) {
    /* Styles */
    }

    /* iPads (portrait and landscape) ----------- */
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) {
    /* Styles */
    }

    /* iPads (landscape) ----------- */
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) 
    and (orientation : landscape) {
    /* Styles */
    }

    /* iPads (portrait) ----------- */
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) 
    and (orientation : portrait) {
    /* Styles */
    }

    /* Desktops and laptops ----------- */
    @media only screen 
    and (min-width : 1224px) {
    /* Styles */
    }

    /* Large screens ----------- */
    @media only screen 
    and (min-width : 1824px) {
    /* Styles */
    }

    /* iPhone 4 ----------- */
    @media
    only screen and (-webkit-min-device-pixel-ratio : 1.5),
    only screen and (min-device-pixel-ratio : 1.5) {
    /* Styles */
    }
