"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";
import Code from "@tiptap/extension-code";
import { Menubar } from "./menubar";

interface RichTextEditorField {
  value: string;
  onChange: (value: string) => void;
}

interface RichTextEditorProps {
  field: RichTextEditorField;
}

export function RichTextEditor({ field }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Subscript,
      Superscript,
      Code,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ["heading", "paragraph", "listItem"] }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "min-h-[300px] p-4 focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !w-full !max-w-none",
      },
    },
    onUpdate: ({ editor }) => {
      field.onChange(JSON.stringify(editor.getJSON()));
    },
    content: field.value ? JSON.parse(field.value) : "<p>write something here...</p>",
  });

  return (
    <div className="w-full border border-input overflow-hidden dark:bg-input/30">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
