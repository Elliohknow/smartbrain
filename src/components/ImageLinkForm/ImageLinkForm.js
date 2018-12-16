import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div className="ma4 mt0">
      <p className="f3 fw7">
        {'The Magic Tentacle will detect faces in your pictures. Give it a try!'}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-3">
          <input
            className="center f4 pa2 w-70"
            type="text"
            placeholder="image url"
            onChange={onInputChange}
          />
          <button
            className="f4 ph3 pv2 w-30 dib link white bg-light-purple"
            onClick={onImageSubmit}
          >Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;