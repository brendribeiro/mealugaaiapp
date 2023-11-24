import * as React from 'react';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import {
  ContainerSVG,
  ProfileContainer,
  ProfileContent,
  ProfileEmail,
  ProfileFistName,
  ProfileInfos,
  ProfileLastName,
  ProfileNames,
  ProfileUsername,
} from './styles';
import { ProfileSVG } from '../assets/ProfileSVG';
import { PencilSimple } from 'phosphor-react';
import { updateProfile } from '../SignIn/api';

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    // Recupere os dados do usuário do localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProfile(user);
      console.log(user.username); 
      console.log(user.firstName);
      console.log(user.lastName); 
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const updatedProfile = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        username: profile.username,
        email: profile.email,
      };

      const response = await updateProfile(updatedProfile);

      // Atualizar os dados do usuário no localStorage
      localStorage.setItem('user', JSON.stringify(response));

      setIsEditing(false);
    } catch (error) {
      console.error('There was a problem updating the profile:', error);
    }
  };

  return (
    <>
      <ProfileContainer>
        <Header />

        <ProfileContent>
          <ContainerSVG>
            <ProfileSVG />
          </ContainerSVG>

          <ProfileInfos>
            <ProfileNames>
              <ProfileFistName>
                {isEditing ? (
                  <input
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <h2>{profile.firstName}</h2>
                )}
                <p onClick={handleEditClick}>
                  <PencilSimple size={16} /> Nome:
                </p>
              </ProfileFistName>

              <ProfileLastName>
                {isEditing ? (
                  <input
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <h2>{profile.lastName}</h2>
                )}
                <p onClick={handleEditClick}>
                  <PencilSimple size={16} /> Sobrenome:
                </p>
              </ProfileLastName>
            </ProfileNames>

            <ProfileUsername>
              {isEditing ? (
                <input
                  name="username"
                  value={profile.username}
                  onChange={handleInputChange}
                />
              ) : (
                <h2>{profile.username}</h2>
              )}
              <p onClick={handleEditClick}>
                <PencilSimple size={16} /> Username:
              </p>
            </ProfileUsername>

            <ProfileEmail>
              {isEditing ? (
                <input
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                />
              ) : (
                <h2>{profile.email}</h2>
              )}
              <p onClick={handleEditClick}>
                <PencilSimple size={16} /> Email:
              </p>
            </ProfileEmail>

            {isEditing && (
              <button onClick={handleSave}>Salvar Alterações</button>
            )}
          </ProfileInfos>
        </ProfileContent>
      </ProfileContainer>
    </>
  );
}
