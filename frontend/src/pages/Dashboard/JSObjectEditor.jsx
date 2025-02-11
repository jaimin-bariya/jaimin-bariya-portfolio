/** @format */
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SecurityToUpdateData } from "@pages/index";
import { allDataFiles } from "@/data/siteMetaData";
import { toast } from "sonner";


const JSObjectEditor = () => {
  const [editorContent, setEditorContent] = useState(
    "{\n // Your Javascript object goes here \n}"
  );
  const [unchangedContent, setUnchangedContent] = useState(null);
  const [currentFile, setCurrentFile] = useState("File 1");
  const [openPasswordChecker, setOpenPasswordChecker] = useState(false);
  const [oldFileSHA, setOldFileSHA] = useState(null);

  const getRepo = async (fileName) => {
    console.log("step 1 done");

    try {
      const res = await fetch(
        `https://api.github.com/repos/jaimin-bariya/jaimin-bariya-portfolio/contents/frontend/src/data/${fileName}.js`,
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
      const decodedContent = atob(base64Content)
      console.log(decodedContent);

      setEditorContent(decodedContent);
      setUnchangedContent(decodedContent);
    } catch (error) {
      console.error(error);
    }
  };

  const setRepo = async () => {
    console.log("setting on");
    console.log("sha", oldFileSHA);
    console.log(currentFile);
    console.log(editorContent);


  //   function toBinaryStr(str) {
  //     const encoder = new TextEncoder();
  //     const charCodes = encoder.encode(str);
  //     return String.fromCharCode(...charCodes);
  // }


    // const binaryString = toBinaryStr(editorContent)
    const updatedBase64Content = btoa(editorContent)

    const res = await fetch(
      `https://api.github.com/repos/jaimin-bariya/jaimin-bariya-portfolio/contents/frontend/src/data/${currentFile}.js`,
      {
        method: "PUT",
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_REPO_TOCKEN,
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: `Update data source of ${currentFile} `,
          content: updatedBase64Content,
          sha: oldFileSHA, // old req sha
        }),
      }
    );

    const jsonRes = res.json();
    console.log(jsonRes);

    console.log("done");
  };

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const handleChangedCancel = () => {
    setEditorContent(unchangedContent);
  };

  const handleFileOpen = async (fileName) => {
    // try {
    //   // Generate the URL of the JS file based on the current file's URL
    //   const resourcesUrl =
    //     new URL(`../../data/${fileName}.js`, import.meta.url).href ||
    //     new URL(`../../data/${fileName}.jsx`, import.meta.url).href;

    //   // Fetch the content of JS as text
    //   const response = await fetch(resourcesUrl);
    //   const content = await response.text();

    //   setEditorContent(content);
    //   setUnchangedContent(content);

    //   setCurrentFile(fileName);
    // } catch (error) {
    //   console.error("Error:", error);
    //   setCurrentFile("Error");
    // }

    getRepo(fileName);
    setCurrentFile(fileName);
  };

  const updateFileToGitHub = async () => {
    await setRepo(currentFile, oldFileSHA);
    toast("Okay, Data updation Done boss 🤘");
  };

  const openCheckerCard = () => {
    setOpenPasswordChecker(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Oppend File Name  */}
        <div className="h-12 items-center grid grid-cols-12 gap-8">
          <div className="col-span-3"></div>
          <div className="grid grid-cols-9 col-span-9 justify-center items-center ">
            <p className="text-center text-xl col-span-7">{currentFile}</p>
            <div className="col-span-2 flex justify-between">
              <Button
                variant="destructive"
                className=" dark:hover:border-orange-500"
                onClick={handleChangedCancel}
              >
                Cancel
              </Button>
              <Button
                className=" bg-blue-900 text-white dark:hover:bg-blue-900 dark:hover:border-orange-500 "
                // onClick={() => updateFileToGitHub(currentFile, oldFileSHA)}
                onClick={openCheckerCard}
              >
                Update
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12  gap-8">
          {/* Sidebar with files  */}
          <div className="col-span-3 ">
            <ScrollArea className="h-[600px] pr-4 ">
              <div className=" flex flex-col gap-2">
                {allDataFiles.map((fileName, index) => (
                  <div
                    // className="p-2 rounded-lg border-orange-500 border-2 dark:hover:bg-zinc-800  cursor-pointer "
                    key={index}
                  >
                    <Button
                      onClick={() => handleFileOpen(fileName)}
                      variant="unstyled"
                      className="w-full h-full hover:border-orange-500"
                    >
                      <p className="font-mono">{fileName}</p>
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Editor  */}

          <div className="h-[600px] col-span-9  border-orange-500 border-2 rounded-xl overflow-hidden ">
            <Editor
              className=""
              height="100%"
              defaultLanguage="javascript"
              value={editorContent}
              onChange={handleEditorChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>
      </div>

      <SecurityToUpdateData
        isFirstPasswordOpen={openPasswordChecker}
        setIsFirstPasswordOpen={setOpenPasswordChecker}
        submitButtonName="Make Change Bro"
        updateFileToGitHub={updateFileToGitHub}
      />
    </>
  );
};

export default JSObjectEditor;
