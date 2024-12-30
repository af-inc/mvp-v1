'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { useCallback } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Ensure you have FontAwesome installed

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: true,
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '<p>Start creating your content here!</p>',
  });

  const addImage = useCallback(() => {
    const url = window.prompt('Enter image URL');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="container mx-auto p-4 border rounded-lg bg-white max-w-4xl">
      {/* Toolbar */}
      <div className="flex gap-2 mb-4 flex-wrap border-b pb-3">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive('bold') ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Bold"
        >
          <i className="fa fa-bold"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive('italic') ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Italic"
        >
          <i className="fa fa-italic"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive('underline') ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Underline"
        >
          <i className="fa fa-underline"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          disabled={!editor.can().chain().focus().toggleHighlight().run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive('highlight') ? 'bg-yellow-200' : 'bg-gray-100'
          }`}
          title="Highlight"
        >
          <i className="fa fa-paint-brush"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive('paragraph') ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Paragraph"
        >
          <i className="fa fa-paragraph"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive('heading', { level: 1 }) ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Heading 1"
        >
          <i className="fa fa-header"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Heading 2"
        >
          <i className="fa fa-header fa-sm"></i>
        </button>
        <button
          onClick={addImage}
          className="px-3 py-2 border rounded bg-gray-100"
          title="Add Image"
        >
          <i className="fa fa-image"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleTextAlign('left').run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive({ textAlign: 'left' }) ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Align Left"
        >
          <i className="fa fa-align-left"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleTextAlign('center').run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive({ textAlign: 'center' }) ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Align Center"
        >
          <i className="fa fa-align-center"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleTextAlign('right').run()}
          className={`px-3 py-2 border rounded ${
            editor.isActive({ textAlign: 'right' }) ? 'bg-gray-300' : 'bg-gray-100'
          }`}
          title="Align Right"
        >
          <i className="fa fa-align-right"></i>
        </button>
      </div>
      {/* Editor Content */}
      <EditorContent editor={editor} className="border p-6 rounded bg-gray-50 min-h-[300px]" />
    </div>
  );
};

export default Tiptap;
