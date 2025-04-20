import type { Category } from "~/types/categorytype";
// Import the icons correctly as values, not types
import { FaUmbrellaBeach, FaTicketAlt, FaTree, FaHome, FaWater, FaMountain, FaComments, FaCamera } from 'react-icons/fa';
import { GiWaveSurfer, GiCastle, GiForestCamp, GiHouse } from 'react-icons/gi';
import { MdApartment, MdNature, MdOutdoorGrill } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';

// Make sure your Category type accepts a React component
// In ~/types/categorytype.ts, ensure it's defined as:
// import { IconType } from "react-icons";
// export type Category = {
//   id: string;
//   name: string;
//   category: string;
//   icon: IconType;
// };

export const categories: Category[] = [
  {
    id: 'wyspy',
    name: 'Wyspy',
    category: 'Relaxation',
    icon: FaUmbrellaBeach,
  },
  {
    id: 'ikony',
    name: 'Ikony',
    category: 'Entertainment',
    icon: FaTicketAlt,
  },
  {
    id: 'na-wsi',
    name: 'Na wsi',
    category: 'Nature',
    icon: FaTree,
  },
  {
    id: 'stylowe-domy',
    name: 'Stylowe domy',
    category: 'Accommodation',
    icon: FaHome,
  },
  {
    id: 'blisko-jeziora',
    name: 'Blisko jeziora',
    category: 'Waterside',
    icon: FaWater,
  },
  {
    id: 'domki-szalasy',
    name: 'Domki-szałasy',
    category: 'Mountains',
    icon: FaMountain,
  },
  {
    id: 'chatki',
    name: 'Chatki',
    category: 'Communication',
    icon: FaComments,
  },
  {
    id: 'niesamowite-widoki',
    name: 'Niesamowite widoki',
    category: 'Panorama',
    icon: FaCamera,
  },
  {
    id: 'nad-morzem',
    name: 'Nad morzem',
    category: 'Beach',
    icon: GiWaveSurfer,
  },
  {
    id: 'apartamenty',
    name: 'Apartamenty',
    category: 'Urban',
    icon: MdApartment,
  },
  {
    id: 'agroturystyka',
    name: 'Agroturystyka',
    category: 'Countryside',
    icon: FaTree,
  },
  {
    id: 'zamki',
    name: 'Zamki',
    category: 'Historical',
    icon: GiCastle,
  },
  {
    id: 'przy-lesie',
    name: 'Przy lesie',
    category: 'Wildlife',
    icon: MdNature,
  },
  {
    id: 'pensjonaty',
    name: 'Pensjonaty',
    category: 'Lodging',
    icon: GiHouse,
  },
  {
    id: 'luksusowe',
    name: 'Luksusowe',
    category: 'Premium',
    icon: BsStars,
  },
  {
    id: 'wyspy',
    name: 'Wyspy',
    category: 'Relaxation',
    icon: FaUmbrellaBeach,
  },
  {
    id: 'ikony',
    name: 'Ikony',
    category: 'Entertainment',
    icon: FaTicketAlt,
  },
  {
    id: 'na-wsi',
    name: 'Na wsi',
    category: 'Nature',
    icon: FaTree,
  },
  {
    id: 'stylowe-domy',
    name: 'Stylowe domy',
    category: 'Accommodation',
    icon: FaHome,
  },
  {
    id: 'domki-szalasy',
    name: 'Domki-szałasy',
    category: 'Mountains',
    icon: FaMountain,
  },
  {
    id: 'chatki',
    name: 'Chatki',
    category: 'Communication',
    icon: FaComments,
  },
  {
    id: 'niesamowite-widoki',
    name: 'Niesamowite widoki',
    category: 'Panorama',
    icon: FaCamera,
  },
  {
    id: 'nad-morzem',
    name: 'Nad morzem',
    category: 'Beach',
    icon: GiWaveSurfer,
  },
  {
    id: 'apartamenty',
    name: 'Apartamenty',
    category: 'Urban',
    icon: MdApartment,
  },
  {
    id: 'agroturystyka',
    name: 'Agroturystyka',
    category: 'Countryside',
    icon: FaTree,
  },
  {
    id: 'zamki',
    name: 'Zamki',
    category: 'Historical',
    icon: GiCastle,
  },
  {
    id: 'przy-lesie',
    name: 'Przy lesie',
    category: 'Wildlife',
    icon: MdNature,
  },
  {
    id: 'pensjonaty',
    name: 'Pensjonaty',
    category: 'Lodging',
    icon: GiHouse,
  },
  {
    id: 'luksusowe',
    name: 'Luksusowe',
    category: 'Premium',
    icon: BsStars,
  },
  {
    id: 'campingi',
    name: 'Campingi',
    category: 'Outdoor',
    icon: MdOutdoorGrill,
  }
];