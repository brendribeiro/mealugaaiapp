import { Header } from '../../components/Header';
import { ContainerSVG, ProfileContainer, ProfileContent, ProfileEmail, ProfileFistName, ProfileInfos, ProfileLastName, ProfileNames, ProfileUsername } from './styles';
import { ProfileSVG } from '../assets/ProfileSVG';
import { PencilSimple } from 'phosphor-react';

export function Profile() {
    return (<>
        <ProfileContainer>
            <Header />

            <ProfileContent>
                <ContainerSVG>
                    <ProfileSVG />
                </ContainerSVG>

                <ProfileInfos>
                    <ProfileNames>
                        <ProfileFistName>
                            <p><PencilSimple size={16} /> Nome:</p>
                            <h2>John</h2>
                        </ProfileFistName>

                        <ProfileLastName>
                            <p><PencilSimple size={16} /> Sobrenome:</p>
                            <h2>Smith</h2>
                        </ProfileLastName>
                    </ProfileNames>

                    <ProfileUsername>
                        <p><PencilSimple size={16} /> Username:</p>
                        <h2>johnSmith123</h2>
                    </ProfileUsername>

                    <ProfileEmail>
                        <p><PencilSimple size={16} /> Email:</p>
                        <h2>johnsmith123@email.com</h2>
                    </ProfileEmail>
                </ProfileInfos>
            </ProfileContent>
        </ProfileContainer>
    </>)
}