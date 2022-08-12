import styled from "@emotion/styled";

export const PostWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  padding: 0 0.5rem;
  :hover {
    /* background: #e6cdcc; */
    background: #fff;
  }
`;

export const PostImage = styled.div`
  height: 16.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 1.25rem;
    transition: all 0.3s ease-in-out;
  }
`;
export const PostName = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #313037;
  text-transform: uppercase;
  margin: 1rem 0 0.25rem;
`;

export const PostAuthor = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #a8a8a8;
`;
export const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #313037;
`;
export const Rating = styled.p`
  font-weight: 700;
  font-size: 1.5rem;

  line-height: 2rem;
  color: #313037;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.7rem;
`;
