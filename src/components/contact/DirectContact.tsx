
import React from "react";

const DirectContact = () => {
  return (
    <div className="mt-4 text-center text-sm text-gray-500">
      Having trouble with the form? Email us directly at{" "}
      <a 
        href="mailto:jeff.turner@chaasms.com" 
        className="text-chaasms-blue hover:underline"
      >
        jeff.turner@chaasms.com
      </a>
    </div>
  );
};

export default DirectContact;
