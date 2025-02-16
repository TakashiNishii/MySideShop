import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const AboutContent = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 40px;
`;

export const AboutSection = styled.section`
  margin-bottom: 40px;

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.sizes.h1};
    margin-bottom: 20px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.sizes.h2};
    margin-bottom: 15px;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;

    li {
      margin-bottom: 10px;
    }
  }
`;

export const TeamSection = styled(AboutSection)`
  .team-grid {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
`;

export const TeamMember = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.sizes.h3};
    margin-bottom: 5px;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.body};
  }
`; 