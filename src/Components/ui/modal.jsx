// Modal.js
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // X icon for closing the modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg relative max-w-lg mx-auto">
        <Button
          variant="outline"
          className="absolute top-2 right-2"
          onClick={onClose}>
          <X />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
