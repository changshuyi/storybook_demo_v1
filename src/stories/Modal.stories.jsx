import React, { useState } from 'react';

import Modal from '../components/modal/Modal';
import Dialog from '../components/dialog/Dialog';
import Button from '../components/button/Button';

export default {
  title: 'Feebback | 反饋元件/Modal',
  component: Modal,
};

const Template = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ background: '#FFF' }}>Modal content</div>
      </Modal>
    </>
  );
};

const TemplateDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={<div style={{ fontWeight: 500 }}>Title</div>}
      >
        <div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
        </div>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
export const ModalAsDialog = TemplateDialog.bind({});
