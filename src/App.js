import Films from "./components/Films";



function App() {
  return (
    <div style = {{
    backgroundColor: '#F7E11E',
    fontFamily: "Helvetica",
    display: 'flex', 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center",
    height: "100vh",
    }}> 
       <h1 style={{
         fontSize:'72px'
       }}>Star Wars</h1>

    <Films />
    </div>
  );
}

export default App;
