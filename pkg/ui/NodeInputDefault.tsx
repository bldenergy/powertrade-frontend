import styles from '../../styles/index.module.css'
import {
  Divider,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs
} from '@chakra-ui/react'
import { getNodeLabel } from '@ory/integrations/ui'
import React from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { NodeInputButton } from './NodeInputButton'
import { NodeInputCheckbox } from './NodeInputCheckbox'
import { NodeInputHidden } from './NodeInputHidden'
import { NodeInputSubmit } from './NodeInputSubmit'
import { NodeInputProps } from './helpers'

export function NodeInputDefault<T>(
  props: NodeInputProps,
  ref:
    | (React.Ref<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>)
    | undefined
) {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = React.useRef<HTMLInputElement>(null)

  const mergeRef = useMergeRefs(inputRef, ref)
  const onClickReveal = () => {
    onToggle()
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true })
    }
  }
  const { node, attributes, value = '', setValue, disabled } = props

  // Some attributes have dynamic JavaScript - this is for example required for WebAuthn.
  const onClick = () => {
    // This section is only used for WebAuthn. The script is loaded via a <script> node
    // and the functions are available on the global window level. Unfortunately, there
    // is currently no better way than executing eval / function here at this moment.
    if (attributes.onclick) {
      const run = new Function(attributes.onclick)
      run()
    }
  }

  // Render a generic text input field.
  return (
    <>
      {attributes.name !== 'traits.picture' && (
        <>
          {/* <div>
            <span>{node.meta.label?.text}</span>
          </div> */}
          <FormLabel htmlFor={attributes.type}>
            {node.meta.label?.text}
          </FormLabel>

          <Input
            borderColor={'#e2e8f0'}
            onClick={onClick}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            id={attributes.name}
            type={attributes.type}
            name={attributes.name}
            value={value}
            data-state={
              node.messages.find(({ type }) => type === 'error')
                ? 'error'
                : undefined
            }
          />
          <div style={{ color: 'red' }}>
            {node.messages.map(({ text, id }, k) => (
              <span key={`${id}-${k}`} data-testid={`ui/message/${id}`}>
                {text}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  )
}
