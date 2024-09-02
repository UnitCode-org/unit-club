import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { TextFadeInBottom } from "@/components/animations/TextFadeInBottom";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from 'react';

function MembershipForm() {
  return (
    <div className="w-full h-full flex-grow flex flex-col items-center justify-center pb-32 pt-32">
      <div className="text-center">
        <h1 className="text-6xl font-albert-sans font-bold">
          <TextFadeInBottom
            y={100}
            staggerChildren={0.1}
            text="TELL US ABOUT YOURSELF"
          />
        </h1>
      </div>
      <form className="w-full max-w-4xl flex flex-col items-center">
        <FadeInBottom className="w-full mt-20 mb-14" y={80}>
          <Input label="Referred by" name="refferredBy" />
        </FadeInBottom>
        <div className="flex flex-col gap-5 w-full">
          <FadeInBottom className="w-full" y={80} delay={0.1}>
            <Select defaultValue="365">
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

          <FadeInBottom className="w-full" y={80} delay={0.15}>
            <Input label="First Name" name="firstName" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.2}>
            <Input label="Last Name" name="lastName" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.25}>
            <Input label="City You Are Based In" name="city" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.3}>
            <Input label="Twitter" name="twitter" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.35}>
            <Input label="Instagram" name="instagram" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.4}>
            <Input label="LinkedIn" name="linkedin" />
          </FadeInBottom>
          <FadeInBottom className="w-full" y={80} delay={0.45}>
            <Input label="Tell Us About Yourself..." name="description" />
          </FadeInBottom>
        </div>
        <div className="mt-12">
          <FadeInBottom delay={0.5}>
            <Button className="px-7 py-6 text-md" variant="default">
              SUBMIT APPLICATION
            </Button>
          </FadeInBottom>
        </div>
      </form>
    </div>
  );
}

export default MembershipForm;