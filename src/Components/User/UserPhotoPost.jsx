import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {

  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();
  if (data) navigate('/conta');
  React.useEffect(()=>{

  }, [data,navigate])

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.raw);
    formData.append('peso', peso.raw);
    formData.append('idade', idade.raw);

    const token = window.localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto"/>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Pesp" type="number" name="peso" {...peso}/>
        <Input label="Idade" type="number" name="idade" {...idade}/>
        <Input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
      </form>
      <Error error={error}/>
      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage: `url(${img.preview})`}}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost
