/** @format */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Editor } from "@monaco-editor/react";
import { ScrollArea } from "@/components/ui/scroll-area";

const JSObjectEditor = () => {
  const [editorContent, setEditorContent] = useState(
    "{\n // Your Javascript object goes here \n}"
  );

  const [currentFile, setCurrentFile] = useState("File 1");

  const [parsedObject, setParsedObject] = useState(null);
  const [error, setError] = useState(null);

  const allDataFiles = [
    "adminData",
    "adminDesc",
    "articlesData",
    "competeData",
    "experienceData",
    "herosData",
    "miscellaneousData",
    "myBucketListData",
    "navbar",
    "projectsData",
    "quotesData",
    "ScreenTimeData",
    "siteMetaData",
    "startupData",
    "usagesData",
  ];

  const handleEditorChange = (e) => {
    setEditoContent(e.target.value);
  };


  


  const handleFileOpen = async (fileName) => {

    try {

      // Generate the URL of the JS file based on the current file's URL
      const resourcesUrl = new URL(`../../data/${fileName}.js`, import.meta.url).href || new URL(`../../data/${fileName}.jsx`, import.meta.url).href;

      // Fetch the content of JS as text
      const response = await fetch(resourcesUrl);
      const content = await response.text();
      
      setEditorContent(content)
      
      setCurrentFile(fileName);

    } catch (error) {
      console.error("Error:", error)
      setCurrentFile("Error")
    }

  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Oppend File Name  */}
        <div className="h-12 items-center flex justify-center">
          <p className="text-center text-xl">{currentFile}</p>
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
                    <Button onClick={() => handleFileOpen(fileName)} variant="unstyled" className="w-full h-full hover:border-orange-500" ><p className="font-mono">{fileName}</p></Button>
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
    </>
  );
};

export default JSObjectEditor;
