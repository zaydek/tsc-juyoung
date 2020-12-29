import React from "react"

interface GreetProps {
	name?: string
}

function Greet({ name }: GreetProps) {
	return <div>Hello {name}</div>
}

interface WrapperProps {
	children?: React.ReactNode
}

function Wrapper({ children }: WrapperProps) {
	return <div className="wrapper">{children}</div>
}

export default function App() {
	return (
		<>
			<Wrapper>
				<Greet name="Juyoung" />
			</Wrapper>
		</>
	)
}
