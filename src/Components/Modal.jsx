import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="flex items-center justify-center min-h-screen">
          <DialogPanel className="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-6">
            <DialogTitle as="h2" className="text-2xl font-bold mb-4">Shopping Cart Summary</DialogTitle>

            <div className="mb-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span>Classy Modern Smart watch</span>
                <span>Black, XL</span>
                <span>1 x $99.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>Classy Modern Smart watch</span>
                <span>Purple, L</span>
                <span>2 x $89.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>Classy Modern Smart watch</span>
                <span>Cyan, M</span>
                <span>1 x $79.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total Quantity: 4</span>
              <span>Total Price: $356.00</span>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Continue Shopping
              </button>
              <button
                onClick={onClose}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
