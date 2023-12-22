document.addEventListener("DOMContentLoaded", function () {
    const linkUrl = "https://anthitariel.github.io/portfolio/";

    // Fetch images data
    $.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=9", function (data) {
        if (data.success) {

// Default image size configuration
const defaultImageSizePercent = {
    minHeight: 10,
    maxHeight: 20,
};

// Container for displaying images
const container = $(".image-cloud-container");

// Generate floating images
generateFloatingImages(data.photos);

// Set a timeout to start the initial movement and a setInterval to continue movement
let animationInterval;

setTimeout(() => {
    changeImagePosition();
    animationInterval = setInterval(changeImagePosition, 3000);
}, 1000);

// Keep track of hover state
let isHovered = false;

// Function to generate floating images and append them to the container
function generateFloatingImages(images) {
    images.forEach((image, index) => {
        const size = getRandomSize(defaultImageSizePercent);
        const position = getRandomPosition(container, size.width, size.height);
        const div = createFloatingImageDiv(index, size, position, image);
        container.append(div);
    });
}

// Function to create a floating image div
function createFloatingImageDiv(index, size, position, image) {
    return $(`<div class="floatingImage" id="image${index + 1}" style="width: ${size.width}%; height: ${size.height}%; top: ${position.top}px; left: ${position.left}px;"><a href="${linkUrl}" target="_blank"><img src="${image.url}" alt="Image ${index + 1}" title="${image.title}"></a></div>`)
        .hover(
            function () {
                // Pause animation on hover
                clearInterval(animationInterval);
                // Set a higher z-index for the hovered image
                $(this).css('z-index', 3);
                // Set hover state to true
                isHovered = true;
            },
            function () {
                // Resume animation on hover out
                animationInterval = setInterval(changeImagePosition, 2000);
                // Restore the z-index for non-hovered images
                $(this).css('z-index', 2);
                // Set hover state to false
                isHovered = false;
            }
        );
}

// Function to change the position and size of images
function changeImagePosition() {
    const icons = $(".floatingImage");
    icons.each(function () {
        if (!isHovered) {
            const container = $(this).parent();
            const initialSize = {
                width: parseFloat($(this).css('width')),
                height: parseFloat($(this).css('height'))
            };
            const newSize = {
                width: initialSize.height * (3 / 2), // Ensure a 3:2 aspect ratio
                height: initialSize.height
            };
            const newPosition = getRandomPosition(container, newSize.width, newSize.height);
            $(this).stop().animate({ top: newPosition.top, left: newPosition.left }).css({ width: newSize.width, height: newSize.height });
        }
    });
}

// Function to get a random position for an image
function getRandomPosition(container, newWidth, newHeight) {
    const containerWidth = container.width();
    const containerHeight = container.height();
    const top = Math.random() * (containerHeight - newHeight);
    const left = Math.random() * (containerWidth - newWidth);
    return { top: top, left: left };
}

// Function to get a random size for an image
function getRandomSize(sizeConfig) {
    const height = Math.random() * (sizeConfig.maxHeight - sizeConfig.minHeight) + sizeConfig.minHeight;
    const width = height * (3 / 2);
    if (width > defaultImageSizePercent.maxHeight * (3 / 2)) {
        const maxWidth = defaultImageSizePercent.maxHeight * (3 / 2);
        const adjustedHeight = maxWidth / (3 / 2);
        return { width: maxWidth, height: adjustedHeight };
    }
    return { width: width, height: height };
}

        } else {
            console.error("Failed to fetch images");
        }
    });
});