import React from 'react'
import { FaArrowsAlt, FaCompressArrowsAlt, FaEdit } from 'react-icons/fa'

const Editor = (props) => {
  return (
    <div id='editor-wrapper' className={!props.isEditorVisible ? 'hide-section' : ''}>
      <div id='editor-header'>
        <div>
          <label htmlFor='editor'>
            <FaEdit /> Editor
          </label>
        </div>
        <div>
          {props.isPreviewerVisible ? (
            <FaArrowsAlt
              style={{ cursor: 'pointer' }}
              onClick={props.editorHandleClick}
            />
          ) : (
            <FaCompressArrowsAlt
              style={{ cursor: 'pointer' }}
              onClick={props.editorHandleClick}
            />
          )}
        </div>
      </div>
      <div id='editor-body'>
        <textarea
          id='editor'
          name='editor'
          value={props.input}
          onChange={props.handleOnChange}
        />
      </div>
    </div>
  )
}

export default Editor