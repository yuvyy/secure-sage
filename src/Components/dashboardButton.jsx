import plus from '../assets/plus.png'
import repeat from '../assets/repeat.png'

export default function DashboardButton(props) {
  return (
    <div className='bg-slate-100 shadow-md hover:bg-slate-200 p-2 rounded-md' onClick={console.log("I am clicked")}>
        <img width={120} src={props.type === 'new'? plus : repeat} />
        <h4 className='text-sky-800 text-center text-lg font-medium'>{props.type === 'new'? 'New' : 'Repeat'} Audit</h4>
    </div>
  )
}
