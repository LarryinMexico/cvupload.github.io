document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('resume');
    const file = fileInput.files[0];

    if (file && file.type === 'application/pdf') {
        const formData = new FormData();
        formData.append('resume', file);

        // This is where you would normally send the file to the server
        // For this example, we will just show a message
        document.getElementById('output').textContent = 'Resume uploaded successfully!';
        
        // Example of sending the form data to a server
        // fetch('/upload', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => response.json())
        //   .then(data => {
        //       document.getElementById('output').textContent = 'Resume uploaded successfully!';
        //   })
        //   .catch(error => {
        //       document.getElementById('output').textContent = 'Error uploading resume.';
        //   });
    } else {
        document.getElementById('output').textContent = 'Please upload a valid PDF file.';
    }
});
