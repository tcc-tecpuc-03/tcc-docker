import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import './animation.css'

export function Error() {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-2'>
      <img src='/notfound.png' alt='Página não encontrada' className='animation max-w-[300px] mx-[24px] ' />
      <h1>Página não encontrada</h1>
        <Button>
        <Link to='/'>Voltar para a pagina inicial</Link>
        </Button>
    </div>
  );
}