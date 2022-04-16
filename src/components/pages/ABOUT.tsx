import { useNavigate } from 'react-router-dom';
function About() {
  const navigate = useNavigate();

  return (
    <>
      <h2>About</h2>
      <button onClick={() => navigate('/contact?api_key=eimaieU9', { state: 'test' })}>Contact</button>
    </>
  );
}

export default About;
