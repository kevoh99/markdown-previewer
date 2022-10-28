import React from 'react'
import { FaArrowsAlt, FaCompressArrowsAlt, FaEye } from 'react-icons/fa'

const Previewer = (props) => {
  return (
    <div
      id='preview-wrapper'
      className={!props.isPreviewerVisible ? 'hide-section' : ''}
    >
      <div id='preview-header'>
        <div>
          <FaEye /> Previewer
        </div>
        <div>
          {props.isEditorVisible ? (
            <FaArrowsAlt
              style={{ cursor: 'pointer' }}
              onClick={props.previewerHandleClick}
            />
          ) : (
            <FaCompressArrowsAlt
              style={{ cursor: 'pointer' }}
              onClick={props.previewerHandleClick}
            />
          )}
        </div>
      </div>
      <div
        id='preview'
        dangerouslySetInnerHTML={{
          __html: props.output
        }}
      />
    </div>
  )
}

export default Previewer