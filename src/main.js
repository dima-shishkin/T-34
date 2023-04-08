import {generatePictures} from "./data.js";
import {renderPicturesList} from "./pictures-list.js";
import {closeUploadModal} from "./upload-modal.js";
import {setCommentFormSubmit} from "./comment-form.js";
import {setUploadFormSubmit} from "./upload-form.js";
//import "./api";

renderPicturesList(generatePictures());
setCommentFormSubmit();

setUploadFormSubmit(
    function () {},
    function () {
        closeUploadModal();
    },
);
