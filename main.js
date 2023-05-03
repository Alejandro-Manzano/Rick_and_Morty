import './style.css'

import { printTemplate as header} from './components/Header/header';
import { printTemplate as Footer } from './components/Footer/Footer';
import {printTemplate as Home} from "./pages/Home/Home"
import {printTemplate as Gallery} from "./pages/Gallery/Gallery"
import {printTemplate as About} from "./pages/About/About"
import {linkpage} from "./utils/linkpage"

header();
Footer();
Home();

linkpage("#homelink", Home)
linkpage("#gallerylink", Gallery)
linkpage("#aboutlink", About)

