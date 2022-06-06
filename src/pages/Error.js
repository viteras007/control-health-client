import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Página não encontrada!</h3>
        <p>Nós não achamos a página que você está procurando</p>
        <Link to='/'>Voltar</Link>
      </div>
    </Wrapper>
  )
}
export default Error