# Sample Task

## Mandatory technologies

-   Vue.js 2.x
    -   Vuex data store
-   SCSS / SASS
-   HTML5

Browser: Latest versions of the most popular browsers, e.g. Firefox, Chrome, Safari
There are no special cases to be considered.

Please use only HTML and CSS to build the templates, do not use ANY libraries e.g. bootstrap or vuetify

## Draft

```
+--------------------------------+
| LOGO                    Cart v |
+--------------------------------+
|                                |
| +-------------+ +------------+ |
| |             | |            | |
| |             | |            | |
| |             | |            | |
| +-------------+ +------------+ |
| |       - 2 + | |      - 2 + | |
| +-------------+ +------------+ |
|                                |
| +-------------+ +------------+ |
| |             | |            | |
| |             | |            | |
| |             | |            | |
| +-------------+ +------------+ |
| |       - 2 + | |      - 2 + | |
| +-------------+ +------------+ |
|                                |
+--------------------------------+
```


## Target

Implementation of a simple one-pager shop with shopping cart.

-   The products are shown with a preview picture, arranged in a 2-column list.
-   The user can add single products or larger amounts of products to the shopping cart. The amount is specified via a spin-button component.
-   When adding items to the shopping cart, the cart is shown in the header for a short moment, to display its content.
-   Products can be removed from the shopping cart and their amount can be increased or decreased, considering the maximum amount available in the stock.
-   The shopping cart cumulates the contained individual product totals and shows the total cart price. The product prices are available as Euro Cents.
-   The shipping price is 4,90 EUR for a cart total up to 50 EUR. Starting with a cart total of 50 EUR, the shipping is free.

### Remarks

-   We are available for your questions on workdays between 10h00 - 17h00 and will try to answer them in a timely manner.

## Assumptions

-   The data is retrieved via a restful API, e.g. `GET /v2/products`.
-   The shopping cart should be stored in a VueX store.

## Optional 

-   Write a Junit test for checkout component 
-   Write a build script for your solution 

##  **** FOR FULL STACK ONLY ****

## Assumptions

-   The product list is retrieved via a restful API, e.g. `GET /v2/products`.
-   The checkout data is generated via a restful API, e.g. `PUT /v2/checkout`.

-   You Created a service to return the product list created in the same structure as the products.json
-   You Created a service for the checkout the receives the cart and returns:

        - the list of products with subtotals,
        - the shipping cost
        - and the order total
    
- use those services instead of the products.json using axios library

## Optional 

-   Write a Junit test for checkout component
-   Write a Junit test for checkout service 
-   Write a build script for your solution 
