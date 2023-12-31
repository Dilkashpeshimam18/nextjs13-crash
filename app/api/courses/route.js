import courses from './data.json'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const filteredCourse = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(courses)
}

export async function POST(request){
    const { title, description, level, link } = await request.json();
    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
      };
    
      courses.push(newCourse);
    
      return NextResponse.json(courses);
}