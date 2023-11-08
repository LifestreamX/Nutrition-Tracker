
import React, { useState, useRef, FormEvent } from 'react';
import Button from '../../components/Button';
import emailjs from '@emailjs/browser';
import { useMyContext } from '@/MyContext';
import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return <ContactForm />;
};

export default Contact;
