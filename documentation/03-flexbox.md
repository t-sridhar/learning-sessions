# CSS Flexbox

Flexbox is a one-dimensional layout model that allows you to create complex and flexible layouts with ease.

## Flexbox Container Properties

To use Flexbox, you first need to create a flex container:

```css
.container {
  display: flex;
}
```

Here are some of the most common properties for the flex container:

*   `flex-direction`: Defines the direction of the main axis (the direction flex items are placed in the flex container).
    *   `row` (default): left to right
    *   `row-reverse`: right to left
    *   `column`: top to bottom
    *   `column-reverse`: bottom to top
*   `justify-content`: Aligns flex items along the main axis.
    *   `flex-start` (default)
    *   `flex-end`
    *   `center`
    *   `space-between`
    *   `space-around`
*   `align-items`: Aligns flex items along the cross axis.
    *   `stretch` (default)
    *   `flex-start`
    *   `flex-end`
    *   `center`
*   `flex-wrap`: Specifies whether flex items should wrap or not.
    *   `nowrap` (default)
    *   `wrap`
    *   `wrap-reverse`

## Flex Item Properties

These properties are applied to the flex items themselves:

*   `flex-grow`: The ability for a flex item to grow if necessary.
*   `flex-shrink`: The ability for a flex item to shrink if necessary.
*   `flex-basis`: The default size of an element before the remaining space is distributed.
*   `flex`: A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
*   `align-self`: Overrides the `align-items` property for a single flex item.
