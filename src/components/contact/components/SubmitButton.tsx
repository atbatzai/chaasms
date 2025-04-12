
import React from "react";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  isSubmitting: boolean;
};

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      disabled={isSubmitting}
      className="w-full bg-[#0066B3] hover:bg-blue-700 text-white font-medium py-3"
    >
      {isSubmitting ? "Sending..." : "Submit"}
    </Button>
  );
};

export default SubmitButton;
