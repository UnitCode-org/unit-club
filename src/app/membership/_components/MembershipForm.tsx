import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { TextFadeInBottom } from "@/components/animations/TextFadeInBottom";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface MembershipFormProps {
  applyFor: string;
}

function MembershipForm({ applyFor }: MembershipFormProps) {
  return (
    <div className="w-full h-full flex-grow flex flex-col items-center justify-center md:py-32 py-16 mt-4 md:mt-20">
      <div className="text-center px-10 md:px-6">
        <h1 className="text-5xl md:text-6xl font-albert-sans font-bold leading-[3.5rem]">
          <TextFadeInBottom
            y={100}
            staggerChildren={0.1}
            text="TELL US ABOUT YOURSELF"
          />
        </h1>
      </div>
      <form className="w-full max-w-4xl flex flex-col items-center px-5 md:px-6">
        <FadeInBottom className="w-full md:mt-20 mt-7 mb-14" y={80}>
          <Input label="Referred by" name="refferredBy" />
        </FadeInBottom>
        <div className="flex flex-col gap-3 w-full">
          <FadeInBottom className="w-full" y={80} delay={0.1}>
            <Select defaultValue={applyFor}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a value" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="365">UC 365</SelectItem>
                  <SelectItem value="black">UC Black</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FadeInBottom>

          <FadeInBottom className="w-full" y={80} delay={0.2}>
            <Input label="First Name" name="firstName" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.3}>
            <Input label="Last Name" name="lastName" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.4}>
            <Input label="City You Are Based In" name="city" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.5}>
            <Input label="Twitter" name="twitter" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.6}>
            <Input label="Instagram" name="instagram" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.7}>
            <Input label="LinkedIn" name="linkedin" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.8}>
            <Input label="Tell Us About Yourself..." name="description" />
          </FadeInBottom>
        </div>
        <div className="mt-12">
          <FadeInBottom delay={0.9}>
            <Button className="px-7 py-6 text-md w-56" variant="default">
              SUBMIT APPLICATION
            </Button>
          </FadeInBottom>
        </div>
      </form>
    </div>
  );
}

export default MembershipForm;
