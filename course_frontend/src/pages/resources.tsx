import React from 'react';
import Layout from '@/components/Layout';
import Glossary from '@/components/Glossary';
import PromptLibrary from '@/components/PromptLibrary';
import SourceReference from '@/components/SourceReference';

export default function Resources() {
  return (
    <Layout title="Resources">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Resources</h1>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Supporting Materials for Educators</h2>
          <p className="mb-4">
            This page contains a collection of resources to support your journey in using AI prompting techniques 
            in your teaching practice. You'll find a comprehensive glossary of key terms and concepts, as well as 
            a library of example prompts that you can copy and adapt for your own classroom needs.
          </p>
          <p>
            These resources are designed to be practical and immediately useful in your day-to-day teaching.
            Feel free to bookmark this page and return to it whenever you need inspiration or a refresher.
          </p>
        </div>
        
        <div className="mb-12">
          <Glossary />
        </div>
        
        <div className="mb-12">
          <PromptLibrary />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Final Assessment</h2>
          <p className="mb-4">
            Now that you've completed the "Prompting for Educators" course, you can demonstrate your understanding 
            by taking the final assessment. This assessment will test your knowledge of the TEACH framework, 
            prompting techniques, and applications in educational contexts.
          </p>
          <p className="mb-6">
            The assessment consists of multiple-choice questions and a prompt creation exercise. Upon successful 
            completion, you'll receive a certificate of completion that you can add to your professional portfolio.
          </p>
          <div className="text-center">
            <a href="#" className="btn-primary px-8 py-3">
              Start Final Assessment
            </a>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-subtitle mb-4">Additional Learning Resources</h2>
          <p className="mb-4">Below are some additional resources that you might find helpful:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="text-teal hover:underline">Prompt Engineering Guide</a> - 
              A comprehensive guide to advanced prompt engineering techniques.
            </li>
            <li>
              <a href="#" className="text-teal hover:underline">AI in Education Community</a> - 
              Join our community of educators exploring AI applications in teaching.
            </li>
            <li>
              <a href="#" className="text-teal hover:underline">Monthly Webinars</a> - 
              Attend our monthly webinars featuring expert educators and AI specialists.
            </li>
            <li>
              <a href="#" className="text-teal hover:underline">Research Papers</a> - 
              Access the latest research on AI applications in educational contexts.
            </li>
          </ul>
        </div>
      </div>
      
      <SourceReference fileName="Resources.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 