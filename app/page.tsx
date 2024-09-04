import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import Script from './script';

// Function that returns multiple JSX elements using a Fragment
const renderContent = (): JSX.Element => {
  return (
    <>
      <h1><center> Hellooo everyone your Shrisha kuttie Here...... :) </center></h1>
	  <PhotoAlbum />
    </>
  );
};

// Use the function in a component
const MyComponent: React.FC = () => {
  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default MyComponent;