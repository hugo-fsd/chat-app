import { Button, Input } from "@nextui-org/react"
import React, { useEffect, useRef } from "react"
import Message from "../shared/Message"
import { MessageDTO } from "@/app/DTOs/MessageDTO"

export default function ChatPanel(props: {
	messages: MessageDTO[]
	channelId: number
	createNewMessage: (message: string) => void
}) {
	const [input, setInput] = React.useState("")
	const chatContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
		}
	}, [props.messages])

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" && input !== "") {
			event.preventDefault()
			props.createNewMessage(input)
			setInput("")
		}
	}

	return (
		<div
			className="chat-panel flex flex-col h-full px-3 pb-5"
			style={{ border: "2px solid blue" }}
		>
			<div
				ref={chatContainerRef}
				className="message-container flex flex-col gap-10 overflow-y-auto flex-1 w-full pt-5 px-3 pb-3"
			>
				{props.messages.map((message) => (
					<Message message={message.body} key={message.id}></Message>
				))}
			</div>
			{props.channelId !== null && (
				<div>
					<Input
						className=""
						radius="md"
						variant="bordered"
						placeholder="Say something..."
						value={input}
						onValueChange={setInput}
						onKeyDown={handleKeyPress}
						endContent={
							<Button
								isIconOnly
								className="bg-transparent outline-none"
								color="primary"
								disableRipple
								variant="flat"
								onPress={() => {
									if (input !== "") {
										props.createNewMessage(input)
										setInput("")
									}
								}}
							>
								<span className="material-symbols-outlined">send</span>
							</Button>
						}
					></Input>
				</div>
			)}
		</div>
	)
}