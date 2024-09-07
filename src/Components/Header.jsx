import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="p-2 shadow-lg flex justify-between items-center">
      <div className="border-primary  rounded-lg p-2 pb-3">
        <h2 className=" font-semibold text-4xl text-primary">SecureSage</h2>
      </div>
      <nav>
        <ul className="flex gap-10">
          <Button variant='link' className='text-lg'>Home</Button>
          <Button variant='link' className='text-lg'>Reports</Button>
          <Button variant='link' className='text-lg'>About Us</Button>
        </ul>
      </nav>
      <div className="border-primary  rounded-lg p-2 pb-3">
        <h2 className=" font-semibold text-4xl text-card">SecureSage</h2>
      </div>
      {/* <h2 className="text-blue-900 text-2xl font-medium">SIH</h2> */}
    </div>
  );
}
