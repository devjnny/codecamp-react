import { useForm, useWatch } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import BoardWriteUI from './BoardWrite.presenter'
import type { IBoardWriteProps, IPostcode, IUpdateBoardInput } from './BoardWrite.types'
import type {
	ICreateBoardInput,
	IMutation,
	IMutationCreateBoardArgs,
	IMutationUpdateBoardArgs,
} from '@/src/commons/types/generated/types'

export default function BoardWrite({ isEdit, data }: IBoardWriteProps) {
	const router = useRouter()
	const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(
		CREATE_BOARD
	)
	const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(
		UPDATE_BOARD
	)
	const [isActive, setIsActive] = useState<boolean>(false) // 등록하기 버튼 활성화 여부
	const [showDialog, setShowDialog] = useState<boolean>(false) // 우편번호 검색 모달 상태값

	const handlePostcodeDialog = () => {
		// 우편번호 검색 모달 오픈
		setShowDialog(true)
	}
	const handlePostcodeDialogCancel = () => {
		// 우편번호 검색 모달 취소버튼/닫기
		setShowDialog(false)
	}

	const handlePostcode = (data: IPostcode) => {
		// 우편번호 검색 완료
		if (data) {
			setShowDialog(false)
			setValue('boardAddress.zipcode', data?.zonecode)
			setValue('boardAddress.address', data?.roadAddress)
			setValue('boardAddress.addressDetail', '')
		}
	}

	const {
		control,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateBoardInput>({
		mode: 'onSubmit',
		defaultValues: {
			writer: data?.fetchBoard.writer,
			password: '',
			title: data?.fetchBoard.title,
			contents: data?.fetchBoard.contents,
			boardAddress: data?.fetchBoard.boardAddress,
			youtubeUrl: data?.fetchBoard.youtubeUrl,
		},
	})

	const watchedValue = useWatch({
		name: ['writer', 'password', 'title', 'contents'],
		control,
	})

	useEffect(() => {
		// 필수 입력값이 다 입력돼야 등록하기 버튼 활성화
		watchedValue.every((value) => value !== '') ? setIsActive(true) : setIsActive(false)
	}, [watchedValue])

	const onClickUpdate = async (data: ICreateBoardInput) => {
		if (typeof router.query.boardId === 'string') {
			const updateBoardInput: IUpdateBoardInput = {}
			if (data.title) updateBoardInput.title = data.title
			if (data.contents) updateBoardInput.contents = data.contents
			if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl
			if (data.boardAddress)
				updateBoardInput.boardAddress = {
					zipcode: data.boardAddress.zipcode ?? '',
					address: data.boardAddress.address ?? '',
					addressDetail: data.boardAddress.addressDetail ?? '',
				}
			try {
				const result = await updateBoard({
					variables: {
						updateBoardInput,
						password: data.password,
						boardId: router.query.boardId,
					},
				})
				void router.push(`/boards/${result?.data?.updateBoard._id}`)
			} catch (error) {
				alert(error)
			}
		}
	}

	const onClickSubmit = async (data: ICreateBoardInput) => {
		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						writer: data.writer,
						password: data.password,
						title: data.title,
						contents: data.contents,
						youtubeUrl: data.youtubeUrl,
						boardAddress: {
							zipcode: data.boardAddress?.zipcode,
							address: data.boardAddress?.address,
							addressDetail: data.boardAddress?.addressDetail,
						},
					},
				},
			})
			console.log(result)
			void router.push(`/boards/${result?.data?.createBoard._id}`)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<BoardWriteUI
			isEdit={isEdit}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onClickSubmit={onClickSubmit}
			onClickUpdate={onClickUpdate}
			isActive={isActive}
			showDialog={showDialog}
			handlePostcodeDialog={handlePostcodeDialog}
			handlePostcodeDialogCancel={handlePostcodeDialogCancel}
			handlePostcode={handlePostcode}
		/>
	)
}
