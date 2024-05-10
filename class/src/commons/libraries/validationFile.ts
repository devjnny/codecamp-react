export const checkValidation = (file?: File): boolean => {
  // validation check
  if (typeof file === 'undefined') {
    // 거짓일 때를 먼저 체크하고 return해서 함수 종료하는 게 좋음
    alert('파일이 없습니다.')
    return false
  }

  if (file.size > 5 * 1024 * 1024) {
    // byte -> kb -> mb -> gb -> tb
    alert('파일 용량이 너무 큽니다(제한: 5MB)')
    return false
  }

  if (!file.type.includes('jpeg') && !file.type.includes('png')) {
    alert('jpeg 또는 png 파일만 업로드 가능합니다.')
    return false
  }

  return true
}
