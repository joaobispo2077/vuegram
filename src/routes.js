import PicturesAPI from './pages/PicturesAPI/PicturesAPI';
import Digimon from './pages/Digimon/Digimon';
import Cadastro from './pages/Cadastro/Cadastro';

export const routes = [
  {
    path: '/', 
    component: Digimon,
    title: 'Home Digimon'
  },
  {
    path: '/picturesAPI',
    component: PicturesAPI,
    title: 'PicturesAPI'
  },  
  {
    path: '/cadastro', 
    component: Cadastro,
    title: 'Cadastro'
  },
];

