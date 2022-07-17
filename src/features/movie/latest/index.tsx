import React from "react";
import styled from "@emotion/styled";
import useLatestMovie from "../../../hooks/useLatestMovie";

const LatestMovieSection: React.FC = () => {
  const { data, isLoading } = useLatestMovie();

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading ? <div>Loading....</div> : <div>{data?.data.title}</div>}
    </Base>
  );
};

export default LatestMovieSection;

const Base = styled.div``;

const Title = styled.h4``;
