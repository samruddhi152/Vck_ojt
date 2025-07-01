import Header from "../conponentes/Header";

const CoursesPage = () => {
 return(
    <div>
        <p className="header1">
         <Header/>
        </p>
        <div className="page-container">
         <h1 style={{ color:'blue'}} className="headings">Our Academic Programs</h1>
         <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
         <h2>Discover Campus Life</h2>
         <video src="https://vck-ojt.vercel.app/assets/college-tour-FAmcnyfF.mp4" width="1200" controls> Get a glimpse of the vibrant academic and social life at Vivekanand College.</video>
         <h3 style={{ textAlign:"center"}}>Get a glimpse of the vibrant academic and social life at Vivekanand College.</h3>
         <h2>Undergraduate Programs (UG)</h2><hr/>
         <ul className="styled-list">
            <li>Bachelor of Science (B.Sc.)</li>
            <ul>
               <li>Computer Science (3 years)</li>
               <li>Information Technology (3 years)</li>
               <li>Biotechnology (3 years)</li>
            </ul>
            <li>Bachelor of Commerce (B.Com)</li>
            <ul>
               <li>Accounting & Finance (3 years)</li>
               <li>Banking & Insurance (3 years)</li>
            </ul>
            <li>Bachelor of Arts (B.A.)</li>
            <ul>
               <li>English Literature (3 years)</li>
               <li>Psychology (3 years)</li>
            </ul> 
         </ul>
         <h2>Postgraduate Programs (PG)</h2>
            <ul className="styled-list">
               <li>Master of Science (M.Sc.)</li>
               <ul>
                  <li>Computer Science (2 years)</li>
                  <li>Information Technology (2 years)</li>
               </ul>
               <li>Master of Commerce (M.Com) (2 years)</li>
               <li>Master of Arts (M.A.) (2 years)</li>
            </ul>
            <h2>Program Details & Fee Structure (Annual)</h2>
            <table className="styled-table">
               <thead>
                  <tr>
                     <th>Program Type</th>
                     <th>Course Name</th>
                     <th>Duration</th>
                     <th>Annual Fee (INR)</th>
                     <th>Eligibility</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>ug</td>
                     <td>B.Sc. Computer Science</td>
                     <td>3 Years</td>
                     <td>₹ 85,000</td>
                     <td>10+2 with PCM (50%)</td>
                  </tr>
                  <tr>
                     <td>UG</td>
                     <td>B.Com. Accounting & Finance</td>
                     <td>3 Years</td>
                     <td>₹ 70,000</td>
                     <td>10+2 Commerce (45%)</td>
                  </tr>
                  <tr>
                     <td>PG</td>
                     <td>M.Sc. Information Technology</td>
                     <td>2 Years</td>
                     <td>₹ 95,000</td>
                     <td>B.Sc. IT/CS (50%)</td>
                  </tr>
               </tbody>
            </table>
            <h2>Specialized & Vocational Courses</h2><hr/>
            <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p><br/>
            <footer style={{ textAlign:'center'}}>Have questions about a specific codes?</footer>
        </div>
    </div>
 )
}

export default CoursesPage;