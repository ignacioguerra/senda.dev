import theMacallan from '../assets/the-macallan.jpg';
import cn from '../assets/cn.jpg';
import tuHistory from '../assets/tu-history.jpg';
import archivoRosa from '../assets/archivo-rosa.jpg';
import mexicanCaribbean from '../assets/mexican-caribbean.jpg';
import web3d from '../assets/web3d.jpg';

export interface Project {
  imageSrc: ImageMetadata;
  title: string;
  url?: string;
}

export const projects: Project[] = [
  {
    imageSrc: theMacallan,
    title: 'The Macallan',
    url: 'https://www.themacallan.com',
  },
  {
    imageSrc: cn,
    title: 'CN',
    url: 'https://www.cn.com',
  },
  {
    imageSrc: tuHistory,
    title: 'Tu History',
    url: 'https://www.tuhistory.com',
  },
  {
    imageSrc: archivoRosa,
    title: 'Archivo Rosa',
    url: 'https://www.archivorosa.com',
  },
  {
    imageSrc: mexicanCaribbean,
    title: 'Mexican Caribbean',
    url: 'https://www.mexicancaribbean.com',
  },
  {
    imageSrc: web3d,
    title: 'Web3D',
    url: 'https://www.web3d.com',
  },
];