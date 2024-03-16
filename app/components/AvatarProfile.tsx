'use client';

import React, { useEffect } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import Button from './Button';
import { useMyContext } from '@/MyContext';
import DeleteAvatarProfileModal from './DeleteAvatarProfileModal';
import { useWindowSize } from 'react-use';
import { useSession } from 'next-auth/react';

const UploadAvatar = (): JSX.Element => {
  const [image, setImage] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const editorRef = useRef<AvatarEditor | null>(null);
  const [croppedImage, setCroppedImage] = useState<string>('');
  const { profileAvatar, setProfileAvatar } = useMyContext();
  const [showCropButton, setShowCropButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { width } = useWindowSize();
  const [googleAvatar, setGoogleAvatar] = useState<string | null>();

  // console.log(typeof profileAvatar);

  // const { data: session, status } = useSession<any>();

  // if (status === 'authenticated' && userSession?.user?.image) {
  //   setGoogleAvatar(userSession?.user.image);
  //   // setProfileAvatar(userSession?.user?.image);

  // }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    let res = URL.createObjectURL(file as any);
    console.log('RESSSSS', res);

    try {
      let res = URL.createObjectURL(file as any);
      console.log('RESSSSS', res);
    } catch (error) {
      console.error('Error creating object URL:', error);
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

  const handleSaveProfileImage = async () => {
    setProfileAvatar(croppedImage);

    try {
      const res = await fetch('/api/profileAvatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ profileAvatar: croppedImage }),
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // localStorage.setItem('profileAvatar', croppedImage);

    setCroppedImage('');
    setImage(null);
    setShowCropButton(false);
  };

  const cropPreview = width < 480 ? 100 : width < 768 ? 150 : 200;

  return (
    <main>
      <div>
        <div>
          <div className='flex'>
            <div className='flex flex-col'>
              <div className='container'>
                <div className='flex flex-col  '>
                  <div className='flex flex-col  md:grid md:grid-cols-2  '>
                    <button className='flex w-full'>
                      <label
                        htmlFor='fileInput'
                        className=' text-center font-bold px-3 py-2 text-white bg-purple-500 rounded-md cursor-pointer hover:bg-purple-600 '
                      >
                        {profileAvatar ? 'Change Image' : 'Upload Image'}
                        {/* Upload Image */}
                      </label>
                      <input
                        type='file'
                        id='fileInput'
                        onChange={handleImageChange}
                        className='hidden'
                      />
                    </button>

                    <div className='mt-3 md:mt-0 md:ml-4 w-full  '>
                      {profileAvatar && (
                        <Button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          color='red'
                        >
                          Delete Image
                        </Button>
                      )}
                    </div>
                  </div>

                  <DeleteAvatarProfileModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />

                  {/* example ending */}

                  {showCropButton && (
                    <input
                      type='range'
                      min='1'
                      max='3'
                      step='0.01'
                      value={scale}
                      className='bg-purple-600 mb-5 mt-5 accent-purple-700  w-32 md:w-full '
                      onChange={handleScaleChange}
                    />
                  )}
                </div>

                <div className=' flex container justify-center items-center flex-wrap'>
                  {/* crop */}
                  <div className='flex flex-col justify-evenly items-center m-5'>
                    {image && (
                      <AvatarEditor
                        ref={editorRef}
                        image={image}
                        width={cropPreview}
                        height={cropPreview}
                        border={50}
                        color={[255, 255, 255, 0.6]} // RGBA
                        scale={scale}
                        rotate={0}
                      />
                    )}

                    <div className='relative right-3'>
                      {showCropButton && (
                        <div className='relative  '>
                          <Button color='purple' onClick={handleCrop}>
                            Crop
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* save */}
                  <div className='m-5 right-2 relative'>
                    {/* displaying crop avatar demo */}
                    {croppedImage && (
                      <div className='flex flex-col '>
                        <Image
                          className=' rounded-full relative  border-gray border-2 mb-5'
                          src={croppedImage}
                          alt='Rounded avatar'
                          width={100}
                          height={100}
                        />

                        <Button onClick={handleSaveProfileImage} color='purple'>
                          Save
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* crop photo button */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UploadAvatar;
