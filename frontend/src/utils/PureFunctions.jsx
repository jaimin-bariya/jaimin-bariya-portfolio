/** @format */

const FilterShowsBasedOnPoster = (file) => {
  if (!Array.isArray(file)) return [];

  return [...file].sort((a, b) => {
    if (a["poster"] !== null && b["poster"] === null) return -1; //  a, b
    if (a["poster"] === null && b["poster"] !== null) return 1; // b, a
    return 0;
  });
};

const addImgToRepo = async (token, base64Img, fileName, dirName) => {
  // GitHub API URL
  const url = `https://api.github.com/repos/jaimin-bariya/jaimin-bariya-portfolio/contents/frontend/src/assets/images/${dirName}/${fileName}`;

  // Prepare the data for the API request
  const data = {
    message: `Upload ${fileName}`,
    content: base64Img,
    branch: "main",
  };

  const headerData = {
    Authorization: token,
    Accept: "application/vnd.github.v3+json",
  };

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: headerData,
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Failed to upload image: ${res.statusText}`);
    }

    const result = await res.json();
    console.log("Image uploaded successfully", result);
  } catch (error) {
    console.error("Error uploading image:", error);
  }

  console.log("Entry");
};

const isDevToolOpen = () => {
  const start = performance.now();
  console.log("Checking Dev Tools.....");
  const end = performance.now();
  return end - start > 50;
};

const checkAuthorizationByPassword = (userEntered, truePassword) => {
  return userEntered === truePassword;
};

export {
  FilterShowsBasedOnPoster,
  isDevToolOpen,
  addImgToRepo,
  checkAuthorizationByPassword,
};
