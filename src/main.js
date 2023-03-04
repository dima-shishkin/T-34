import {generatePictures} from "./data.js";
import {renderPicturesList} from "./pictures-list.js";
import "./upload-form.js";
import "./zoom.js";
import "./effect.js";
import "./comment-form";
import "./api";

const pictures = generatePictures();
renderPicturesList(pictures);