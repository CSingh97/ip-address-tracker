import './App.css';

function App() {
  return (
    <>
      <div class="header">
        IP Address Tracker

        <div class="searchbar">
        <input type="text" placeholder="Search for any IP address or domain"></input>
        </div>
      </div>

      <div class="article">
        <div>
          IP Address
          Location
          Timezone
          UTC (add offset value dynamically using the API)
          ISP
        </div>  
      </div>

        <div class="attribution">
          Challenged by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="https://github.com/CSingh97">Calvin Singh</a>.
        </div>
    </>
      );
}

      export default App;
