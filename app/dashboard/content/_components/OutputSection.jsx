"use client";
import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Editor as EditorType } from '@toast-ui/editor';    

function OutputSection() {
  const editorRef = useRef  (null); 
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Editor
        ref={editorRef}
        initialValue="Your resume will appear here"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={() => {
          if (editorRef.current) {
            const editorInstance = editorRef.current.getInstance();
            console.log(editorInstance.getMarkdown()); // Logs the markdown value
          }
        }}
      />
    </div>
  );
}

export default OutputSection;
