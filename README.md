# Image Tag Cloud | HTML CSS jQuery

This project implements an image cloud using HTML, CSS, and jQuery. Images are displayed in a cloud-like formation with random sizes and positions, and they scale on hover.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/anthitariel/image-tag-cloud.git
   ```

2. Update the images data and adjust the parameters as needed:

   - `minHeight`: Minimum height for the images
   - `maxHeight`: Maximum height for the images
   - `aspectRatio`: Aspect ratio for the images (default is 3:2)

3. Open the `index.html` file in your browser.

## Project Structure

- `index.html`: HTML file containing the structure of the image cloud.
- `style.css`: CSS file with styles for the image cloud.
- `script.js`: jQuery script for generating and animating the floating images.

## Image Data

Images are defined in the `images` array in the `script.js` file. Each image object includes:

- `imageUrl`: URL of the image.
- `linkUrl`: URL to navigate to when the image is clicked.
- `imageTitle`: Title of the image.

## Customization

Adjust the default image size configuration by modifying the `defaultImageSizeRem` object in the `script.js` file:

```javascript
const defaultImageSizeRem = {
    minHeight: 10,
    maxHeight: 20,
};
```

## Features

- Images are randomly positioned and sized within the specified range.
- Images scale and become opaque on hover.
- Automatic movement and resizing of images at regular intervals.

Feel free to explore and customize the project to suit your needs!

## Contributing

If you'd like to contribute to this project, please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.