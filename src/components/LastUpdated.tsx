'use client';

import React from 'react';

interface LastUpdatedProps {
  lastUpdated: string;
  commitHash?: string;
  className?: string;
  showCommitHash?: boolean;
}

export default function LastUpdated({ 
  lastUpdated, 
  commitHash, 
  className = "", 
  showCommitHash = false 
}: LastUpdatedProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={`text-sm text-gray-500 flex items-center gap-2 justify-end ${className}`}>
      <span>Last updated: {formatDate(lastUpdated)}</span>
      {showCommitHash && commitHash && (
        <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
          {commitHash}
        </code>
      )}
    </div>
  );
} 