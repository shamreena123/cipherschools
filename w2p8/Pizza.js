const root=document.getElementById("root");
function Pizza(){
    return(
        <div class="pizza">
          <h1>Pizza</h1>
        </div>
    )
}

ReactDOM.createRoot(root).render(<Pizza />);