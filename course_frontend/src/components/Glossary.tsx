import React, { useState } from 'react';

type GlossaryTerm = {
  term: string;
  definition: string;
  category: string;
};

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'TEACH Framework',
    definition: 'A structured approach to prompt engineering for educators: Tone and persona, Explicit task, Arrangement of output, Context and constraints, Higher level refinements.',
    category: 'Framework',
  },
  {
    term: 'Zero-shot Prompting',
    definition: 'Asking an AI to perform a task without providing any examples.',
    category: 'Technique',
  },
  {
    term: 'Few-shot Prompting',
    definition: 'Providing one or more examples before asking an AI to perform a similar task.',
    category: 'Technique',
  },
  {
    term: 'Chain-of-Thought Prompting',
    definition: 'Encouraging the AI to break down its reasoning process step by step.',
    category: 'Technique',
  },
  {
    term: 'Role-Based Prompting',
    definition: 'Asking the AI to assume a specific persona or character when responding.',
    category: 'Technique',
  },
  {
    term: 'Tone and Persona',
    definition: 'Setting the right voice and character of the AI response (the "T" in TEACH).',
    category: 'Framework Component',
  },
  {
    term: 'Explicit Task',
    definition: 'Clearly defining what you want the AI to do (the "E" in TEACH).',
    category: 'Framework Component',
  },
  {
    term: 'Arrangement of Output',
    definition: 'Specifying how you want the response formatted (the "A" in TEACH).',
    category: 'Framework Component',
  },
  {
    term: 'Context and Constraints',
    definition: 'Providing background information and limitations (the "C" in TEACH).',
    category: 'Framework Component',
  },
  {
    term: 'Higher Level Refinements',
    definition: 'Fine-tuning to improve the quality of responses (the "H" in TEACH).',
    category: 'Framework Component',
  },
  {
    term: 'Prompt Engineering',
    definition: 'The practice of crafting effective prompts to get desired responses from AI systems.',
    category: 'General',
  },
  {
    term: 'Differentiated Instruction',
    definition: 'Creating materials tailored to different learning levels, styles, and needs.',
    category: 'Application',
  },
];

const Glossary: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...new Set(glossaryTerms.map(term => term.category))];
  
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(filter.toLowerCase()) ||
                         term.definition.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = activeCategory === 'All' || term.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="mb-8">
      <h2 className="text-subtitle mb-4">Glossary of Key Terms</h2>
      
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search terms..."
            className="w-full p-2 border border-light rounded-md"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
        </div>
        
        <div className="w-full sm:w-1/2">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-3 py-1 text-sm rounded-full ${
                  activeCategory === category 
                    ? 'bg-teal text-white' 
                    : 'bg-light text-slate hover:bg-teal/20'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {filteredTerms.length > 0 ? (
        <div className="bg-light p-4 rounded-lg">
          <dl className="space-y-6">
            {filteredTerms.map((item, index) => (
              <div key={index} className="border-b border-white pb-4 last:border-0 last:pb-0">
                <dt className="font-medium text-navy mb-1">{item.term}</dt>
                <dd className="text-slate">
                  {item.definition} 
                  <span className="ml-2 inline-block px-2 py-1 bg-white text-xs rounded-full text-slate">
                    {item.category}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : (
        <div className="bg-light p-4 rounded-lg text-center text-slate">
          No terms match your search.
        </div>
      )}
    </div>
  );
};

export default Glossary; 