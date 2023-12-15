import { ChannelDTO } from "./ChannelDTO"
import { SenderDTO, UserDTO } from "./UserDTO"
import { IEvent, EventType, ResultType } from "./Types"

export class GuildDTO {
	guildId: string
	ownerId: string
	guildName: string
	channels: ChannelDTO[]
	members: SenderDTO[]
	logo: string = ""

	constructor(guildId: string, name: string, ownerId: string) {
		this.guildId = guildId
		this.ownerId = ownerId
		this.members = []
		this.guildName = name
		this.channels = []
	}

	getName() {
		return this.guildName
	}

	setName(name: string) {
		this.guildName = name
	}

	getChannels() {
		return this.channels
	}

	setChannels(channels: ChannelDTO[]) {
		this.channels.concat(channels)
	}

	addChannel(channel: ChannelDTO) {
		this.channels.push(channel)
	}

	setLogo(logo: string) {
		this.logo = logo
	}

	addMember(member: SenderDTO) {
		this.members.push(member)
	}
}


export class CreateGuildEvent implements IEvent {
	type: EventType
	body: any

	constructor(ownerId: string, guildName: string) {
		this.type = EventType.CreateGuild
		this.body = { ownerId, guildName }
	}
}

export class DeleteGuildEvent implements IEvent {
	type: EventType
	body: any

	constructor(userguildId: string, guildguildId: string) {
		this.type = EventType.DeleteGuild
		this.body = { userguildId, guildguildId }
	}
}

export class JoinGuildEvent implements IEvent {
	type: EventType
	body: any

	constructor(guildguildId: string, member: SenderDTO) {
		this.type = EventType.JoinGuild
		this.body = { guildguildId, member }
	}
}

export class LeaveGuildEvent implements IEvent {
	type: EventType
	body: any

	constructor(guildguildId: string, memberguildId: string) {
		this.type = EventType.LeaveGuild
		this.body = { guildguildId, memberguildId }
	}
}


export interface JoinGuildResult {
	type: ResultType
	body: {
		guild: GuildDTO
	}
}
