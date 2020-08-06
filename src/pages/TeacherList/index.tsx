import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import "./styles.css";
import Input from "../../components/input";
import Select from "../../components/Select";
import api from "../../services/api";


function TeacherList() {

  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');

async function searchTeachers(e: FormEvent){
  e.preventDefault();

  const response = await api.get('classes',{
    params: {
      subject,
      week_day,
      time,
    }
  });
  setTeachers(response.data);
}

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
      
        <Select
           name='subject'
            label='Materia'
            value={subject}
            onChange={ e => {setSubject(e.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Quimica', label: 'Quimica'},
              { value: 'Fisica', label: 'Fisica'},
              { value: 'Historia', label: 'Historia'},
              { value: 'Filosofia', label: 'Filosofia'},
            ]}
            />
            <Select
           name='week_day'
            label='semana'
            value= {week_day}
            onChange={ e => {setWeekday(e.target.value)}}
            options={[
              { value: '1', label: 'Segunda-feira'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'quarta-feira'},
              { value: '4', label: 'quinta-feira'},
              { value: '5', label: 'sexta-feira'},
            ]}
            />
          <Input 
            type='time' 
            name='time'
            label='Hora'
            value= {time}
            onChange={ e => {setTime(e.target.value)}}/>
          <button type='submit'>
            Buscar
          </button>
          
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
