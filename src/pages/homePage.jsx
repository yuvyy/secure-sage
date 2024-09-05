import FadeIn from 'react-fade-in';
import Header from '../components/header'
import Dashboard from '../components/dashboard'
import DashboardButton from '../components/dashboardButton'
function HomePage() {

  return (
    <FadeIn delay={800} transitionDuration={800}>

      <header><Header/></header>
      <main className='p-4 flex flex-col gap-8'>
      <Dashboard/>
      <div className='flex gap-8 self-center'>
        <DashboardButton type='repeat'/>
        <DashboardButton type='new'/>
      </div>
      </main>

    </FadeIn>
  )
}

export default HomePage