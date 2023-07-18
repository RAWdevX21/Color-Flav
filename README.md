# ColorFlava

ColorFlava is a JavaScript application that provides various color manipulation functionalities. It allows you to convert colors between different formats, generate tints and shades, and perform other color-related operations.

## Features

### Color Conversion

The app supports converting colors between the following formats:

    HEX (e.g., "#FF0000")
    RGB (e.g., "rgb(255, 0, 0)")
    HSL (e.g., "hsl(0, 100%, 50%)")

You can convert colors from one format to another using the provided conversion functions.

### Tint Generation

The app allows you to generate tints of a base color. Tints are lighter variations of the base color, created by increasing the lightness component while keeping the hue and saturation constant. The app provides functions to generate a range of tints based on the specified number of steps.

### Shade Generation

You can also generate shades of a base color using the app. Shades are darker variations of the base color, created by decreasing the lightness component while keeping the hue and saturation constant. The app provides functions to generate a range of shades based on the specified number of steps.

### Other Color Operations

ColorFlava includes additional color operations, such as:

- Interpolation: Generate intermediate colors between two given colors.
- Complementary Color: Find the complementary color for a given color.
- Color Blending: Blend two colors together to create a new color.
- Contrast Check: Check the contrast ratio between two colors for accessibility purposes.

## Getting Started

To use ColorFlava, follow these steps:

1. Clone the repository or download the source code to your local machine.
2. Open the index.html file in a web browser.
3. Use the provided user interface to interact with the app's features.
4. View the results and use the app's functions for color manipulation.

## Usage Examples

Here are some usage examples of the Color Flava app:

```js
const color = ColorFlava(0, 100, 50);

console.log(color.flavUpHEX()); // Output: "#ff0000"
console.log(color.flavUpHSL()); // Output: { h: 0, s: 100, l: 50 }
console.log(color.toneUp(purple)); // Output: 10 tints of purple
console.log(color.toneDown(yellow)); // Output: 10 shades of yellow
```

In the example above, a new instance of the ColorFlava class is created with an initial color of HSL (0, 100, 50). The various methods (flavUpHEX, flavUpHSL, toneUp, toneDown) are then called on the color instance to perform specific color manipulations and retrieve the results.

### Dependencies

ColorFlava relies on the following dependencies:

- JavaScript: The core logic of the app is written in JavaScript.
- HTML: The user interface is built using HTML for interaction.
- CSS: The app's styling is implemented using CSS for visual appeal.

No external libraries or frameworks are required for the basic functionality of the app.
Contributing

If you would like to contribute to ColorFlava, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Implement your changes in the new branch, following the existing code style and conventions.
3. Write appropriate tests for your new features or modifications.
4. Run the existing tests and make sure they all pass.
5. Submit a pull request with your changes, clearly documenting the purpose and scope of your contributions.

### License

ColorFlava is open source and distributed under the MIT License. Feel free to use, modify, and distribute the code according to the terms of the license.