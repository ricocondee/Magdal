import React from 'react';
import '../styles/skeleton.css';

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
};

export default Skeleton;