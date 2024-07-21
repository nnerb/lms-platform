import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, } from "lucide-react"
import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
  return (
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <SheetHeader>
          <SheetTitle hidden></SheetTitle>
          <SheetDescription hidden></SheetDescription>
          </SheetHeader>
          <Sidebar />   
        </SheetContent>
      </Sheet>
  )
}