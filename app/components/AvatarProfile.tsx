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
      </div>
    </main>
  );
};

export default UploadAvatar;
