import { UiNodeAnchorAttributes } from '@ory/client'
import { UiNode } from '@ory/client'

interface Props {
  node: UiNode
  attributes: UiNodeAnchorAttributes
}

export const NodeAnchor = ({ node, attributes }: Props) => {
  return (
    <div
      data-testid={`node/anchor/${attributes.id}`}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        window.location.href = attributes.href
      }}
    >
      {attributes.title.text}
    </div>
  )
}
