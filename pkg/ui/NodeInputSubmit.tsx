import styles from '../../styles/index.module.css'
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  VisuallyHidden
} from '@chakra-ui/react'
import { UiNode, UiNodeInputAttributes } from '@ory/client'
import { getNodeLabel } from '@ory/integrations/ui'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { GoogleIcon, FacebookIcon } from './ProviderIcons'
import { FormDispatcher, NodeInputProps, ValueSetter } from './helpers'

const providers = [
  { name: 'Facebook', icon: <FacebookIcon boxSize="5" /> },
  { name: 'Google', icon: <GoogleIcon boxSize="5" /> }
]
export function NodeInputSubmit<T>({
  node,
  attributes,
  setValue,
  disabled,
  dispatchSubmit
}: NodeInputProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      {attributes.value === 'facebook' || attributes.value === 'google' ? (
        <ButtonGroup variant="outline" spacing="10" width="full">
          {attributes.value === 'facebook' && (
            <Button
              leftIcon={<FacebookIcon boxSize="8" />}
              width={'full'}
              key={'Facebook'}
              onClick={(e) => {
                // On click, we set this value, and once set, dispatch the submission!
                setValue(attributes.value).then(() => dispatchSubmit(e))
              }}
            >
              Sign in with {'Facebook'}
            </Button>
          )}

          {attributes.value === 'google' && (
            <Button
              leftIcon={<GoogleIcon boxSize="6" />}
              width={'full'}
              key={'Google'}
              onClick={(e) => {
                // On click, we set this value, and once set, dispatch the submission!
                setValue(attributes.value).then(() => dispatchSubmit(e))
              }}
            >
              Sign in with {'Google'}
            </Button>
          )}
        </ButtonGroup>
      ) : (
        <>
          <Button
            colorScheme="blue"
            width={'full'}
            onClick={(e) => {
              // On click, we set this value, and once set, dispatch the submission!
              setValue(attributes.value).then(() => dispatchSubmit(e))
            }}
          >
            {getNodeLabel(node)}
          </Button>
        </>
      )}
    </>
  )
}
