import DaumPostcodeEmbed from 'react-daum-postcode'

const Postcode = ({ handlePostcode }: { handlePostcode: (data: any) => void }) => {
	return <DaumPostcodeEmbed onComplete={handlePostcode}></DaumPostcodeEmbed>
}

export default Postcode
