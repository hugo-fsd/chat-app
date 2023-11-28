import { Button, ButtonGroup, Card } from '@nextui-org/react';
import { useState, useContext } from 'react';
import { Channel } from '../DTOs/Channel';
import CreateChannelModal from '../shared/components/CreateChannelModal';
import TextChannelBtn from '../shared/components/TextChannelBtn';
import VoiceChannelBtn from '../shared/components/VoiceChannelBtn';
import { SelectedChannelContext } from '../components/Server';

export default function ChannelsPanel(props: {
    channels: Channel[],
}) {

    const [modalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    const addIcon = <span className="material-symbols-outlined">add</span>;

    return (
        <div className='channel-list w-64 flex flex-col items-stretch'>
            <div className='title text-center p-3 mb-5'>SERVER NAME</div>
            <div className='channel-buttons flex-1'>
                {props.channels.map((channel) => (
                    <div key={channel.id}>
                        {channel.type === 'text' && <TextChannelBtn channelName={channel.name} channelId={channel.id} />}
                        {channel.type === 'voice' && <VoiceChannelBtn channelName={channel.name} channelId={channel.id} />}
                    </div>
                ))}
            </div>
            <div className='user-buttons'>
                <ButtonGroup variant="light" className="flex flex-row w-full" radius="none" size="sm" fullWidth>
                    <CreateChannelModal isOpen={modalOpen} onOpenChange={closeModal} />
                    <Button isIconOnly className="flex justify-center items-center w-full" onClick={openModal}>
                        {addIcon}
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};
