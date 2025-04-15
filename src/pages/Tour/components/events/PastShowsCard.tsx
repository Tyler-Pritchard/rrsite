import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper,
  CardContent,
  CardTitle,
  CardButton
} from './pastShowsCard.styles';

const PastShowsCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tour/past');
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardContent>
        <CardTitle>Explore Past Shows, Set Lists, Photos & More</CardTitle>
        <CardButton>View Past Dates</CardButton>
      </CardContent>
    </CardWrapper>
  );
};

export default PastShowsCard;
