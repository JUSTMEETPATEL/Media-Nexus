'use client';

import { Specialization } from '../types/specializations';
import { motion } from 'framer-motion';
import { CheckCircle, Book } from 'lucide-react';

interface CourseContentProps {
  specialization: Specialization;
}

export function CourseContent({ specialization }: CourseContentProps) {
  return (
    <div className="space-y-8 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">
          {specialization.title}
        </h2>
        {specialization.description && (
          <p className="text-lg text-gray-600">{specialization.description}</p>
        )}
      </motion.div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
          <Book className="mr-2 text-cyan-400" />
          Why Choose This Course?
        </h3>
        <div className="grid gap-6">
          {specialization.reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
            >
              <h4 className="text-xl font-medium text-gray-800 flex items-center">
                <CheckCircle className="mr-2 text-cyan-400" />
                {reason.text}
              </h4>
              {reason.details && reason.details.length > 0 && (
                <ul className="list-disc pl-5 space-y-2">
                  {reason.details.map((detail, index) => (
                    <li key={index} className="text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
