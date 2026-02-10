# CSS Grid

CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts.

## Grid Container Properties

To use Grid, you first need to create a grid container:

```css
.container {
  display: grid;
}
```

Here are some of the most common properties for the grid container:

*   `grid-template-columns`: Defines the number and size of columns in the grid.
*   `grid-template-rows`: Defines the number and size of rows in the grid.
*   `gap`: The space between grid items. You can also use `grid-column-gap` and `grid-row-gap`.
*   `justify-items`: Aligns grid items along the row axis.
*   `align-items`: Aligns grid items along the column axis.

## Grid Item Properties

These properties are applied to the grid items themselves:

*   `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`: Determine a grid item's location within the grid by referring to specific grid lines.
*   `grid-column`, `grid-row`: Shorthand for `grid-column-start`/`grid-column-end` and `grid-row-start`/`grid-row-end`.
*   `justify-self`: Aligns a single grid item along the row axis.
*   `align-self`: Aligns a single grid item along the column axis.

## Example

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three equal-width columns */
  gap: 20px;
}

.item {
  grid-column: 1 / 3; /* This item will span from the first to the third column line */
}
```
