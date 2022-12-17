import {generatePictures} from "./data.js";
import {renderPicturesList} from "./pictures-list.js";

const pictures = generatePictures();
renderPicturesList(pictures);