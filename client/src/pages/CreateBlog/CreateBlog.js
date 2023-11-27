import InputTextBox from '../../components/InputTextBox'

export default function CreateBlog() {
    const titleLength = '20'
    return(
        <InputTextBox maxLength={titleLength}/>
    )
}