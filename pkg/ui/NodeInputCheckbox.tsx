import { Checkbox } from '@chakra-ui/react'
import { getNodeLabel } from '@ory/integrations/ui'

import { NodeInputProps } from './helpers'

export function NodeInputCheckbox<T>({
  node,
  attributes,
  setValue,
  disabled
}: NodeInputProps) {
  // Render a checkbox.s
  return (
    <>
      <Checkbox
        type="checkbox"
        name={attributes.name}
        defaultChecked={attributes.value === true}
        onChange={(e) => setValue(e.target.checked)}
        disabled={attributes.disabled || disabled}
        data-label={getNodeLabel(node)}
        data-state={
          node.messages.find(({ type }) => type === 'error')
            ? 'error'
            : undefined
        }
        data-subtitle={node.messages.map(({ text }) => text).join('\n')}
      >
        {getNodeLabel(node)}
      </Checkbox>
    </>
  )
}
