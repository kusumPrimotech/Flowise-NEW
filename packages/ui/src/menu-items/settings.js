// assets
import {
    IconTrash,
    IconFileUpload,
    IconFileExport,
    IconCopy,
    IconSearch,
    IconMessage,
    IconPictureInPictureOff,
    IconLink,
    IconMicrophone
} from '@tabler/icons'

// constant
const icons = {
    IconTrash,
    IconFileUpload,
    IconFileExport,
    IconCopy,
    IconSearch,
    IconMessage,
    IconPictureInPictureOff,
    IconLink,
    IconMicrophone
}

// ==============================|| SETTINGS MENU ITEMS ||============================== //

const settings = {
    id: 'settings',
    title: '',
    type: 'group',
    children: [
        {
            id: 'conversationStarters',
            title: 'Starter Prompts',
            type: 'item',
            url: '',
            icon: icons.IconPictureInPictureOff
        },
        {
            id: 'viewMessages',
            title: 'View Messages',
            type: 'item',
            url: '',
            icon: icons.IconMessage
        },
        {
            id: 'allowedDomains',
            title: 'Allowed Domains',
            type: 'item',
            url: '',
            icon: icons.IconLink
        },
        {
            id: 'enableSpeechToText',
            title: 'Speech to Text',
            type: 'item',
            url: '',
            icon: icons.IconMicrophone
        },
        {
            id: 'duplicateChatflow',
            title: 'Duplicate Chatflow',
            type: 'item',
            url: '',
            icon: icons.IconCopy
        },
        {
            id: 'loadChatflow',
            title: 'Load Chatflow',
            type: 'item',
            url: '',
            icon: icons.IconFileUpload
        },
        {
            id: 'exportChatflow',
            title: 'Export Chatflow',
            type: 'item',
            url: '',
            icon: icons.IconFileExport
        },
        {
            id: 'analyseChatflow',
            title: 'Analyse Chatflow',
            type: 'item',
            url: '',
            icon: icons.IconSearch
        },
        {
            id: 'deleteChatflow',
            title: 'Delete Chatflow',
            type: 'item',
            url: '',
            icon: icons.IconTrash
        }
    ]
}

export default settings
