
import React from "react";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      className="w-full"
      style={{ backgroundColor: '#0066B3', color: 'white' }}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default SubmitButton;
