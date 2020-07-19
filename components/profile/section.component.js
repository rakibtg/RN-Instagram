import React from 'react';
import ProfileCard from './profileCard.component';
import GalleryFilter from './galleryFilter.component';

const SectionComponent = ({ data }) => {
  if (data.title === 'PHOTOS') return null;
  else if (data.title === 'PROFILE_CARD') return <ProfileCard />
  else if (data.title === 'PHOTO_NAVIGATION') return <GalleryFilter />
}

export default SectionComponent;