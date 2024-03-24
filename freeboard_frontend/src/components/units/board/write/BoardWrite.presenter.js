import * as S from "./BoardWrite.styles"

export default function BoardWriteUI({
  isEdit,
  register,
  handleSubmit,
  errors,
  onClickSubmit,
  onClickUpdate,
  isActive
}) {
  return (
    <S.Wrapper>
      <S.PageTitle>{isEdit ? "게시물 수정" : "게시물 등록"}</S.PageTitle>
      <S.FormsWrapper onSubmit={isEdit ? handleSubmit(onClickUpdate) : handleSubmit(onClickSubmit)}>
        <S.FormRowWrapper>
          <S.InputWrapper>
            <S.FormLabel>작성자</S.FormLabel>
            <S.FormInput
              {...register("writer", { required: true })}
              type="text"
              placeholder="이름을 적어주세요."
            />
            {errors.writer?.type === "required" && <S.ErrorText>이름을 입력해주세요.</S.ErrorText>}
          </S.InputWrapper>
          <S.InputWrapper>
            <S.FormLabel>비밀번호</S.FormLabel>
            <S.FormInput
              {...register("password", { required: true })}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            {errors.password?.type === "required" && (
              <S.ErrorText>비밀번호를 입력해주세요.</S.ErrorText>
            )}
          </S.InputWrapper>
        </S.FormRowWrapper>
        <S.InputWrapper>
          <S.FormLabel>제목</S.FormLabel>
          <S.FormInput
            {...register("title", { required: true })}
            type="text"
            placeholder="제목을 작성해주세요."
          />
          {errors.title?.type === "required" && <S.ErrorText>제목을 입력해주세요.</S.ErrorText>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FormLabel>내용</S.FormLabel>
          <S.FormTextArea
            {...register("contents", { required: true })}
            type="text"
            placeholder="내용을 작성해주세요."
          />
          {errors.contents?.type === "required" && <S.ErrorText>내용을 입력해주세요.</S.ErrorText>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FormLabel>주소</S.FormLabel>
          <S.ZipcodeWrapper>
            <S.ZipcodeInput
              {...register("zipcode", { required: false })}
              type="text"
              placeholder="07250"
            />
            <S.ZipcodeButton type="button">우편번호 검색</S.ZipcodeButton>
          </S.ZipcodeWrapper>
          <S.FormInput {...register("address1", { required: false })} type="text" />
          <S.FormInput {...register("address2", { required: false })} type="text" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FormLabel>유튜브</S.FormLabel>
          <S.FormInput
            {...register("youtube", { required: false })}
            type="text"
            placeholder="링크를 복사해주세요."
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FormLabel>사진 첨부</S.FormLabel>
          <S.UploadWrapper>
            <S.UploadButton type="button">Upload</S.UploadButton>
            <S.UploadButton type="button">Upload</S.UploadButton>
            <S.UploadButton type="button">Upload</S.UploadButton>
          </S.UploadWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FormLabel>메인 설정</S.FormLabel>
          <S.RadioWrapper>
            <S.RadioLabel htmlFor="youtube">
              <S.Radiobutton
                {...register("main", { required: false })}
                type="radio"
                name="main"
                id="youtube"
                value="youtube"
              />
              유튜브
            </S.RadioLabel>
            <S.RadioLabel htmlFor="photo">
              <S.Radiobutton
                {...register("main", { required: false })}
                type="radio"
                name="main"
                id="photo"
                value="photo"
              />
              사진
            </S.RadioLabel>
          </S.RadioWrapper>
        </S.InputWrapper>
        <S.SubmitButton
          type="submit"
          value={isEdit ? "수정하기" : "등록하기"}
          isActive={isActive}
        />
      </S.FormsWrapper>
    </S.Wrapper>
  )
}
