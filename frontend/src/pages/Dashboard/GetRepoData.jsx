/** @format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const GetRepoData = () => {
  const [data, setData] = useState("nothing");
  const [oldFileSHA, setOldFileSHA] = useState(null);
  const [fileName, setFileName] = useState("adminData");

  const getRepo = async () => {
    console.log("step 1 done");

    try {
      const res = await fetch(
        `https://api.github.com/repos/jaimin-bariya/jaimin-bariya-portfolio/contents/frontend/src/data/ScreenTimeData.js`,
        {
          method: "GET",
          headers: {
            Authorization: import.meta.env.VITE_GITHUB_REPO_TOCKEN,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      const jsonRes = await res.json();
      setOldFileSHA(jsonRes.sha);

      const base64Content = jsonRes.content;
      const decodedContent = atob(base64Content);
      console.log(decodedContent);

      setData(decodedContent + "\nYes bor I am updated ");
    } catch (error) {
      console.error(error);
    }
  };

  const setRepo = async () => {
    console.log("setting on");
    console.log("sha", oldFileSHA);

    const updatedBase64Content = btoa(data);

    const res = await fetch(
      `https://api.github.com/repos/jaimin-bariya/jaimin-bariya-portfolio/contents/frontend/src/data/ScreenTimeData.js`,
      {
        method: "PUT",
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_REPO_TOCKEN,
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: "trying to update - testing 001",
          content: updatedBase64Content,
          sha: oldFileSHA, // old req sha
        }),
      }
    );

    const jsonRes = res.json();
    console.log(jsonRes);

    console.log("done");
  };

  return (
    <>
      <Input onChange={(e) => setFileName(e.target.value)}></Input>
      <Button onClick={getRepo}>GEGET</Button>
      <Button onClick={setRepo}>Update </Button>
      <pre>{data}</pre>
    </>
  );
};

export default GetRepoData;
