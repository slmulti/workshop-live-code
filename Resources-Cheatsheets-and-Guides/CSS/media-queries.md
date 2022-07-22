
# CSS Media Queries

## Why Media Queries?

Given the number of devices, be it desktop monitors or mobile screens, developing a website that is well suited to all screens has become a big challenge for developers.  Non-responsive designs are 'brittle' and can create a poor user experience.
## Responsive Design
A solution would be to design screens for different sizes.  But how many different designs should we create?  How will the device know which version to use?
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