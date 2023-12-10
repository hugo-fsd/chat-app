export interface DataExchangeObject {
	type: number
	body: any
}

export class RegisterRequest implements DataExchangeObject {
	type: number
	body: any

	constructor(userId: string) {
		this.type = 0
		this.body = { userId, result: false }
	}
}

export class LoginRequest implements DataExchangeObject {
	type: number
	body: any

	constructor(userId: string) {
		this.type = 1
		this.body = { userId, result: false }
	}
}

export class LogoutRequest implements DataExchangeObject {
	type: number
	body: any
	constructor(userId: string) {
		this.type = 2
		this.body = { userId, result: false }
	}
}

export class ChatMessageRequest implements DataExchangeObject {
	type: number
	body: any

	constructor(userId: string, guildId: string, channelId: string, content: string) {
		this.type = 3
		this.body = {
			userId,
			guildId,
			channelId,
			content,
		}
	}
}