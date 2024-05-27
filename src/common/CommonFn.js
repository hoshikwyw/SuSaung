import { createWorker } from "tesseract.js";

const navBtnclick = (text) => {
  console.log(text, "nav bar is clicked!");
};

const initializeTesseract = async () => {
  const worker = createWorker({
    logger: (m) => {
      console.log(m);
    },
  });
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  return worker;
};

const recognizeImage = async (worker, ImageData) => {
  const {
    data: { text },
  } = await worker.recognize(ImageData);
  return text;
};

export default { navBtnclick, initializeTesseract, recognizeImage };
