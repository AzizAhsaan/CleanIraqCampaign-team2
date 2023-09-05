interface OurInputsProps {
    id: string; // Define the id prop with the correct type
  }
  function OurInputs({ id }: OurInputsProps) {
    return (
      <input
        type="text"
        id={id} // Pass the id prop to the input element
        className="text-right border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md transition-shadow duration-300  m-5 w-72 lg:w-96"
      />
    );
  }
  
  export default OurInputs;
  