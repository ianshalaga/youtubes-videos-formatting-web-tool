import { Button } from '@mui/material';
import React, { useState } from 'react';


function FilePicker({ onFileSelected }) {
  // const [filePath, setFilePath] = useState('');

  const handleFileSelect = (event) => {
    console.log(event.target.paths);
    const file = event.target.files[0];
    // console.log("pedo");
    if (file) {
      // setFilePath(file.path);
      onFileSelected(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    const directoryInput = document.getElementById('fileInput');
    if (directoryInput) {
      directoryInput.click();
    }
  };

  return (
    <div>
      <input
        id="fileInput"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        mkvmerge.exe file path
      </Button>
    </div>
  );
}

export default FilePicker;
