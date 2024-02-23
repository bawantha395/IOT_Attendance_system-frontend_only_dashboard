
import MyReactClock from 'my-react-clock';


const ClockProps = () => {
  

  const containerStyle = {
    border: '1px solid black',
  };

  return (
    <div>
      
     
      
      {/* Example 3: Styling with a separate style object */}
      <MyReactClock country="Asia/Kolkata" customStyle={containerStyle} />
    </div>
  );
};

export default ClockProps;
