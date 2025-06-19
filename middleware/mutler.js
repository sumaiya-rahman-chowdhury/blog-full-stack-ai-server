import mutler from "multer";
const upload = mutler({ storage: mutler.diskStorage({}) });
export default upload;
