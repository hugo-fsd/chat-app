import { ChannelDTO } from "./ChannelDTO"

export class GuildDTO {
	id: string
	name: string
	channels: ChannelDTO[] = [new ChannelDTO("1", "Text Channel", "text")]
	logo: string = ""

	constructor(id: string, name: string) {
		this.id = id
		this.name = name
	}

	getName() {
		return this.name
	}

	setName(name: string) {
		this.name = name
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
}
