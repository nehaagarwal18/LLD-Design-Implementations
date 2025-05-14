import React, {useRef} from 'react'
import ToolBar from './ToolBar'

const WysiwygContainer = () => {
  const editorRef = useRef(null);
  const selectionRef = useRef(null);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (editorRef.current.contains(selection.anchorNode)) {
      selectionRef.current = selection;
    }
  };

  const makeSelectionBold = () => {
    const selection = selectionRef.current;
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const boldWrapper = document.createElement("strong");
    boldWrapper.appendChild(range.extractContents());
    range.insertNode(boldWrapper);
  };

  const makeSelectionItalic = () => {
    const selection = selectionRef.current;
    if(!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const italicWrapper = document.createElement("i");
    italicWrapper.appendChild(range.extractContents())
    range.insertNode(italicWrapper)
  }

  const makeSelectionUnderline = () => {
    const selection = selectionRef.current;
    if(!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const underlineWrapper = document.createElement("u");
    underlineWrapper.appendChild(range.extractContents())
    range.insertNode(underlineWrapper)
  }
  

  return (
    <div className="flex justify-center mt-10">
        <div className="w-[70%]">
          <h1 className="text-3xl text-center font-bold">WYSIWYG Editor</h1>
          <div className="mt-4 p-4 border-1">
              <ToolBar 
                makeSelectionBold={makeSelectionBold} 
                makeSelectionItalic={makeSelectionItalic} 
                makeSelectionUnderline={makeSelectionUnderline}
              />
              <div className="mt-6">
              <div
                ref={editorRef}
                suppressContentEditableWarning={true}
                className="p-2 border w-full h-[400px]"
                onMouseUp={handleMouseUp}
                contentEditable={true}
              ></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default WysiwygContainer