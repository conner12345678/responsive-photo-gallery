const image = document.createElement('div')
const response = (text) => {
    // makes the newly created image visible in the begining of the function
    image.style.visibility = 'visible'

    // this creats the image inside of the div called image as well as setting another onclick function
    image.innerHTML = "<image id='sized' src='" + text + "' alt='resized image' onclick='back()'>"

    // This hides the gallery so that the newly made image can be put on top of them
    document.getElementById('gallery').style.visibility = 'hidden'
    // This allows the image to be put on top of the other images
    image.style.position = 'absolute'
    image.style.top = '8px'

    // This resizes the div but not the image
    image.style.width = '100%'
    image.style.height = '100%'

    // This creates the image on the body of the HTML
    document.body.appendChild(image)

    // This resizes the image to fit the resized div
    document.getElementById('sized').style.width = '100%'
    document.getElementById('sized').style.height = '100%'
}

// This brings back the gallery and hides the newly made div/image
const back = () => {
    image.style.visibility = 'hidden'
    document.getElementById('gallery').style.visibility = 'visible'
}