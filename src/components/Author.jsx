import React from 'react';
import styled from 'styled-components';

const Author = styled.div`
  align-items: stretch;
  bottom: 1rem;
  display: flex;
  font-size: 1.3rem;
  left: 1rem;
  padding: 1rem;
  position: absolute;
  z-index: 1;
`;

const Avatar = styled.img`
  display: block;
  height: 3.2rem;
  margin-right: 1rem;
  width: 3.2rem;
`;

const Name = styled.span`
  color: white;
  display: block;
  margin-bottom: 0.2rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Instagram = styled.span`
  color: white;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ({
  first_name,
  instagram_username,
  links,
  profile_image
}) => (
  <Author>
    <Link href={links.html}>
      <Avatar src={profile_image.small} />
    </Link>
    <InfoContainer>
      <Link href={links.html}>
        <Name>{first_name}</Name>
      </Link>
      {instagram_username &&
        <Link href={`https://instagram.com/${instagram_username}`}>
          <Instagram>@{instagram_username}</Instagram>
        </Link>
      }
    </InfoContainer>
  </Author>
);
