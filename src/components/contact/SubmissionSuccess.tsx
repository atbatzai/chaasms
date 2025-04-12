
import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

type SubmissionSuccessProps = {
  onReset: () => void;
};

const SubmissionSuccess = ({ onReset }: SubmissionSuccessProps) => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-sm">
      <Alert className="bg-green-50 border-green-200">
        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
        <AlertDescription className="text-green-800 text-lg font-medium">
          Thank you for your submission! We'll be in touch soon.
        </AlertDescription>
      </Alert>
      <div className="flex justify-center mt-6">
        <Button 
          onClick={onReset} 
          variant="outline"
          className="mt-4"
        >
          Submit Another Message
        </Button>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
