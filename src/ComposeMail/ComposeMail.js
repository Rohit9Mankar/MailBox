import { useRef, useState } from 'react';

import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form';
import { Editor } from 'react-draft-wysiwyg';
import classes from './Compose.module.css';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from 'react-bootstrap/Button';
import Layout from '../components/Layout/Layout';

const Compose = () => {
    
    const [editorState, setEditorState] = useState('');

    const onEditorStateChange = (event) => {
        setEditorState(event);

    };

    const EmailInputRef = useRef();
    const SubjectInputRef = useRef();

    const sendMessageHandler = async (event) => {
        try {
            event.preventDefault();
        const registered=localStorage.getItem('registered');
            const SenderMail = localStorage.getItem('email');
            const recieverMail = EmailInputRef.current.value;
            const subject = SubjectInputRef.current.value;
            const contentState = editorState.blocks[0].text

            console.log(contentState)


            const recieverMailUrl = recieverMail.split('').filter((item) => {
                return item !== '@' && item !== '.'
            }).join("");

            const mailObject = {
                sender: registered,
                reciver: recieverMail,
                sub: subject,
                content: contentState,
                read: false
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
            setEditorState("");


        }
        catch (error) {
            alert('error');
        }

    }

    return (
        <Layout>
            <section className={classes.compose}>
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

                    <div className={classes.compose_editor}>
                        <FormLabel>Compose</FormLabel>
                        <Editor


                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onChange={onEditorStateChange}
                        />
                        <div className={classes.compose_actions}>
                        <Button type='submit'>Send</Button>
                        </div>
                        
                    </div>

                </form>






            </section>
        </Layout>


    )
}
export default Compose;