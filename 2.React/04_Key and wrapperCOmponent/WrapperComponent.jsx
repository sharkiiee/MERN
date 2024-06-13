// Wrapping components

function App()
{
  return(
    <div>
      <WrapperComponent >Hii there</WrapperComponent>
      <WrapperComponent >Hii there</WrapperComponent>
    </div>
  )
}

function WrapperComponent({children})
{
  return <div style={{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}

export default App