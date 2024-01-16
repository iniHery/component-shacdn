import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Facebook, Twitter, User, Github } from "lucide-react";
import {
  RiTwitterXLine,
  RiGoogleFill,
  RiFacebookFill,
  RiGithubLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
// import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-8">
      <div className="text-3xl font-semibold">React Desaign Sytem</div>
      <div className="py-14 flex justify-between items-center w-full">
        <div>
          <Button variant="default">
            <Link
              href="https://github.com/iniHery"
              className="flex items-center"
            >
              <RiGithubLine className="mr-2 h-5 w-5" /> iniHery
            </Link>
          </Button>
        </div>
        <ModeToggle />
      </div>
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
                <RiGoogleFill className="mr-2 h-4 w-4" /> Login with Google
              </Button>
              <Button variant="default">
                <RiTwitterXLine className="mr-2 h-4 w-4" /> Login with X
              </Button>
              <Button variant="secondary">
                <RiGithubLine className="mr-2 h-4 w-4" /> Login with Github
              </Button>
              <Button variant="destructive">
                <Mail className="mr-2 h-4 w-4" /> Login with Email
              </Button>
              <Button variant="outline">
                <RiFacebookFill className="mr-2 h-4 w-4" /> Login with Facebook
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
            </div>
          </div>
        </div>
        {/* Input End */}
      </div>

      <div className="pt-10 w-full flex items-start">
        {/* Select Start */}
        <div>
          <div className="py-2">Use Select in Shadcn</div>
          <div>
            <div className="pt-6 gap-4 flex justify-between">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Select End */}
      </div>

      <div className="pt-10 w-full flex items-start">
        {/* Checkbox Start */}
        <div>
          <div className="py-2">Use Checkboox in Shadcn</div>
          <div>
            <div className="pt-6 gap-4 flex justify-between">
              {/* Default Start */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
              {/* Default End */}

              {/* Disable Start */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" disabled />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
              {/* Disable End */}
            </div>
          </div>
        </div>
        {/* Checkbox End */}
      </div>
    </main>
  );
}
