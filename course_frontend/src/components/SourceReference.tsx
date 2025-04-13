import React from 'react';

type SourceReferenceProps = {
  fileName: string;
  path?: string;
};

const SourceReference: React.FC<SourceReferenceProps> = ({ fileName, path }) => {
  const fullReference = path ? `${path}/${fileName}` : fileName;
  
  return (
    <div className="mt-8 pt-4 border-t border-light">
      <p className="text-small text-slate italic">
        Source: <span className="font-medium">{fullReference}</span>
      </p>
    </div>
  );
};

export default SourceReference; 