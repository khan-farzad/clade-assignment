const About = () => {
  return (
    <div className="flex flex-col gap-2 py-9 px-[6.25rem] text-[16px] leading-[28px] font-normal text-tertiary ">
      <h2 className="text-alt text-sm font-normal">About the job</h2>
      <div>
        <ol className="list-decimal list-inside">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web adivplications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <h3>Benefits:</h3>
        <ul className="list-disc list-inside pl-2">
          <li>Health Insurance</li>
          <li>Provident Fund</li>
        </ul>
        <h3>Schedule:</h3>
        <ul className="list-disc list-inside pl-2">
          <li>Day Shift</li>
        </ul>
        <h3>Supplement Pay Types:</h3>
        <ul className="list-disc list-inside pl-2">
          <li>Performance Bonus</li>
          <li>Yearly Bonus</li>
        </ul>
        <p>Work location: In person</p>
      </div>
    </div>
  );
};

export default About;
