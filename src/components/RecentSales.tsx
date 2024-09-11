import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "../app/globals.css";

export default function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between w-full flex-col md:flex-row gap-3 md:gap-0">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://mir-s3-cdn-cf.behance.net/user/138/70c4481874139847.66e1b584ce769.jpg"
            alt="Olivia Martin"
          />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex items-center justify-center flex-col lg:flex-row gap-3 ">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="chat-3 font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center justify-between w-full flex-col md:flex-row gap-3 md:gap-0">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage
            src="https://mir-s3-cdn-cf.behance.net/user/138/70c4481874139847.66e1b584ce769.jpg"
            alt="Jackson Lee"
          />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 flex items-center justify-center flex-col lg:flex-row gap-3">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
        <div className="chat-3 font-medium">+$39.00</div>
      </div>
      <div className="flex items-center justify-between w-full flex-col md:flex-row gap-3 md:gap-0">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://mir-s3-cdn-cf.behance.net/user/138/70c4481874139847.66e1b584ce769.jpg"
            alt="Isabella Nguyen"
          />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 flex items-center justify-center flex-col lg:flex-row gap-3">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="chat-3 font-medium">+$299.00</div>
      </div>
      <div className="flex items-center justify-between w-full flex-col md:flex-row gap-3 md:gap-0">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://mir-s3-cdn-cf.behance.net/user/138/70c4481874139847.66e1b584ce769.jpg"
            alt="William Kim"
          />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 flex items-center justify-center flex-col lg:flex-row gap-3">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="chat-3 font-medium">+$99.00</div>
      </div>
      <div className="flex items-center justify-between w-full flex-col md:flex-row gap-3 md:gap-0 chat-5">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://mir-s3-cdn-cf.behance.net/user/138/70c4481874139847.66e1b584ce769.jpg"
            alt="Sofia Davis"
          />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 flex items-center justify-center flex-col lg:flex-row gap-3">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
        <div className="chat-3 font-medium">+$39.00</div>
      </div>
    </div>
  );
}
