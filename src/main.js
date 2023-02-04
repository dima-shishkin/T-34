import {generatePictures} from "./data.js";
import {renderPicturesList} from "./pictures-list.js";
import "./upload-form.js";
import "./zoom.js";

const pictures = generatePictures();
renderPicturesList(pictures);