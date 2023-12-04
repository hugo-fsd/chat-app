// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { WebSocketProvider } from './contexts/WebsocketContext'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<WebSocketProvider>
				{children}
			</WebSocketProvider>
		</NextUIProvider>
	)
}