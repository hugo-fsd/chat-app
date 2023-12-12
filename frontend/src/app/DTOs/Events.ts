export interface Event {
    type: number
    body: any
}

export class RegisterEvent implements Event {
    type: number
    body: any

    constructor(username: string, password: string, email: string) {
        this.type = 0
        this.body = { username, password, email }
    }
}

export class LoginEvent implements Event {
    type: number
    body: any

    constructor(username: string, password: string) {
        this.type = 1
        this.body = { username, password }
    }
}

export class LogoutEvent implements Event {
    type: number
    body: any;
    constructor(userId: string) {
        this.type = 2
        this.body = { userId, result: false }
    }
}

export class ChatMessageEvent implements Event {
    type: number
    body: any

    constructor(userId: string, guildId: string, channelId: string, content: string) {
        this.type = 3
        this.body = {
            userId,
            guildId,
            channelId,
            content
        }
    }

}

export interface AuthenticationResult {
    type: number
    body: {
        result: boolean
        token: string
        userId: string
        state: string[]
    }
}