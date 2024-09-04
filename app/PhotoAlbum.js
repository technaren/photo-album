import React from 'react';
const publicUrl = process.env.PUBLIC_URL || '';

const photos = [];
const imageDefault = "shrisha";
for (let i = 1; i <= 5; i++) {
	let pt = {
		src: publicUrl + imageDefault + i + ".jpg",
		title: imageDefault + i,
	}
    photos.push(pt);
}

const PhotoAlbum = () => {
  return (
    <div style={styles.albumContainer}>
      {photos.map((photo, index) => (
        <div key={index} style={styles.photoContainer}>
          <img src={photo.src} alt={photo.title} style={styles.photo} />
		  <p>{photo.src}</p>
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