import Contactdetails from './Contactdetails';
import Form from './Form';
import Map from './Map'

export default function contact() {
  return (
    <div className="md:m-2 bg-white p-8 xl:p-16 font-josefin">
      <h1 className="text-4xl font-bold text-center mb-10">Contact <span className="text-card">Us</span></h1>
      <div className="grid md:grid-cols-2 gap-20 max-w-6xl md:shadow-xl xl:mx-40 md:pb-11 md:px-11 mx-auto">
        <Form />
        <div className='space-y-4'>
        <Contactdetails />
        <Map width='100%' height='' />
        </div>
      </div>
    </div>
  );
}
