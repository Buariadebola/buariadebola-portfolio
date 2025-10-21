const ServiceCard = ({ image, header, text, textB}) => {

  return (
    <div className="service-card">
        <img src={image} alt=""/>
          <div className="service-info">
            <h2>{header}</h2>
            <p>{text}</p>
            <p>{textB}</p>
          </div>
    </div>
  )
}

export default ServiceCard
