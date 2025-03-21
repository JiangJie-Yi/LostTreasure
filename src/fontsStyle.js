import PigpenRegular from './public/font/Pigpen-Regular.ttf';
import PigPenCodeFont from './public/font/PigPenCodeFont.ttf';

const pigPenFonts = {
  '@font-face': [{
    fontFamily: 'Pigpen-Regular',
    src: `url(${PigpenRegular}) format('truetype')`,
  },
  {
    fontFamily: 'PigPenCodeFont',
    src: `url(${PigPenCodeFont}) format('truetype')`,
  }],
};

export default pigPenFonts;
