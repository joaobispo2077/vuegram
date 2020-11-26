import PicturesAPI from './pages/PicturesAPI/PicturesAPI';
import Digimon from './pages/Digimon/Digimon';
import Cadastro from './pages/Cadastro/Cadastro';

export const routes = [
  {
    path: '', 
    component: Digimon,
    title: 'Digimon'
  },
  {
    path: '/picturesAPI',
    component: PicturesAPI
  },  
  {
    path: '/cadastro', 
    component: Cadastro
  },
];

