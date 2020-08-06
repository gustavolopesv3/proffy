import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import "./styles.css";
import Input from "../../components/input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
      
        <Select
           name='subject'
            label='Materia'
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
            options={[
              { value: '1', label: 'Segunda-feira'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'quarta-feira'},
              { value: '4', label: 'quinta-feira'},
              { value: '5', label: 'sexta-feira'},
            ]}
            />
          <Input type='time' name='time' label='Hora'/>
          
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
