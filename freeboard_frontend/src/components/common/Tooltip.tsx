import type { ReactNode } from 'react'
import { Tooltip } from 'antd'

const CommonTooltip = ({ children, contents }: { children: ReactNode; contents: string }) => {
	return <Tooltip title={contents}>{children}</Tooltip>
}

export default CommonTooltip
