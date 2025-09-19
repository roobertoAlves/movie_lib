import './style.css';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Skeletons = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="skeleton-card">
          <Skeleton height={225} className="skeleton-img" />
          <Skeleton height={32} className="skeleton-title" />
          <Skeleton height={24} width={80} className="skeleton-rating" />
          <Skeleton height={36} width={100} className="skeleton-btn" />
        </div>
      ))}
    </>
  );
}

export default Skeletons;
