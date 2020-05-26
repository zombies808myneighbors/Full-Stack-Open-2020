import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

const App = () => {
    const courses = [
        { 
            id: 1,
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using Props to Pass Data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a Component',
                    exercises: 14,
                    id: 3
                }
            ]
        },
        {
            id: 2,
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middleware',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <div>
            {courses.map((course) =>
                <Course key={course.id} course={course} />
            )}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))