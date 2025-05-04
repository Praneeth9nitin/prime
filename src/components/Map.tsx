
function Map({width,height,classname}:{width:string,height:string,classname?:string}) {
  return (
    <div>
      <div className="space-y-6">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.719831381582!2d-80.8404571847824!3d35.06377778034243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569b9a15b3ed27%3A0x90294dc3ed914d6!2s3440%20Toringdon%20Way%2C%20Charlotte%2C%20NC%2028277%2C%20USA!5e0!3m2!1sen!2sin!4v1680177314087!5m2!1sen!2sin"
                  width={width}
                  height={height}
                  loading="lazy"
                  className={`rounded shadow ${classname}`}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
    </div>
  )
}

export default Map
