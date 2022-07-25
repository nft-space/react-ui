export const getBase64FromFile = (file, postDictionary, keyName) => {
  const reader = new FileReader();
  // wrap the event in a promise
  let promise = new Promise((resolve) => {
    reader.onloadend = () => {
      // Use a regex to remove data url part
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

      postDictionary[keyName] = base64String;
      //console.log(postDictionary);
      resolve();
    };
  });
  reader.readAsDataURL(file);
  // return promise to caller to wait on
  return promise;
};
