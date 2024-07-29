document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('resume');
    const file = fileInput.files[0];

    if (file && file.type === 'application/pdf') {
        const formData = new FormData();
        formData.append('resume', file);

        // 模擬文件上傳
        document.getElementById('output').textContent = 'Resume uploaded successfully!';
        localStorage.setItem('uploadedFileName', file.name);

        // 這裡可以加入實際上傳邏輯
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

document.addEventListener('DOMContentLoaded', function() {
    const uploadedFilesDiv = document.getElementById('uploadedFiles');
    if (uploadedFilesDiv) {
        const uploadedFileName = localStorage.getItem('uploadedFileName');
        if (uploadedFileName) {
            const fileItem = document.createElement('div');
            fileItem.textContent = uploadedFileName;
            uploadedFilesDiv.appendChild(fileItem);
        }
    }
});
