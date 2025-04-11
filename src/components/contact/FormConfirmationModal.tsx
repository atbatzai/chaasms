
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface FormConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

const FormConfirmationModal = ({ isOpen, onClose, name }: FormConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center text-lg font-medium leading-6">
            Thank you, {name}!
          </DialogTitle>
          <DialogDescription className="text-center mt-2">
            Your message has been received. We'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500 text-center">
            Check your inbox for a confirmation email with additional information.
          </p>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={onClose}
            className="mt-3"
            style={{ backgroundColor: '#0066B3' }}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormConfirmationModal;
