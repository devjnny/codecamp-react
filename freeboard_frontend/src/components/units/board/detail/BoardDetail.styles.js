import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 120rem; 
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
`

export const ContentWrapper = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    padding: 8rem 10.2rem;
    box-shadow: 0px 4px 20px 0px #00000033;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid #BDBDBD;
`

export const WriterWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const WriteInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const Writer = styled.span`
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;
`

export const Date = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: #828282;
`

export const FileButton = styled.button`
    width: 3.2rem;
    height: 3.2rem;
    background: url(../icons/icon_file.png) no-repeat center/3.2rem 3.2rem;
`

export const LocationButton = styled.button`
    width: 3.2rem;
    height: 3.2rem;
    background: url(../icons/icon_location.png) no-repeat center/3.2rem 3.2rem;
`

export const Contents = styled.div`
    width: 100%; 
    padding: 8rem 0;
`

export const Title = styled.h2`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 5.3rem;
`

export const ContentImg = styled.div`
    width: 100%;
    height: 48rem;
    margin: 4rem 0;

    img {
        width: 100%;
        height: 100%;
    }
`

export const Content = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
`

export const Video = styled.iframe`
    display: block;
    width: 48.6rem;
    height: 24rem;
    margin: 12rem auto 16rem;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const GoodButton = styled.button`
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_47_497)'%3E%3Cpath d='M13.11 5.72L12.54 8.61C12.42 9.2 12.58 9.81 12.96 10.27C13.34 10.73 13.9 11 14.5 11H20V12.08L17.43 18H9.34C9.16 18 9 17.84 9 17.66V9.82L13.11 5.72ZM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83V17.66C7 18.95 8.05 20 9.34 20H17.44C18.15 20 18.8 19.63 19.16 19.03L21.83 12.88C21.94 12.63 22 12.36 22 12.08V11C22 9.9 21.1 9 20 9H14.5L15.42 4.35C15.47 4.13 15.44 3.89 15.34 3.69C15.11 3.24 14.82 2.83 14.46 2.47L14 2ZM4 9H2V20H4C4.55 20 5 19.55 5 19V10C5 9.45 4.55 9 4 9Z' fill='%23828282'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_47_497'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: top center;
    padding-top: 2.4rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    color: #828282;
    
    &.on {
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_47_497)'%3E%3Cpath d='M13.11 5.72L12.54 8.61C12.42 9.2 12.58 9.81 12.96 10.27C13.34 10.73 13.9 11 14.5 11H20V12.08L17.43 18H9.34C9.16 18 9 17.84 9 17.66V9.82L13.11 5.72ZM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83V17.66C7 18.95 8.05 20 9.34 20H17.44C18.15 20 18.8 19.63 19.16 19.03L21.83 12.88C21.94 12.63 22 12.36 22 12.08V11C22 9.9 21.1 9 20 9H14.5L15.42 4.35C15.47 4.13 15.44 3.89 15.34 3.69C15.11 3.24 14.82 2.83 14.46 2.47L14 2ZM4 9H2V20H4C4.55 20 5 19.55 5 19V10C5 9.45 4.55 9 4 9Z' fill='%23FFD600'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_47_497'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        color: #FFD600;
    }
`

export const BadButton = styled.button`
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_47_492)'%3E%3Cpath d='M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.42 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM15 15L10.66 19.34L12 14H3V12L6 5H15V15ZM19 3H23V15H19V3Z' fill='%23828282'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_47_492'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: top center;
    padding-top: 2.4rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    color: #828282;
    margin-left: 4rem;
    
    &.on {
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_47_492)'%3E%3Cpath d='M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.42 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM15 15L10.66 19.34L12 14H3V12L6 5H15V15ZM19 3H23V15H19V3Z' fill='%23FFD600'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_47_492'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        color: #FFD600;
    }
`

export const BoardButton = styled.button`
    height: 4.5rem;
    padding: 0 6rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
    border: 1px solid #BDBDBD;
    margin-top: 10rem; 
    
    & + & {
        margin-left: 2.4rem; 
    }
`

export const CommentsWrapper = styled.div`
    width: 100%;
    margin-top: 8.6rem;
    padding-top: 4rem;
    border-top: 1px solid #BDBDBD;
`

export const CommentInputSection = styled.div`
    width: 100%;
`

export const CommentTitle = styled.span`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.7rem;
    padding-left: 3.6rem;
    background: url(../icons/icon_comment.png) no-repeat top left /2.4rem 2.4rem;
`

export const WriterInfoInputs = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 2.4rem;
`

export const WriterInfoInput = styled.input`
    width: 18rem;
    height: 5.2rem;
    border: 1px solid #BDBDBD;
    padding: 1.4rem 2rem;
`

export const CommentInputWrapper = styled.div`
    width: 100%;
    border: 1px solid #BDBDBD;
    margin-top: 2rem;
`

export const CommentInput = styled.textarea`
    width: 100%; 
    height: 10.8rem;
    border: none;
    padding: 2rem;
`

export const CommentInputAction = styled.div`
    width: 100%;
    height:5.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #F2F2F2;
    padding: 2rem 0 2rem 2rem;
`

export const CommentLengthCount = styled.span`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: #BDBDBD;
`

export const CommentButton = styled.button`
    padding: 1.4rem 1.6rem;
    background-color: #000;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: #fff;
`

export const StarButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const StarButton = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z' fill='%23BDBDBD'/%3E%3C/svg%3E%0A");

    &.on {
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z' fill='%23FFD600'/%3E%3C/svg%3E%0A");
    }
`
export const CommentListWrapper = styled.ul`
    width: 100%; 
    margin-top: 3rem;
`

export const CommentListItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%; 
    padding: 1rem 0.4rem 2rem;
    border-bottom: 1px solid #BDBDBD;

    & + & {
        margin-top: 2rem;
    }
`

export const CommentContentWrapper = styled.div`
    display: flex;
    gap: 1.2rem;
    width: 100%; 
`

export const CommentContentsTop = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const CommentWriter = styled.span`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
`

export const CommentContent = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: #4F4F4F;
    margin-top: 0.4rem;
`

export const CommentDate = styled.span`
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: #BDBDBD;
    margin-top: 2rem;
`

export const CommentActionButtons = styled.div`
    display: flex;
    gap: 0.8rem; 
`

export const ModifyButton = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    background: url(../icons/icon_modify.png) no-repeat center/2.4rem 2.4rem;
`

export const DeleteButton = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    background: url(../icons/icon_delete.png) no-repeat center/2.4rem 2.4rem;
`