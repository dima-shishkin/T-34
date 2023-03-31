import {generatePictures} from "./data.js";
import {renderPicturesList} from "./pictures-list.js";
import {openUploadModal} from "./upload-modal.js";
import "./comment-form";
//import "./api";

const fileInputElement = document.querySelector(".img-upload__input");

renderPicturesList(generatePictures());
fileInputElement.addEventListener("change", openUploadModal);
