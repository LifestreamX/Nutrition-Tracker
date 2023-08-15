import React from 'react';
import Avatar from 'react-avatar';
import { useState } from 'react';

type ImgProps = {
  img: any;
  setImg: any;
};

const defImg = 'http://www.w3.org/2000/svg'

const AvatarProfile = ({ img, setImg }: ImgProps) => {
  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert('File is too big!');
      elem.target.value = '';
    }
  }
  return (
    <div>
      <Avatar
        width={600}
        height={300}
        size={50}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={null}
        round={true}
      />
      <br />
      {preview && (
        <>
          <img src={preview} alt='Preview' />
          <a href={preview} download='avatar'>
            Download image
          </a>
        </>
      )}
    </div>
  );
};

export default AvatarProfile;
