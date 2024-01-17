/* script.js */
document.getElementById('projectLink').addEventListener('click', function () {
    // Set the project description content
    var projectDescription = "employs a sophisticated approach to tackle the challenging task of license plate identification in adverse conditions. Commencing with a comprehensive dataset, encompassing both high and low-quality images of license plates across diverse environmental contexts, the project engages in meticulous annotation to define precise bounding boxes around license plates. Subsequently, a rigorous preprocessing pipeline is established to enhance the quality of low-resolution images through normalization of lighting conditions, resizing, and additional transformations to ensure dataset homogeneity. The model selection process involves the careful curation of AI classification models, with a preference for Convolutional Neural Networks (CNNs), recognized for their prowess in image-based tasks. The chosen model undergoes rigorous training on the annotated dataset, with a specific emphasis on discerning intricate license plate patterns and characteristics. Evaluation metrics guide the fine-tuning process, focusing on improving overall accuracy and minimizing both false positives and false negatives. The subsequent phase integrates image detection techniques, designed to identify potential license plate regions within an image. Leveraging the trained classification model, the system confirms the presence of a license plate in the identified regions. Integration and deployment involve creating a user-friendly interface to facilitate seamless interaction and deploying the system in real-world scenarios, such as surveillance cameras or traffic monitoring systems. To ensure robust performance, the project addresses challenges associated with noise, blur, and artifacts in low-quality images. Optimization strategies are implemented to enable real-time processing and resource efficiency. Rigorous testing and validation in diverse environments validate the system's reliability, with continuous feedback loops driving iterative improvements. This technologically advanced License Plate Detection System stands as a testament to the convergence of image detection methodologies and AI classification models, offering a resilient solution for license plate recognition in scenarios characterized by low-quality imagery.";

    // Update the modal body with the project description
    document.getElementById('projectDescription').innerHTML = '<p>' + projectDescription + '</p>';

    // Show the modal
    $('#projectModal').modal('show');
});

// Store the selected color
let selectedColor = '';

// Function to handle color selection
function selectColor(color) {
    selectedColor = color;
    updateSelectedColorDisplay();
}

// Function to update the selected color display
function updateSelectedColorDisplay() {
    const displayElement = document.getElementById('selectedColorDisplay');
    displayElement.innerHTML = `Selected Color: ${selectedColor}`;
}

// Function to move to the next step
// Function to handle moving to the next step
// Function to handle moving to the next step
function nextStep() {
    // Add logic based on the selected color for the next steps
    switch (selectedColor) {
        case 'Red':
        case 'Green':
        case 'Orange':
        case 'Black':
        case 'LightBlue':
        case 'Blue':
            // Show the region selection modal
            $('#colorModal').modal('hide');
            $('#regionSelectionModal').modal('show');
            break;
        case 'Black and Yellow':
        case 'Turquoise':
            // Show the image upload modal
            $('#imageUploadModal').modal('show');
            break;
        default:
            // For other colors, you can handle different logic or show a different modal
            break;
    }
}
function previousStep() {
    // Hide the region selection modal
    $('#regionSelectionModal').modal('hide');
    // Show the initial step modal
    $('#colorModal').modal('show');
}

// Function to handle region selection
function selectRegion(region) {
    // Implement logic for region selection
    // This function can be triggered when the user selects a region in the modal
    // You can store the selected region or perform other actions based on your requirements
    // After the selection is done, you may want to close the region selection modal
    // For demonstration purposes, let's assume the region selection is successful and close the modal
    $('#regionSelectionModal').modal('hide');
}

// Function to handle image upload
function uploadImage() {
    // Implement logic for image upload
    // This function can be triggered when the user clicks the "Submit" button in the image upload modal
    // You can use AJAX, fetch, or other methods to handle the image upload process
    // After the upload is done, you may want to close the image upload modal or show a success message
    // For demonstration purposes, let's assume the image upload is successful and close the modal
    $('#imageUploadModal').modal('hide');
}
