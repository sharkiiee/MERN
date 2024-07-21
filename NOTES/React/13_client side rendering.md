## Client side rendering

Client side rendering means every time use change the URL it will take you to the different page according to the URL.

In React you can so client side rendering or routing using `react-router-dom`

Syntax :-

	function App()
	{
		return(
			<BrowserRouter>
				<Routes>
					<Route path="/dashboard" element={<Dashboard/>} />
					<Route path="/dashboard" element={<Landing/>} />
				<Routes>
			</BrowserRouter>
		)
	}