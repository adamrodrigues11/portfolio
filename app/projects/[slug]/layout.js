import BackButton from "@/app/components/BackButton"

export default function ProjectDetailsLayout({ children }) {
  return (
    <div>
        <BackButton />
        <div>{children}</div>
    </div>
  )
}
