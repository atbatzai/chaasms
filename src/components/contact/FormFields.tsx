
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "./utils/emailService";

interface FormFieldsProps {
  formData: ContactFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormFields = ({ formData, handleChange }: FormFieldsProps) => {
  return (
    <>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-chaasms-dark mb-1">Name</label>
        <Input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-chaasms-dark mb-1">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-chaasms-dark mb-1">Company</label>
        <Input
          type="text"
          id="company"
          name="company"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
          placeholder="Your company"
          required
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-chaasms-dark mb-1">Message</label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
          placeholder="Tell us about your channel challenges"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default FormFields;
