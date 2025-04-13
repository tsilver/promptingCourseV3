import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';

export default function About() {
  return (
    <Layout title="About">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">About This Course</h1>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Course Overview</h2>
          <p className="mb-4">
            "Prompting for Educators" is a comprehensive course designed to help teachers with no technical
            background learn how to effectively use AI prompts to enhance their teaching practice, reduce
            workload, and improve student engagement.
          </p>
          <p>
            The course follows the TEACH framework, a structured approach to prompt engineering specifically
            designed for educational contexts. Through six carefully crafted units, educators will learn
            practical skills that they can immediately apply in their classrooms.
          </p>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Course Philosophy</h2>
          <p className="mb-4">
            We believe that AI tools should serve to enhance human creativity and expertise, not replace it.
            This course is built on the philosophy that educators are the experts in teaching and learning,
            and AI tools are most valuable when they amplify teachers' capabilities and free up time for
            the aspects of education that require human connection and insight.
          </p>
          <p>
            Our approach emphasizes practical application, ethical considerations, and the importance of
            maintaining the human touch in all educational experiences.
          </p>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-light rounded-full mb-3 flex items-center justify-center text-navy text-2xl font-bold">
                JD
              </div>
              <h3 className="font-medium">Dr. Jane Doe</h3>
              <p className="text-slate text-sm">Educational Technology Specialist</p>
              <p className="text-slate text-sm mt-2">
                20+ years experience in K-12 education and educational technology integration.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-light rounded-full mb-3 flex items-center justify-center text-navy text-2xl font-bold">
                JS
              </div>
              <h3 className="font-medium">John Smith</h3>
              <p className="text-slate text-sm">AI Prompt Engineering Expert</p>
              <p className="text-slate text-sm mt-2">
                Specialist in AI applications for education with experience training over 1,000 educators.
              </p>
            </div>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Feedback and Continuous Improvement</h2>
          <p className="mb-4">
            We are committed to continually improving this course based on educator feedback and evolving
            AI capabilities. If you have suggestions, questions, or comments about the course content or
            structure, please reach out to us using the contact information below.
          </p>
          <p className="mb-4">
            Your feedback helps us make this resource more valuable for all educators.
          </p>
          <div className="bg-light p-4 rounded-lg text-center">
            <p className="font-medium">Contact Us</p>
            <p className="text-slate">education@example.com</p>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-subtitle mb-4">Acknowledgments</h2>
          <p className="mb-4">
            This course was developed with the support and input of numerous educators, AI specialists,
            and instructional designers. We would like to express our gratitude to all who contributed
            their time, expertise, and feedback.
          </p>
          <p>
            Special thanks to the educators who participated in our pilot program and provided invaluable
            insights that helped shape the final course content.
          </p>
        </div>
      </div>
      
      <SourceReference fileName="About.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 