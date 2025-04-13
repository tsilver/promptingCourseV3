import React, { useState } from 'react';

type PromptExample = {
  title: string;
  prompt: string;
  category: string;
  forUse: string;
};

const promptExamples: PromptExample[] = [
  {
    title: 'Lesson Plan Creation',
    prompt: 'Create a 45-minute lesson plan for 4th-grade students on the water cycle. Include a 10-minute introduction, a 20-minute hands-on activity, a 10-minute discussion, and a 5-minute conclusion with exit ticket. Provide a list of required materials, learning objectives aligned with NGSS standards, and differentiation options for students who need additional support or enrichment.',
    category: 'Lesson Planning',
    forUse: 'Creating complete lesson materials efficiently',
  },
  {
    title: 'Differentiated Content',
    prompt: 'Take this paragraph about the causes of the American Civil War and create three differentiated versions: 1) A simplified version with vocabulary appropriate for English language learners, 2) A version with additional context and visual cues for students with learning disabilities, 3) An advanced version with additional depth and complexity for gifted students. Original paragraph: [insert your paragraph here]',
    category: 'Differentiated Instruction',
    forUse: 'Creating materials for diverse learning needs',
  },
  {
    title: 'Assessment Creation',
    prompt: 'Create a comprehensive assessment for a high school unit on Shakespeare\'s Romeo and Juliet with the following components: 1) 10 multiple-choice questions testing comprehension of plot, characters, and themes, 2) 3 short-answer questions focused on literary analysis, 3) 1 creative performance task with a scoring rubric. Ensure the assessment includes questions at various levels of Bloom\'s taxonomy, from basic recall to evaluation and creation.',
    category: 'Assessment',
    forUse: 'Generating varied assessment materials',
  },
  {
    title: 'Student Feedback Generator',
    prompt: 'Generate constructive feedback for a 3rd-grade student\'s writing sample below. The student is working on using descriptive language, proper paragraph structure, and correct punctuation. Provide 2 specific strengths, 2 areas for improvement, and 2 questions to prompt reflection. Keep feedback encouraging and specific. Student writing sample: [insert student work here]',
    category: 'Student Feedback',
    forUse: 'Creating personalized, constructive feedback',
  },
  {
    title: 'Parent Communication',
    prompt: 'Draft a positive but honest email to parents about their child who is struggling with staying focused during class discussions but excels in written assignments. Include suggestions for how they might support their child at home, and emphasize that you\'re committed to helping the student succeed. The tone should be collaborative, supportive, and solution-oriented.',
    category: 'Communication',
    forUse: 'Drafting professional parent communications',
  },
  {
    title: 'Discussion Questions',
    prompt: 'Create a list of 5 discussion questions about photosynthesis for 7th-grade students.',
    category: 'Classroom Activities',
    forUse: 'Generating engaging discussion starters',
  },
  {
    title: 'Vocabulary Exercises',
    prompt: 'Create vocabulary exercises for 5th-grade students studying weather patterns. Example 1: Word: Precipitation, Definition: Water that falls from clouds as rain, snow, sleet, or hail. Fill-in-the-blank: During the storm, we saw heavy ________ in the form of rain and hail. Word in context: Scientists measure precipitation to predict future weather patterns. Please create 5 more vocabulary exercises following this same format for: atmosphere, forecast, humidity, meteorologist, and temperature.',
    category: 'Learning Materials',
    forUse: 'Creating vocabulary practice with consistent formatting',
  },
  {
    title: 'Math Problem Explanation',
    prompt: 'Solve this math problem step by step, explaining each operation as if teaching a 6th-grade student: A classroom has 32 students. If they need to form groups with an equal number of students, and each group needs at least 3 but no more than 8 students, how many different group arrangements are possible?',
    category: 'Math Instruction',
    forUse: 'Generating step-by-step math explanations',
  },
  {
    title: 'Historical Role Play',
    prompt: 'Act as a historical figure from the American Revolution addressing a town hall meeting. Explain why independence from Britain is necessary and address potential concerns from colonists who still feel loyal to the crown. Keep your language appropriate for 8th-grade students.',
    category: 'History Instruction',
    forUse: 'Creating engaging historical content through role play',
  },
];

const PromptLibrary: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedPrompt, setExpandedPrompt] = useState<number | null>(null);
  
  const categories = ['All', ...new Set(promptExamples.map(ex => ex.category))];
  
  const filteredPrompts = promptExamples.filter(example => {
    const matchesSearch = example.title.toLowerCase().includes(filter.toLowerCase()) ||
                         example.prompt.toLowerCase().includes(filter.toLowerCase()) ||
                         example.forUse.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = activeCategory === 'All' || example.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you'd add a toast notification here
  };
  
  return (
    <div className="mb-8">
      <h2 className="text-subtitle mb-4">Prompt Library</h2>
      
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search prompts..."
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
      
      {filteredPrompts.length > 0 ? (
        <div className="space-y-4">
          {filteredPrompts.map((example, index) => (
            <div key={index} className="card hover:shadow-md transition cursor-pointer" onClick={() => setExpandedPrompt(expandedPrompt === index ? null : index)}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium mb-1">{example.title}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-light px-2 py-1 rounded-full">{example.category}</span>
                    <span className="text-xs text-slate ml-2">{example.forUse}</span>
                  </div>
                </div>
                <button 
                  className="text-teal hover:text-teal-dark p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyPrompt(example.prompt);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
              
              {expandedPrompt === index && (
                <div className="mt-3 pt-3 border-t border-light">
                  <p className="text-slate whitespace-pre-wrap">{example.prompt}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-light p-4 rounded-lg text-center text-slate">
          No prompts match your search.
        </div>
      )}
    </div>
  );
};

export default PromptLibrary; 