import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import { useState, useRef, ChangeEvent } from 'react';
import willow from './willow.jpg';
import Image from 'next/image';
import Button from './Button';
import { useMyContext } from '@/MyContext';

const UploadAvatar = (): JSX.Element => {
  const [image, setImage] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const editorRef = useRef<AvatarEditor | null>(null);
  const [croppedImage, setCroppedImage] = useState<string>('');
  const { profileAvatar, setProfileAvatar } = useMyContext();
  const [showCropButton, setShowCropButton] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setShowCropButton(true);
    }
  };

  const handleScaleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleCrop = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      // You can now use the canvas to get the cropped image data
      const croppedImage = canvas.toDataURL();

      setCroppedImage(croppedImage);
    }
  };


  const handleSaveProfileImage = () => {
    setProfileAvatar(croppedImage);

      localStorage.setItem('profileAvatar', croppedImage);
    
    setCroppedImage('');
    setImage(null);
    setShowCropButton(false);
  };

  return (
    <main>
      <div>
        <div>
          <div className='flex'>
            <div className='flex flex-col'>
              <div className='container'>
                <div className='flex flex-col  '>
                  {/*  example  */}
                  <label
                    htmlFor='fileInput'
                    className='block px-4 py-2 text-white bg-purple-500 rounded-md cursor-pointer hover:bg-purple-600'
                  >
                    Upload Image
                  </label>
                  <input
                    type='file'
                    id='fileInput'
                    onChange={handleImageChange}
                    className='hidden'
                  />

                  {/* example ending */}

                  {showCropButton && (
                    <input
                      type='range'
                      min='1'
                      max='3'
                      step='0.01'
                      value={scale}
                      className='bg-purple-600 mb-5 mt-5 accent-purple-700'
                      onChange={handleScaleChange}
                    />
                  )}
                </div>

                {image && (
                  <AvatarEditor
                    ref={editorRef}
                    image={image}
                    width={150}
                    height={150}
                    border={50}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={scale}
                    rotate={0}
                  />
                )}

                {/* crop photo button */}
                <div className='relative  flex justify-enter top-2'>
                  {showCropButton && (
                    <Button color='purple' onClick={handleCrop}>
                      Crop
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* displaying crop avatar demo */}
            {croppedImage && (
              <div className='flex flex-col relative top-16 left-24'>
                <Image
                  className='w-20 h-20 rounded-full relative  border-black border-4 mb-5'
                  src={croppedImage}
                  alt='Rounded avatar'
                  width={50}
                  height={50}
                />

                <Button onClick={handleSaveProfileImage} color='purple'>
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UploadAvatar;
