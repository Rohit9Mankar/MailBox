import { useRef } from 'react';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from 'react-bootstrap/Button';

const Compose = () => {


    const EmailInputRef = useRef();
    const SubjectInputRef = useRef();
    const ContentInputRef = useRef();

    const sendMessageHandler = async (event) => {
        try {
            event.preventDefault();

            const SenderMail = localStorage.getItem('email');
            const recieverMail = EmailInputRef.current.value;
            const subject = SubjectInputRef.current.value;
            const mailContent = ContentInputRef.current.value;

            const recieverMailUrl = recieverMail.split('').filter((item) => {
                return item !== '@' && item !== '.'
            }).join("");

            const mailObject = {
                sender: SenderMail,
                reciver: recieverMail,
                sub: subject,
                content: mailContent
            };

            const [response1, response2] = await Promise.all([
                fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${SenderMail}/sent.json`, {
                    method: 'POST',
                    body: JSON.stringify(mailObject),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }),
                fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${recieverMailUrl}/recieved.json`, {
                    method: 'POST',
                    body: JSON.stringify(mailObject),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ]);
            if (response1.ok) {
                console.log('email sent successfully');
            }
            if (response2.ok) {
                console.log('email recieved successfully')
            }
            EmailInputRef.current.value = '';
            SubjectInputRef.current.value = '';
            ContentInputRef.current.value = '';

        } 
        catch (error) {
            alert('error');
        }

    }

    return (
        <section>
            <form onSubmit={sendMessageHandler}>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingEmailCustom"
                        type="email"
                        placeholder="name@example.com"
                        ref={EmailInputRef}
                        required
                    />
                    <label htmlFor="floatingEmailCustom">To</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingSubjectCustom"
                        type="text"
                        placeholder="name@example.com"
                        ref={SubjectInputRef}
                        required
                    />
                    <label htmlFor="floatingSubjectCustom">Subject</label>
                </Form.Floating>


                <FormLabel>ComposeMail</FormLabel>
                <Editor
                    ref={ContentInputRef}
                    id='floatingComposeCustom'
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                />
                <Button type='submit'>Send</Button>
            </form>






        </section>

    )
}
export default Compose;