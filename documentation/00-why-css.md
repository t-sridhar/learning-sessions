# Why is it called "Cascading" Style Sheets?

The "Cascading" part of CSS is one of its most important features. It refers to the way styles are applied to elements in a specific order of precedence.

When multiple CSS rules apply to the same element, the browser has to decide which one to use. This is where the cascade comes in. The cascade is an algorithm that determines the final style of an element based on a few factors:

1.  **Origin and Importance:** The origin of a style sheet (author, user, or user-agent) and whether a style is marked as `!important`.
2.  **Specificity:** How specific a selector is. More specific selectors override less specific ones.
3.  **Source Order:** The order in which the styles are declared in the style sheet. If two rules have the same specificity, the one that comes last will be applied.

## The Cascade Order

1.  **User-agent stylesheets:** The default styles applied by the browser.
2.  **User stylesheets:** Custom styles that a user can apply to all websites they visit.
3.  **Author stylesheets:** The styles written by the web developer (you!).
4.  **`!important` rules:** Any style marked with `!important` will take precedence over all other styles.

Understanding the cascade is crucial for writing predictable and maintainable CSS.
