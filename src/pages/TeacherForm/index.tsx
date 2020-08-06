import React, { useState, FormEvent} from "react";
import PageHeader from "../../components/PageHeader";
import {useHistory} from 'react-router-dom';
import './styles.css';
import Input from "../../components/input";
import warningIcon from "../../assets/images/icons/warning.svg"
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";




function TeacherForm() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setbio] = useState('');


  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    {
        week_day: 0,
        from: '',
        to: ''
      }
  ]);


  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }
      
    ]);
  }

  function handleCreateClasses(e: FormEvent){
    e.preventDefault();
    api.post('classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => {
      alert('Erro no cadatro!');
    })

  }

  function setScheduleItemValue(position: number, field: string, value: string){
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {...scheduleItem, [field]: value};
      }
      return scheduleItem;
    });
    setScheduleItems(updateScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description='o primeiro passo é preencher esse formulario inscrição'
       />

       <main>
         <form onSubmit={handleCreateClasses}>
         <fieldset>
           <legend>Seus dados</legend>

           <Input name='name' label='Nome Completo' value={name} onChange={(e) => { setName(e.target.value)}} />
           <Input name='avatar' label='avatar'value={avatar} onChange={(e) => { setAvatar(e.target.value)}}/>
           <Input name='whatsapp' label='Whatsapp'value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value)}}/>
           <Textarea name='bio' label='Biografia' value={bio} onChange={(e) => { setbio(e.target.value)}} />
         </fieldset>


         <fieldset>
           <legend>Sobre a aula</legend>

           <Select
           name='subject'
            label='Materia'
            value={subject}
            onChange={(e) => {setSubject(e.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Quimica', label: 'Quimica'},
              { value: 'Fisica', label: 'Fisica'},
              { value: 'Historia', label: 'Historia'},
              { value: 'Filosofia', label: 'Filosofia'},
            ]}
            />

           <Input name='cost' label='custo da hora por aula' value={cost}
            onChange={(e) => {setCost(e.target.value)}}/>
           
        
         </fieldset>
         <fieldset>
           <legend>
             Horarios disponiveis
             <button type='button' onClick={addNewScheduleItem}>+ Novo horario</button>
            
          
           </legend>
           {scheduleItems.map((scheduleItem, index) => {
             return (<div key={scheduleItem.week_day} className="schedule-item">
             <Select
             name='week_day'
               label='semana'
               value={scheduleItem.week_day}
               onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value) }
               options={[
                 { value: '1', label: 'Segunda-feira'},
                 { value: '2', label: 'Terça-feira'},
                 { value: '3', label: 'quarta-feira'},
                 { value: '4', label: 'quinta-feira'},
                 { value: '5', label: 'sexta-feira'},
             ]}
             />
             <Input name='from' value={scheduleItem.from} label='Das' type='time' onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
             <Input name='to' value={scheduleItem.to}label='Até' type='time' onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
             </div>);
           })}
         </fieldset>

         <footer>
           <p>
             <img src={warningIcon} alt='aviso importante'/>
             Importante! <br />
             Preencha todos os dados
           </p>
           <button type='submit'>Salvar cadastro</button>
         </footer>
         </form>
       </main>
    </div>
  );
}

export default TeacherForm;
