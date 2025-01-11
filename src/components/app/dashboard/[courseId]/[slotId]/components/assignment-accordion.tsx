'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FileUpload } from '@/components/ui/file-upload';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

interface Assignment {
  title: string;
  description: string;
  deadline: string;
}

interface AssignmentAccordionProps {
  assignment: Assignment[];
}

interface FormData {
  files: File[];
  link: string;
}

const AssignmentAccordion: React.FC<AssignmentAccordionProps> = ({
  assignment,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    files: [],
    link: '',
  });

  const toggleAccordion = (index: number): void => {
    setExpandedId(expandedId === index ? null : index);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleFileUpload = (files: File[]) => {
    setFormData((prev) => ({ ...prev, files }));
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, link: e.target.value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    assignmentIndex: number
  ) => {
    e.preventDefault();

    try {
      console.log('Submitting assignment:', {
        assignmentIndex,
        files: formData.files,
        link: formData.link,
      });

      toast({
        title: 'Assignment Submitted',
        description: 'Your assignment has been submitted successfully.',
      });

      // Here you can add your submission logic
      // For example:
      // const formDataToSend = new FormData();
      // formData.files.forEach((file) => {
      //   formDataToSend.append('files', file);
      // });
      // formDataToSend.append('link', formData.link);
      // formDataToSend.append('assignmentIndex', String(assignmentIndex));

      // await fetch('/api/submit-assignment', {
      //   method: 'POST',
      //   body: formDataToSend,
      // });

      // Reset form after successful submission
      setFormData({ files: [], link: '' });
    } catch (error) {
      console.error('Error submitting assignment:', error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {assignment.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden border border-cyan-100"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-cyan-50 transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-medium text-gray-900">
                Assignment {index + 1}: {item.title}
              </h3>
            </div>
            {expandedId === index ? (
              <ChevronUp className="w-5 h-5 text-cyan-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-cyan-500" />
            )}
          </button>

          {expandedId === index && (
            <div className="px-6 py-4 bg-white border-t border-cyan-100">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    Description:
                  </h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>

                <form
                  onSubmit={(e) => handleSubmit(e, index)}
                  className="flex flex-col items-center justify-center py-6 space-y-4"
                >
                  <FileUpload onChange={handleFileUpload} />
                  <Input
                    type="url"
                    placeholder="Video Link"
                    value={formData.link}
                    onChange={handleLinkChange}
                    className="px-4 py-2 border border-cyan-500 text-cyan-500 rounded-md hover:bg-cyan-50 transition-colors"
                  />
                  <Button
                    type="submit"
                    className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
                  >
                    Submit
                  </Button>
                </form>

                <div className="flex justify-end">
                  <div className="text-sm text-gray-500">
                    Deadline: {formatDate(item.deadline)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssignmentAccordion;
