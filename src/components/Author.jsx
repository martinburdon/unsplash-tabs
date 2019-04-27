import React from 'react';
import styled from 'styled-components';

const Author = styled.div`
  align-items: stretch;
  display: flex;
  font-size: 1.3rem;
`;

const Avatar = styled.img`
  border-radius: 0.4rem;
  display: block;
  height: 3.2rem;
  margin-right: 1rem;
  width: 3.2rem;
`;

const Name = styled.span`
  color: #D8DEE9;
  display: block;
  margin-bottom: 0.2rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Instagram = styled.span`
  color: #D8DEE9;
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
