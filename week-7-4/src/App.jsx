import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom } from './atoms'
import { jobAtom } from './atoms'
import { messagingAtom } from './atoms'
import { notificationAtom } from './atoms'
import { totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My Networks({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messages({messagingAtomCount})</button>
      <button>Notification({notificationAtomCount})</button>

      <button>ME({totalNotificationCount})</button>
    </>
  )
}

export default App
