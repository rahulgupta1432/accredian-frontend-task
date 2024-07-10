import React, { useState } from 'react';
import { Modal } from '@mui/material';
import HeroSection from './HeroSection';
import ModalForm from './ModalForm';
import './ModalStyles.css';

const ReferEarnPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="refer-earn-page">
      <HeroSection onOpen={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className="modal-content">
          <ModalForm onClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default ReferEarnPage;
