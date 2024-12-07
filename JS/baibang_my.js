const tu_images = [
    { "src": "../img/kapian_1.jpg", "alt": "Image 1" },
    { "src": "../img/kapian_2.jpg", "alt": "Image 2" },
    { "src": "../img/kapian_3.jpg", "alt": "Image 1" },
    { "src": "../img/kapian_4.jpg", "alt": "Image 2" },
    { "src": "../img/kapian_5.jpg", "alt": "Image 1" },
    { "src": "../img/kapian_6.jpg", "alt": "Image 2" },
    { "src": "../img/kapian_7.jpg", "alt": "Image 1" },
    { "src": "../img/kapian_8.jpg", "alt": "Image 2" }
];

const container = document.getElementById('bb-tiancong');

for (let i = 0; i < tu_images.length; i += 2) {
    // Create a div for each image pair (left-box and right-box)
    const leftBox = document.createElement('div');
    leftBox.className = 'box4 left-box';
    const leftImg = document.createElement('img');
    leftImg.src = tu_images[i].src; // Use image i for left box
    leftImg.alt = tu_images[i].alt;
    leftBox.appendChild(leftImg);

    // Ensure rightBox has the next image (i + 1)
    const rightBox = document.createElement('div');
    rightBox.className = 'box4 right-box';
    const rightImg = document.createElement('img');
    
    // Check if i + 1 is within bounds to avoid errors
    if (i + 1 < tu_images.length) {
        rightImg.src = tu_images[i + 1].src; // Use image i + 1 for right box
        rightImg.alt = tu_images[i + 1].alt;
    }
    rightBox.appendChild(rightImg);

    // Append to container
    container.appendChild(leftBox);
    container.appendChild(rightBox);
}
