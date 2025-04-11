
import React from "react";

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  content: string | React.ReactNode;
}

const ContactItem = ({ icon: Icon, title, content }: ContactItemProps) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="text-chaasms-blue" size={20} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-chaasms-dark mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

export default ContactItem;
