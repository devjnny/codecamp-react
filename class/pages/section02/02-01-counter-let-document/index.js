export default function CounterLetDocumentPage() {

    function onClickCountUp() {
        const result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result
    }

    function onClickCountDown() {
        const result = Number(document.getElementById("count").innerText) - 1
        document.getElementById("count").innerText = result
    }
    
    return (
        <>
            <div id="count">0</div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
        </>
    )
}