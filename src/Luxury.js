import './Task.css';

function Luxury() {
  return (
    <div className="box bg-teal-900 rounded-r-lg">
    <div className="icon">
      <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512" >
      <path d="M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"/>
      </svg>
    </div>
    <div>
      <h1 className="mt-3.5 ml-12 mr-12 text-2xl text-white font-Dosia font-semibold">LUXURY</h1>
      <p className="mt-3.5 ml-12 mr-12 text-xl text-white font-Dosia font-normal">
        Cruise in the best car brands without the bloated prices.
        Enjoy the enhanced comfort of a luxury rental and arrive in style. 
      </p>
    </div>
    <br />
    <div>
        <button className="more text-[#00403f]">Learn More</button>
    </div>
    </div>
  );
}

export default Luxury;