export class Course {
  
  constructor(
    public course_id: number, // internal id
    public code: string, // see lsf Vst.-Nr.
    public name: string,
    public lecturer: string,
    public hours: string,
    public ects: number, 
    public type: string, // project, seminar, lecture, colloquium
    public semester: string,
    public subject: string // basic, interdisciplinary, special, applied  
  ) {  }
  
}
