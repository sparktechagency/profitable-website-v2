import ProfileSlide from "@/components/shared/ProfileSlide";


export default function layout({children}) {
  return (
    <div className="md:grid md:grid-cols-6 my-20">
      <ProfileSlide></ProfileSlide>
      <div className="md:col-span-5">
      {children}
      </div>
      
    </div>
  )
}
