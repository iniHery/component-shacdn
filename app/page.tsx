import {
  Mail,
  Phone,
  X,
  Camera,
  Facebook,
  Twitter,
  User,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-8">
      <div>React Desaign Sytem</div>
      <div className="pt-10 w-full flex items-start">
        {/* Button Start */}
        <div>
          <div className="py-2">Use button in Shadcn</div>
          <div className="pt-6 gap-4 flex justify-between">
            <Button variant="custom">Custom</Button>
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        {/* Button End */}
      </div>

      <div className="pt-10 w-full flex items-start">
        {/* Icon Start */}
        <div>
          <div className="py-2">Use button icon in Shadcn</div>
          <div className="pt-6 gap-4 flex justify-between">
            <Button size="icon" variant="custom">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="default">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="destructive">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Icon End */}
      </div>

      <div className="pt-10 w-full flex items-start">
        {/* With Icon Start */}
        <div>
          <div className="py-2">Use button with icon in Shadcn</div>
          <div>
            <div className="pt-6 gap-4 flex justify-between">
              <Button variant="custom">
                <Twitter className="mr-2 h-4 w-4" /> Login with Twitter
              </Button>
              <Button variant="default">
                <Facebook className="mr-2 h-4 w-4" /> Login with Facebook
              </Button>
              <Button variant="secondary">
                <User className="mr-2 h-4 w-4" /> Login with Google
              </Button>
              <Button variant="destructive">
                <Github className="mr-2 h-4 w-4" /> Login with Github
              </Button>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" /> Login with Email
              </Button>
              <Button variant="ghost">
                <Phone className="mr-2 h-4 w-4" /> Login with Phone Number
              </Button>
            </div>
          </div>
        </div>
        {/* With Icon End */}
      </div>

      <div className="pt-10 w-full flex items-start">
        {/* Input Start */}
        <div>
          <div className="py-2">Use input in Shadcn</div>
          <div>
            <div className="pt-6 gap-4 flex justify-between">
              <Input type="text" placeholder="Text" />
              <Input type="number" placeholder="Number" />
              <Input type="date" placeholder="date" />
              <Input type="file" placeholder="File" />
            </div>
          </div>
        </div>
        {/* Input End */}
      </div>
    </main>
  );
}
