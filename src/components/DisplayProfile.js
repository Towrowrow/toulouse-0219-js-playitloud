import React from 'react';
import convertDate from '../functions/convertDate';

const DisplayProfile = ({ profile }) => {
  const prenomNom = profile.display_name.split(' ');
  return (
    <div className="DisplayProfil" style={{ color: 'red' }}>
      <h1>Bienvenue {prenomNom[0]}</h1>
      <p>Email : {profile.email}</p>
      <p>Pays : {profile.country}</p>
      <p>Numéro ID : {profile.id}</p>
      <p>Date de naissance : {convertDate(profile.birthdate)}</p>
    </div>
  );
};


export default DisplayProfile;
