import React from "react";
// Use the images from the workspace `pictures` folder (bundled by Vite via imports)
import curriculumImg from '../../pictures/IMG10.jpg';
import departmentsImg from '../../pictures/IMG 12.jpg';
import timetableImg from '../../pictures/IMG 11.jpg';

export default function Academics() {
  return (
    <div className="page-container">
      <h1>Academics</h1>

      <section>
        <h2>Curriculum</h2>
        <div className="section-media">
          <img src={curriculumImg} alt="Students in a classroom" className="section-image" />
          <div className="section-text">
            <p>Our curriculum is designed to develop strong fundamentals in literacy, numeracy, and scientific thinking across all grade levels.</p>
            <p>It blends national academic standards with project-based learning to encourage critical thinking and problem solving.</p>
            <p>Students engage in hands-on activities, collaborative projects, and inquiry-led experiments that connect learning to real life.</p>
            <p>We emphasize balanced development—intellectual growth alongside social, emotional, and ethical education.</p>
            <p>Language learning, mathematics, science, social studies, and the arts are integrated to provide a broad, well-rounded education.</p>
            <p>Regular assessments inform instruction and help teachers tailor support for each learner's progress and needs.</p>
            <p>Technology is used thoughtfully as a tool to enhance learning, research, and creativity in the classroom.</p>
            <p>We continually review and update the curriculum to reflect current pedagogical best practices and student interests.</p>
            <p>Extra-curricular programs complement classroom learning with clubs, competitions, and community projects.</p>
            <p>Family engagement and transparent reporting ensure parents understand learning goals and can support progress at home.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Departments</h2>
        <div className="section-media">
          <img src={departmentsImg} alt="Department teachers collaborating" className="section-image" />
          <div className="section-text">
            <p>Our school is organized into subject-focused departments that specialize in curriculum, assessment, and teacher development.</p>
            <p>Each department maintains subject expertise and creates aligned resources to ensure instructional coherence across grades.</p>
            <p>Departments collaborate to design interdisciplinary projects that allow students to apply knowledge across domains.</p>
            <p>Teachers receive ongoing professional development and mentorship within their departments to refine classroom practice.</p>
            <p>The science department supports laboratory experiences and inquiry-based investigations for curious learners.</p>
            <p>The language and humanities department emphasizes communication, critical reading, and global awareness.</p>
            <p>The mathematics department focuses on conceptual understanding, reasoning, and problem-solving strategies.</p>
            <p>Arts and physical education departments nurture creativity, expression, health, and teamwork for all students.</p>
            <p>Departments coordinate assessment practices to provide consistent feedback and measurable learning outcomes.</p>
            <p>Students benefit from department-led clubs, special projects, and subject competitions that extend classroom learning.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Timetable</h2>
        <div className="section-media">
          <img src={timetableImg} alt="School timetable and activity schedule" className="section-image" />
          <div className="section-text">
            <p>Our timetable balances academic lessons, creative activities, and time for reflection throughout the school day.</p>
            <p>Class periods are structured to allow deep engagement while providing transitions that support attention and movement.</p>
            <p>Students have scheduled time for focused study, collaborative group work, and teacher-led instruction.</p>
            <p>Regular breaks and physical activity are built into the day to promote wellbeing and cognitive readiness.</p>
            <p>The timetable varies by grade to match developmental needs, with younger students having shorter, more frequent activities.</p>
            <p>Specialist lessons—music, art, physical education, and languages—rotate so every student receives a broad education.</p>
            <p>We coordinate co-curricular activities and assemblies so they complement the academic schedule without causing overlap.</p>
            <p>Parents receive term timetables and planners so families can support routines and homework planning at home.</p>
            <p>The timetable is reviewed each term to accommodate events, exams, and curricular priorities while minimizing disruption.</p>
            <p>Flex periods provide opportunities for extra help, enrichment, and teacher collaboration to meet individual student needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
