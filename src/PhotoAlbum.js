import React from 'react';

const photos = [
  {
    src: `${process.env.PUBLIC_URL}/images/shrisha1.jpg`,
    title: 'Shrisha1',
  },
  {
    src: `${process.env.PUBLIC_URL}/images/shrisha2.jpg`,
    title: 'Shrisha2',
  },
  {
    src: `${process.env.PUBLIC_URL}/images/shrisha3.jpg`,
    title: 'Shrisha3',
  },
];

const PhotoAlbum = () => {
  return (
    <div style={styles.albumContainer}>
      {photos.map((photo, index) => (
        <div key={index} style={styles.photoContainer}>
          <img src={photo.src} alt={photo.title} style={styles.photo} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  albumContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '20px',
  },
  photoContainer: {
    margin: '10px',
    textAlign: 'center',
  },
  photo: {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default PhotoAlbum;