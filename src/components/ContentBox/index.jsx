import TitleRow from "./TitleRow"

function ContentBox({children, title, icon}) {
  return (
    <section>
      <TitleRow title={title} icon={icon}/>
      <div className='bg-lit-2 max-width-lg box radius margin-b-10'>
        {children}
      </div>
    </section>
  )
}

export default ContentBox