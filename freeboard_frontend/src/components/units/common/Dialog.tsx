import { Modal } from 'antd'
import type { ReactNode } from 'react'

interface IDialogProps {
	title?: string
	showCloseBtn?: boolean
	showDialog: boolean
	onClickOk: () => void
	onClickCancel: () => void
	children: ReactNode
	cancelText?: string
	okText?: string
}

const Dialog = ({
	title,
	showCloseBtn = true,
	showDialog,
	onClickOk,
	onClickCancel,
	children,
	cancelText = '취소',
	okText = '확인',
}: IDialogProps) => {
	return (
		<Modal
			title={title}
			closeIcon={showCloseBtn}
			open={showDialog}
			onOk={onClickOk}
			onCancel={onClickCancel}
			cancelText={cancelText}
			okText={okText}>
			{children}
		</Modal>
	)
}

export default Dialog
