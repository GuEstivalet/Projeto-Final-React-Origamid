import React from 'react'
import Enviar from '../../Assets/componentsSvg/Enviar'
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {

    const {request, error} = useFetch();

    const [comment,setComment] = React.useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});
        const {response, json} = await request(url,options);
        if (response.ok){
          setComment('');
          setComments((comments)=> [...comments, json]);
        }
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <textarea className={styles.textarea} placeholder='Comente...' name='comment' id='comment' value={comment} onChange={({target}) => setComment(target.value)}></textarea>
        <button className={styles.button}><Enviar/></button>
        {error && <Error error={error}/>}
    </form>
  )
}

export default PhotoCommentsForm
