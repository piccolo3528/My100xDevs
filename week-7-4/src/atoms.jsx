import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 106
})

export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 0
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 12
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkNotificationCount = get(networkAtom);
        const jobsAtomCount = get(jobAtom);
        const messagingAtomCount = get(messagingAtom);
        const notificationAtomCount = get(notificationAtom);
        return networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
    }
})