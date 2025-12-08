import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Masters of Science, Computer Science</h3>
            <h4 className="text-sm text-muted-foreground">George Mason University, VA, USA</h4>
            <p className="text-sm text-muted-foreground mt-1">August 2022 - May 2024</p>
            <p className="text-sm text-muted-foreground mt-1">Graduate CourseWork: Analysis of Algorithms, Data Mining, Software Engineering, Component‐based Software Design, Computer Graphics</p>
          </div>
           <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Bachelor of Technology, Computer Science</h3>
            <h4 className="text-sm text-muted-foreground">Bennett University , Greater Noida, India</h4>
            <p className="text-sm text-muted-foreground mt-1">August 2017 - May 2021</p>
            <p className="text-sm text-muted-foreground mt-1">Graduate CourseWork: Algorithms, Operating Systems, Databases, Software Engineering, Cloud Computing, Neural Networks, Pattern Recognition, Deep Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;