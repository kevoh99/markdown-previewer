import React, { useState, useEffect } from 'react'
import * as DOMPurify from 'dompurify'
import { marked } from 'marked'
import { FaArrowsAlt, FaHeart, FaEdit, FaEye } from 'react-icons/fa'
import './App.css'

marked.setOptions({
  gfm: true,
  breaks: true
})

const defaultInput =
  "# Heading 1\n## Heading 2\n### Heading 3\n#### And so on...\n##### Just change the No. of hash (#) symbols\n\nHere is an _Italicized text_\n\nAnd some **bold text** just because why not! This __also works__\n\nAnd oh yeah!! We can also ~~strikethrough some text~~\n\nWe can have some code: `<div>Hello</div>`\n\nA multi-line code is also an option:\n```\nconst handleClick = () => {\n\tconsole.log('clicked');\n};\n\n```\nThis is how I would [link](https://www.facebook.com/kevin.njoroge) to my Facebook page\n\nIf you are like me, an inspiring quote can uplift a dull moment. Like this one I have picked from my [Quotes App](https://chipper-bubblegum-fb43cd.netlify.app):\n\n> \"Whether you think you can or think you can't, you're right.\" - Henry Ford.\n\nVisit the [app](https://chipper-bubblegum-fb43cd.netlify.app) to enjoy some more quotes\n\nAnd lastly, before I forgot, this page is almost getting boring for its lack of an image.\n\nSo, here is one:\n\n![Sample image](https://picsum.photos/id/1024/960/640)\n\n## In Summary\n\nLet's end with a recap of what you can do in the 'Editor' section to see real-time results in the 'Preview' section:\n - Use # to define headings\n - Enclose some text in a pair of underscores (_) to make it italics\n - Use a pair of double-asterisks (**) on either side of some text, or a pair of double-underscores (__),  to make it bold\n - Enclose some text in a pair of double-backticks (``) to make it strike-through\n - Enclose a piece of code in a pair of backticks (`) to make it clearly visible on the page \n - Enclose a block of code in a pair of triple-backticks (```) to make it stand out from the rest of the page\n - Use a right angled-bracket (>) to create a blockquote \n - Use a dash (-) to create a list\n - For a numbered list, simply append 1. at the start of every list item instead of a dash (-)\n - Links are created using square brackets with the anchor tag e.g. [some link tag] followed by the URL enclosed in a pair of parentheses, e.g., (https://www.example.com)\n - Images follow a format similar to links but include a semicolon before the square brackets, for example, ![my image]. The text inside the square brackets becomes the \"alt\" tag"

const App = () => {
  const [input, setInput] = useState(defaultInput)
  const output = DOMPurify.sanitize(marked.parse(input))
  const [isEditorVisible, setIsEditorVisible] = useState(true)
  const [isPreviewerVisible, setIspreviewerVisible] = useState(true)
  const [editorMinHeight, setEditorMinHeight] = useState('30vh')
  const [previewerMinHeight, setPreviewerMinHeight] = useState('30vh')

  /* Note that the editor section click handler changes the 
  truthfulness of the previewer section and vice versa. This
  can easily get confusing */

  const editorHandleClick = () => {
    // console.log(isPreviewerVisible) true on first click, then false, true, false...
    setIspreviewerVisible((current) => !current) // Changing to false on first click makes previewer section get hidden (in return JSX)
    isPreviewerVisible
      ? setEditorMinHeight('80vh') // Go full screen to cover space left behind by previewer section
      : setEditorMinHeight('30vh') // Shrink down to accomodate the 'returning' previewer section
  }

  const previewerHandleClick = () => {
    setIsEditorVisible((current) => !current) // Changing to false on first click makes "Editor" section get hidden (in return JSX)
    isEditorVisible
      ? setPreviewerMinHeight('80vh') // Go full screen to cover space left behind by Editor section
      : setPreviewerMinHeight('30vh') // // Shrink down to accomodate the 'returning' Editor section
  }

  useEffect(() => {
    document.getElementById('editor').style.minHeight = editorMinHeight
    document.getElementById('preview').style.minHeight = previewerMinHeight
  }, [editorMinHeight, previewerMinHeight])

  const handleOnChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className='app'>
      {/* Editor Section */}
      <div
        id='editor-wrapper'
        className={!isEditorVisible ? 'hide-section' : ''}
      >
        <div id='editor-header'>
          <div>
            <label htmlFor='editor'>
              <FaEdit /> Editor
            </label>
          </div>
          <div>
            <FaArrowsAlt
              style={{ cursor: 'pointer' }}
              onClick={editorHandleClick}
            />
          </div>
        </div>
        <div id='editor-body'>
          <textarea
            id='editor'
            name='editor'
            value={input}
            onChange={handleOnChange}
          />
        </div>
      </div>

      {/* Previewer Section */}
      <div
        id='preview-wrapper'
        className={!isPreviewerVisible ? 'hide-section' : ''}
      >
        <div id='preview-header'>
          <div>
            <FaEye /> Previewer
          </div>
          <div>
            <FaArrowsAlt
              style={{ cursor: 'pointer' }}
              onClick={previewerHandleClick}
            />
          </div>
        </div>
        <div
          id='preview'
          dangerouslySetInnerHTML={{
            __html: output
          }}
        />
      </div>
      <footer>
        Made with <FaHeart style={{ color: 'red', fontSize: '1rem' }} /> by{' '}
        <a
          href='https://twitter.com/kevinnjoroge'
          target='_blank'
          rel='noreferrer'
        >
          Kevin Nganga
        </a>{' '}
      </footer>
    </div>
  )
}

export default App
