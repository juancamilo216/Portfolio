// * Images


// * frontend

import REACT_1 from "@public/png/personal-projects/react-1.png";
import REACT_2 from "@public/png/personal-projects/react-2.png";
import REACT_3 from "@public/png/personal-projects/react-3.png";
import REACT_4 from "@public/png/personal-projects/react-4.png";
import REACT_5 from "@public/png/personal-projects/react-5.png";
import REACT_6 from "@public/png/personal-projects/react-6.png";
import REACT_7 from "@public/png/personal-projects/react-7.png";
import REACT_8 from "@public/png/personal-projects/react-8.png";

// * backend
import LARAVEL_1 from "@public/png/professional-projects/laravel-1.png";
import LARAVEL_2 from "@public/png/professional-projects/laravel-2.png";
import LARAVEL_3 from "@public/png/professional-projects/laravel-3.png";
import LARAVEL_4 from "@public/png/professional-projects/laravel-4.png";
import LARAVEL_5 from "@public/png/professional-projects/laravel-5.png";
import LARAVEL_6 from "@public/png/professional-projects/laravel-6.png";
import LARAVEL_7 from "@public/png/professional-projects/laravel-7.png";
import LARAVEL_8 from "@public/png/professional-projects/laravel-8.png";


// * cms
import CMS_1 from "@public/png/npm/cms-1.png";
import CMS_2 from "@public/png/npm/cms-2.png";
import CMS_3 from "@public/png/npm/cms-3.png";
import CMS_4 from "@public/png/npm/cms-4.png";
import CMS_5 from "@public/png/npm/cms-5.png";
import CMS_6 from "@public/png/npm/cms-6.png";
import CMS_7 from "@public/png/npm/cms-7.png";
import CMS_8 from "@public/png/npm/cms-8.png";


// * ai
import AI_1 from "@public/png/extensions/ai-1.png";
import AI_2 from "@public/png/extensions/ai-2.png";
import AI_3 from "@public/png/extensions/ai-3.png";
import AI_4 from "@public/png/extensions/ai-4.png";
import AI_5 from "@public/png/extensions/ai-5.png";
import AI_6 from "@public/png/extensions/ai-6.png";
import AI_7 from "@public/png/extensions/ai-7.png";
import AI_8 from "@public/png/extensions/ai-8.png";

const FRONTEND_PROJECTS = {
  REACT_1,
  REACT_2,  
  REACT_3,
  REACT_4,
  REACT_5,
  REACT_6,
  REACT_7,
  REACT_8,
} as const;

const BACKEND_PROJECTS = {
  LARAVEL_1,
  LARAVEL_2,
  LARAVEL_3,
  LARAVEL_4,
  LARAVEL_5,
  LARAVEL_6,
  LARAVEL_7,
  LARAVEL_8,  
} as const;

const CMS_PROJECTS = {
  CMS_1,
  CMS_2,
  CMS_3,
  CMS_4,
  CMS_5,
  CMS_6,
  CMS_7,
  CMS_8, 
} as const;

const AI_EXTENSIONS = {
  AI_1,
  AI_2,
  AI_3,
  AI_4,
  AI_5,
  AI_6,
  AI_7,
  AI_8,
} as const;

const PNG_IMAGES = {
  ...FRONTEND_PROJECTS,
  ...BACKEND_PROJECTS,
  ...CMS_PROJECTS,
  ...AI_EXTENSIONS,
} as const;

export default PNG_IMAGES;
