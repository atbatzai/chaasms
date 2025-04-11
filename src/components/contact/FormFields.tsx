
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { z } from "zod";

// Match the schema from ContactForm.tsx
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  website: z.string().url().optional().or(z.literal('')),
  message: z.string().min(10)
});

// Use the inferred type from the schema
export type FormValues = z.infer<typeof contactFormSchema>;

interface FormFieldsProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const FormFields = ({ register, errors }: FormFieldsProps) => {
  return (
    <>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-chaasms-dark mb-1">Name</label>
        <Input
          id="name"
          className={`w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue`}
          placeholder="Your name"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-chaasms-dark mb-1">Email</label>
        <Input
          id="email"
          type="email"
          className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue`}
          placeholder="your@email.com"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-chaasms-dark mb-1">Company</label>
        <Input
          id="company"
          className={`w-full rounded-md border ${errors.company ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue`}
          placeholder="Your company"
          aria-invalid={errors.company ? "true" : "false"}
          {...register("company")}
        />
        {errors.company && (
          <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-chaasms-dark mb-1">Website (optional)</label>
        <Input
          id="website"
          className={`w-full rounded-md border ${errors.website ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue`}
          placeholder="https://yourcompany.com"
          aria-invalid={errors.website ? "true" : "false"}
          {...register("website")}
        />
        {errors.website && (
          <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-chaasms-dark mb-1">Message</label>
        <Textarea
          id="message"
          rows={3}
          className={`w-full rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue`}
          placeholder="Tell us about your channel challenges"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
    </>
  );
};

export default FormFields;
