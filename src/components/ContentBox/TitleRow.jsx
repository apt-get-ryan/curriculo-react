function TitleRow({title, icon}) {
  return (
    <div className='flex gap-10' style={{paddingLeft: 10}}>
      {icon}
      <h2>
        {title}
      </h2>
    </div>
  )
}

export default TitleRow